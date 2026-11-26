<template>
  <div class="w-full font-primary text-content-main">
    <form
      class="max-w-container w-full mx-auto px-5 py-5 laptop:px-4 laptop:py-10 mb-24 flex flex-col gap-5 laptop:gap-8"
      novalidate
      @submit.prevent="submitForm"
    >
      <!-- Заголовок -->
      <h1 class="flex flex-col items-center text-xl laptop:text-[2.5rem] laptop:leading-[1.1] font-bold text-center">
        <span class="sr-only">Цены.</span>
        <span class="flex items-center justify-center gap-1 laptop:gap-2">
          <span>MiTech –</span>
          <span
            class="inline-flex items-center gap-1 laptop:gap-2 rounded-full bg-surface-cream text-amber laptop:text-primary font-semibold pl-2 pr-3 py-1 laptop:px-4 laptop:py-2"
          >
            <img
              src="../assets/svg/prices-page/highlight.svg"
              alt=""
              class="h-7 w-7 laptop:h-[52px] laptop:w-[52px]"
            />
            легкий
          </span>
        </span>
        <span class="-mt-1">расчет</span>
      </h1>

      <div class="grid grid-cols-1 laptop:grid-cols-2 gap-5 laptop:gap-8 items-start">
        <!-- Левая колонка: направление + груз -->
        <div class="flex flex-col gap-5 laptop:gap-8">
          <!-- Направление -->
          <section :class="cardClass">
            <div :class="cardHeadClass">
              <span :class="iconBoxClass">
                <img src="../assets/svg/prices-page/location.svg" alt="" class="h-5 w-5" />
              </span>
              <h2 :class="cardTitleClass">Направление</h2>
              <span :class="infoClass" aria-hidden="true">?</span>
            </div>
            <div :class="cardBodyClass">
              <div class="flex items-start gap-2">
                <label class="flex flex-col gap-2 laptop:gap-1 flex-1 min-w-0">
                  <span :class="labelClass">Откуда</span>
                  <span :class="[inputWrapClass, errorBorder('fromCity')]">
                    <img src="../assets/svg/prices-page/pin.svg" alt="" class="h-[18px] w-[14px] shrink-0" />
                    <input
                      v-model="formData.fromCity"
                      type="text"
                      name="fromCity"
                      placeholder="Введите город"
                      :class="inputClass"
                      @change="v$.fromCity.$touch"
                    />
                  </span>
                  <span v-if="v$.fromCity.$error" :class="errorClass">{{ v$.fromCity.$errors[0]?.$message }}</span>
                </label>

                <button
                  type="button"
                  class="mt-[26px] laptop:mt-[30px] h-6 w-6 shrink-0 flex items-center justify-center rounded-input hover:bg-bg-subtle"
                  aria-label="Поменять города местами"
                  @click="swapCities"
                >
                  <img src="../assets/svg/prices-page/swap.svg" alt="" class="h-4 w-[18px]" />
                </button>

                <label class="flex flex-col gap-2 laptop:gap-1 flex-1 min-w-0">
                  <span :class="labelClass">Куда</span>
                  <span :class="[inputWrapClass, errorBorder('toCity')]">
                    <img src="../assets/svg/prices-page/pin.svg" alt="" class="h-[18px] w-[14px] shrink-0" />
                    <input
                      v-model="formData.toCity"
                      type="text"
                      name="toCity"
                      placeholder="Введите город"
                      :class="inputClass"
                      @change="v$.toCity.$touch"
                    />
                  </span>
                  <span v-if="v$.toCity.$error" :class="errorClass">{{ v$.toCity.$errors[0]?.$message }}</span>
                </label>
              </div>
            </div>
          </section>

          <!-- Груз -->
          <section :class="cardClass">
            <div :class="cardHeadClass">
              <span :class="iconBoxClass">
                <img src="../assets/svg/prices-page/cargo.svg" alt="" class="h-5 w-5" />
              </span>
              <h2 :class="cardTitleClass">Груз</h2>
              <span :class="infoClass" aria-hidden="true">?</span>
            </div>
            <div :class="cardBodyClass">
              <label class="flex flex-col gap-2 laptop:gap-1">
                <span :class="labelClass">Наименование груза</span>
                <span :class="[inputWrapClass, errorBorder('cargo')]">
                  <input
                    v-model="formData.cargo"
                    type="text"
                    name="cargo"
                    placeholder="Введите название груза"
                    :class="inputClass"
                    @change="v$.cargo.$touch"
                  />
                </span>
                <span v-if="v$.cargo.$error" :class="errorClass">{{ v$.cargo.$errors[0]?.$message }}</span>
              </label>

              <div class="grid grid-cols-2 gap-3 laptop:gap-6">
                <label class="flex flex-col gap-2 laptop:gap-1">
                  <span :class="labelClass">Вес, кг</span>
                  <span :class="[inputWrapClass, errorBorder('weight')]">
                    <input
                      v-model="formData.weight"
                      type="text"
                      inputmode="decimal"
                      name="weight"
                      placeholder="Введите вес"
                      :class="inputClass"
                      @change="v$.weight.$touch"
                    />
                  </span>
                  <span v-if="v$.weight.$error" :class="errorClass">{{ v$.weight.$errors[0]?.$message }}</span>
                </label>
                <label class="flex flex-col gap-2 laptop:gap-1">
                  <span :class="labelClass">Объем, м3</span>
                  <span :class="inputWrapClass">
                    <input
                      v-model="formData.volume"
                      type="text"
                      inputmode="decimal"
                      name="volume"
                      placeholder="Введите объем"
                      :class="inputClass"
                    />
                  </span>
                </label>
              </div>

              <label class="flex flex-col gap-2 laptop:gap-1">
                <span :class="labelClass">Комментарии</span>
                <textarea
                  v-model="formData.comment"
                  name="comment"
                  placeholder="Любые замечания/пожелания"
                  class="h-24 w-full resize-none rounded-input border border-border-light bg-bg-subtle px-4 py-3 text-sm font-medium text-content-main outline-none transition-colors placeholder:text-content-light focus:border-primary"
                ></textarea>
              </label>

              <fieldset class="flex flex-col gap-2">
                <legend :class="labelClass" class="mb-2">Дополнительные услуги</legend>
                <div class="grid grid-cols-2 gap-x-6 gap-y-2.5 laptop:flex laptop:gap-12">
                  <div
                    v-for="opt in serviceOptions"
                    :key="opt.key"
                    class="flex"
                  >
                    <input
                      :id="`prices-${opt.key}`"
                      v-model="formData[opt.key]"
                      type="checkbox"
                      class="custom-checkbox"
                      :name="opt.key"
                    />
                    <label :for="`prices-${opt.key}`" class="text-sm font-normal">{{ opt.label }}</label>
                  </div>
                </div>
              </fieldset>
            </div>
          </section>
        </div>

        <!-- Правая колонка: контакты + согласие + кнопка -->
        <div class="flex flex-col gap-5 laptop:gap-3">
          <section :class="cardClass">
            <div :class="cardHeadClass">
              <span :class="iconBoxClass">
                <img src="../assets/svg/prices-page/contact.svg" alt="" class="h-5 w-5" />
              </span>
              <h2 :class="cardTitleClass">Контактные данные</h2>
              <span :class="infoClass" aria-hidden="true">?</span>
            </div>
            <div :class="cardBodyClass">
              <div class="grid grid-cols-1 mobile:grid-cols-2 gap-x-3 laptop:gap-x-6 gap-y-2">
                <label
                  v-for="f in contactFields"
                  :key="f.key"
                  class="flex flex-col gap-2 laptop:gap-1"
                >
                  <span :class="labelClass">{{ f.label }}</span>
                  <span :class="[inputWrapClass, errorBorder(f.key)]">
                    <input
                      v-model="formData[f.key]"
                      :type="f.type"
                      :name="f.key"
                      :placeholder="f.placeholder"
                      :class="inputClass"
                      @change="v$[f.key].$touch"
                    />
                  </span>
                  <span v-if="v$[f.key].$error" :class="errorClass">{{ v$[f.key].$errors[0]?.$message }}</span>
                </label>

                <fieldset class="flex flex-col gap-2">
                  <legend :class="labelClass" class="mb-2">Вид связи</legend>
                  <div class="flex flex-col gap-2.5">
                    <div v-for="opt in contactByOptions" :key="opt.key" class="flex">
                      <input
                        :id="`prices-${opt.key}`"
                        v-model="formData[opt.key]"
                        type="checkbox"
                        class="custom-checkbox"
                        :name="opt.key"
                      />
                      <label :for="`prices-${opt.key}`" class="text-sm font-normal">{{ opt.label }}</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </section>

          <div class="flex flex-col gap-5 laptop:gap-3">
            <div>
              <input
                id="prices-consent"
                v-model="formData.checkbox"
                type="checkbox"
                class="custom-checkbox"
                :class="{ 'is-error': v$.checkbox.$error }"
                name="consent"
              />
              <label for="prices-consent" class="text-sm font-medium">
                <span>
                  Я согласен на
                  <a href="./lorem.pdf" target="_blank" class="underline" @click.stop>
                    обработку персональных данных
                  </a>
                </span>
              </label>
              <p v-if="v$.checkbox.$error" :class="errorClass" class="mt-1">
                {{ v$.checkbox.$errors[0]?.$message }}
              </p>
            </div>

            <button
              type="submit"
              :disabled="isLoading"
              class="w-full rounded-input px-6 py-4 text-base laptop:text-xl font-bold text-content-main transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-content-main"
              :class="
                isLoading
                  ? 'cursor-not-allowed bg-primary opacity-70'
                  : isButtonDisabled
                    ? 'bg-primary/60 hover:bg-primary-hover'
                    : 'bg-primary hover:bg-primary-hover active:bg-primary-hover'
              "
            >
              {{ isLoading ? 'Отправка...' : 'Рассчитать стоимость перевозки' }}
            </button>
          </div>
        </div>
      </div>
    </form>

    <Transition name="fade">
      <Alert v-if="isAlertShowed" />
    </Transition>
  </div>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import {
  required,
  email,
  helpers,
  numeric
} from '@vuelidate/validators';
import { useChallengeV3 } from 'vue-recaptcha';

// Классы на токенах tailwind.config.js (макет design.fig: «Цены»)
const cardClass =
  'rounded-card border border-border-light bg-bg-main shadow-sm overflow-hidden';
const cardHeadClass =
  'flex items-center gap-4 p-4 laptop:p-6 border-b border-border-light';
const cardBodyClass = 'flex flex-col gap-2 p-4 laptop:p-6';
const iconBoxClass =
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-input bg-bg-main shadow-md';
const cardTitleClass = 'text-base laptop:text-2xl font-bold';
const infoClass =
  'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border-light bg-bg-subtle text-xs font-bold text-content-light';
const labelClass = 'text-sm laptop:text-base font-bold';
const inputWrapClass =
  'flex items-center gap-2 h-11 px-4 rounded-input border bg-bg-subtle transition-colors focus-within:border-primary';
const inputClass =
  'w-full min-w-0 bg-transparent text-sm font-medium text-content-main outline-none placeholder:text-content-light';
const errorClass = 'text-sm text-error';

const serviceOptions = [
  { key: 'temperature', label: 'Температура' },
  { key: 'convoy', label: 'Конвой' },
  { key: 'insurance', label: 'Страхование' },
  { key: 'consolidatedCargo', label: 'Сборный груз' },
  { key: 'adr', label: 'АДР' }
];

const contactByOptions = [
  { key: 'contactByPhone', label: 'Телефон' },
  { key: 'contactByEmail', label: 'Email' }
];

const contactFields = [
  { key: 'name', label: 'ФИО', placeholder: 'Введите ФИО', type: 'text' },
  { key: 'phone', label: 'Телефон', placeholder: 'Введите телефон', type: 'tel' },
  { key: 'company', label: 'Компания', placeholder: 'Введите название компании', type: 'text' },
  { key: 'address', label: 'Адрес компании', placeholder: 'Введите адрес компании', type: 'text' },
  { key: 'email', label: 'Email', placeholder: 'Введите почту', type: 'text' }
];

const isAlertShowed = ref(false);
const isLoading = ref(false);

const initialData = () => ({
  company: '',
  address: '',
  name: '',
  email: '',
  phone: '',
  cargo: '',
  weight: '',
  volume: '',
  // В макете указываются только города; страны оставлены в payload пустыми
  fromCountry: '',
  toCountry: '',
  fromCity: '',
  toCity: '',
  comment: '',
  temperature: false,
  convoy: false,
  insurance: false,
  consolidatedCargo: false,
  adr: false,
  contactByPhone: false,
  contactByEmail: false,
  checkbox: false,
  isContact: false
});

const formData = reactive(initialData());

// Невидимая reCAPTCHA v3 (ключ — runtimeConfig.public.recaptcha.v3SiteKey),
// токен получаем перед отправкой, как в ContactForm.vue
const { execute: executeRecaptcha } = useChallengeV3('prices_form_submit');

const rules = computed(() => {
  return {
    company: {
      required: helpers.withMessage('Это поле обязательное', required)
    },
    address: {
      required: helpers.withMessage('Это поле обязательное', required)
    },
    name: {
      required: helpers.withMessage('Это поле обязательное', required)
    },
    email: {
      required: helpers.withMessage('Это поле обязательное', required),
      email: helpers.withMessage('e-mail введён некорректно', email)
    },
    phone: {
      required: helpers.withMessage('Это поле обязательное', required),
      numeric: helpers.withMessage('Допустимы только цифры', numeric)
    },
    cargo: {
      required: helpers.withMessage('Это поле обязательное', required)
    },
    weight: {
      required: helpers.withMessage('Это поле обязательное', required)
    },
    fromCity: {
      required: helpers.withMessage('Это поле обязательное', required)
    },
    toCity: {
      required: helpers.withMessage('Это поле обязательное', required)
    },
    checkbox: {
      required: helpers.withMessage(
        'Для отправки разрешите обработку персональных данных',
        required
      )
    }
  };
});

const isButtonDisabled = computed(() => {
  const emailPattern = new RegExp('^.+@.+\\..+$');
  return !(
    formData.company &&
    formData.address &&
    formData.name &&
    formData.phone &&
    formData.cargo &&
    formData.weight &&
    formData.fromCity &&
    formData.toCity &&
    emailPattern.test(formData.email) &&
    formData.checkbox
  );
});

const v$ = useVuelidate(rules, formData);

const errorBorder = (key) =>
  v$.value[key]?.$error
    ? 'border-error'
    : 'border-border-light hover:border-primary/60';

function swapCities() {
  [formData.fromCity, formData.toCity] = [formData.toCity, formData.fromCity];
}

async function submitForm() {
  if (isLoading.value) return;
  if (await v$.value.$validate()) {
    isLoading.value = true;
    try {
      const recaptchaToken = await executeRecaptcha();
      await $fetch(
        'https://hgu39dkq4d.execute-api.eu-north-1.amazonaws.com/default/emailSender',
        {
          method: 'POST',
          body: JSON.stringify({ ...formData, recaptchaToken })
        }
      );
      isAlertShowed.value = true;
      Object.assign(formData, initialData());
      v$.value.$reset();
    } catch (error) {
    } finally {
      isLoading.value = false;
      setTimeout(() => (isAlertShowed.value = false), 2000);
    }
  }
}

useHead({
  title: 'Цены на грузоперевозки – расчет стоимости | MiTech',
  meta: [
    {
      name: 'description',
      content:
        'Рассчитайте стоимость международной грузоперевозки онлайн: укажите направление, параметры груза и контактные данные – менеджер MiTech свяжется с вами.'
    },
    { name: 'keywords', content: 'цены, расчет стоимости перевозки, грузоперевозки' }
  ]
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
