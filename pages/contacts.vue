<template>
  <div class="w-full font-primary text-content-main">
    <div
      class="max-w-container w-full mx-auto px-5 py-5 tablet:px-8 tablet:py-10 desktop:px-4 mb-10 laptop:mb-24 flex flex-col gap-5 tablet:gap-8"
    >
      <!-- Заголовок -->
      <div
        class="flex flex-col items-center text-center gap-4 tablet:gap-5 desktop:max-w-[60.125rem] desktop:mx-auto"
      >
        <h1
          class="flex flex-col items-center text-xl tablet:text-[2rem] desktop:text-[2.5rem] font-bold leading-tight"
        >
          <span class="flex items-center justify-center gap-1 tablet:gap-2">
            <span>MiTech –</span>
            <span
              class="inline-flex items-center gap-1 tablet:gap-2 rounded-full bg-[#E1F7E3] text-accent-green font-semibold py-1 pl-2 pr-3 tablet:py-2 tablet:px-4"
            >
              <img
                src="../assets/svg/contacts-page/phone-highlight.svg"
                alt=""
                class="h-7 w-7 tablet:h-10 tablet:w-10 desktop:h-[52px] desktop:w-[52px]"
              />
              всегда
            </span>
          </span>
          <span class="-mt-1">на связи</span>
        </h1>
        <p class="text-base tablet:text-xl desktop:text-2xl font-normal">
          Менеджеры компании с радостью ответят на ваши вопросы, произведут
          расчет стоимости услуг и подготовят индивидуальное коммерческое
          предложение.
        </p>
      </div>

      <div
        class="flex flex-col desktop:flex-row desktop:items-start gap-5 tablet:gap-8"
      >
        <!-- Карта и контакты -->
        <div class="flex flex-col gap-5 desktop:w-1/2 desktop:order-2">
          <a
            href="https://yandex.by/maps/org/mitech_/100614216891/?utm_medium=mapframe&utm_source=maps"
            target="_blank"
            rel="noopener"
            class="block w-full overflow-hidden rounded-card h-[13.8rem] tablet:h-[25.25rem]"
          >
            <img
              src="../assets/images/contacts-page/map.jpg"
              alt="Карта: MITech, г. Гродно, ул. Гаспадарчая, 23/4-1"
              class="h-full w-full object-cover"
            />
          </a>

          <address
            class="not-italic flex flex-col gap-2 text-sm tablet:text-base desktop:text-lg"
          >
            <p>
              <b>Адрес:</b> РБ, г. Гродно, ул. Гаспадарчая, 23/4-1, оф. 205,
              230005
            </p>
            <p>
              <b>Телефон:</b>
              <a href="tel:+375297827334">+375297827334</a>
            </p>
            <p>
              <b>Email:</b>
              <a href="mailto:contact@mitech.ooo">contact@mitech.ooo</a>
            </p>
          </address>
        </div>

        <!-- Форма -->
        <form
          class="w-full desktop:w-1/2 desktop:order-1 flex flex-col gap-3"
          novalidate
          @submit.prevent="submitForm"
        >
          <section :class="cardClass">
            <div :class="cardHeadClass">
              <span :class="iconBoxClass">
                <img
                  src="../assets/svg/contacts-page/feedback.svg"
                  alt=""
                  class="h-5 w-5"
                />
              </span>
              <h2 :class="cardTitleClass">Обратная связь</h2>
            </div>

            <div :class="cardBodyClass">
              <div class="grid grid-cols-1 tablet:grid-cols-2 gap-x-6 gap-y-2">
                <label
                  v-for="f in fields"
                  :key="f.key"
                  class="flex flex-col gap-1"
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
                  <span v-if="v$[f.key].$error" :class="errorClass">
                    {{ v$[f.key].$errors[0]?.$message }}
                  </span>
                </label>

                <label class="flex flex-col gap-1 tablet:col-span-2">
                  <span :class="labelClass">Комментарии</span>
                  <textarea
                    v-model="formData.message"
                    name="message"
                    placeholder="Любые замечания/пожелания"
                    class="w-full h-[8.5rem] tablet:h-40 resize-none p-4 rounded-input border bg-bg-subtle text-sm font-medium text-content-main outline-none transition-colors placeholder:text-content-light focus:border-primary"
                    :class="errorBorder('message')"
                    @change="v$.message.$touch"
                  ></textarea>
                  <span v-if="v$.message.$error" :class="errorClass">
                    {{ v$.message.$errors[0]?.$message }}
                  </span>
                </label>
              </div>
            </div>
          </section>

          <div class="flex flex-col gap-5 tablet:gap-3">
            <div>
              <input
                id="contacts-consent"
                v-model="formData.checkbox"
                type="checkbox"
                class="custom-checkbox"
                :class="{ 'is-error': v$.checkbox.$error }"
                name="consent"
              />
              <label
                for="contacts-consent"
                class="text-sm tablet:text-base font-medium"
              >
                <span>
                  Я согласен на
                  <a
                    href="./lorem.pdf"
                    target="_blank"
                    class="underline"
                    @click.stop
                  >
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
              class="w-full rounded-input px-6 py-4 text-sm tablet:text-lg font-bold text-content-main transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-content-main"
              :class="
                isLoading
                  ? 'cursor-not-allowed bg-primary opacity-70'
                  : isButtonDisabled
                    ? 'bg-primary/60 hover:bg-primary-hover'
                    : 'bg-primary hover:bg-primary-hover active:bg-primary-hover'
              "
            >
              {{ isLoading ? 'Отправка...' : 'Отправить' }}
            </button>
          </div>
        </form>
      </div>
    </div>

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
  maxLength,
  helpers
} from '@vuelidate/validators';
import { useChallengeV3 } from 'vue-recaptcha';

useHead({
  title: 'Грузоперевозки по РФ, РБ и странам СНГ: рассчитать стоимость',
  meta: [
    {
      name: 'description',
      content:
        'Контакты MiTech /Адрес: РБ, г. Гродно, ул. Гаспадарчая, 23/4-1, оф. 205, 230005. Тел.: +375297827334, contact@mitech.ooo. Схема проезда'
    },
    {
      name: 'keywords',
      content: 'контакты транспортной компании, адрес транспортной компании'
    }
  ]
});

// Классы на токенах tailwind.config.js (макет design.fig: «Контакты»)
const cardClass =
  'rounded-card border border-border-light bg-bg-main shadow-sm overflow-hidden';
const cardHeadClass =
  'flex items-center gap-4 p-4 desktop:p-6 border-b border-border-light';
const cardBodyClass = 'flex flex-col gap-2 p-4 desktop:p-6';
const iconBoxClass =
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-input bg-bg-main shadow-md';
const cardTitleClass = 'text-base tablet:text-xl desktop:text-2xl font-bold';
const labelClass = 'text-base font-bold';
const inputWrapClass =
  'flex items-center gap-2 h-11 px-4 rounded-input border bg-bg-subtle transition-colors focus-within:border-primary';
const inputClass =
  'w-full min-w-0 bg-transparent text-sm font-medium text-content-main outline-none placeholder:text-content-light';
const errorClass = 'text-sm text-error';

const fields = [
  { key: 'name', label: 'ФИО', placeholder: 'Введите ФИО', type: 'text' },
  {
    key: 'phone',
    label: 'Телефон',
    placeholder: 'Введите телефон',
    type: 'tel'
  },
  { key: 'email', label: 'Email', placeholder: 'Введите почту', type: 'text' },
  {
    key: 'city',
    label: 'Город',
    placeholder: 'Введите ваш город',
    type: 'text'
  }
];

const isAlertShowed = ref(false);
const isLoading = ref(false);

const initialData = () => ({
  name: '',
  phone: '',
  email: '',
  city: '',
  message: '',
  checkbox: false
});

const formData = reactive(initialData());

// Невидимая reCAPTCHA v3, токен получаем перед отправкой (как в ContactForm.vue)
const { execute: executeRecaptcha } = useChallengeV3('contacts_form_submit');

const phoneFormat = (value) =>
  !value || (/^[\d\s()+-]+$/.test(value) && value.replace(/\D/g, '').length >= 7);

const rules = computed(() => ({
  name: {
    required: helpers.withMessage('Это поле обязательное', required)
  },
  phone: {
    format: helpers.withMessage('Неверный формат', phoneFormat)
  },
  email: {
    required: helpers.withMessage('Это поле обязательное', required),
    email: helpers.withMessage('e-mail введён некорректно', email)
  },
  city: {},
  message: {
    maxLength: helpers.withMessage(
      'Сообщение не должно быть длиннее пятисот символов',
      maxLength(500)
    )
  },
  checkbox: {
    required: helpers.withMessage(
      'Для отправки разрешите обработку персональных данных',
      required
    )
  }
}));

const isButtonDisabled = computed(() => {
  const emailPattern = new RegExp('^.+@.+\\..+$');
  return !(
    formData.name &&
    emailPattern.test(formData.email) &&
    formData.checkbox
  );
});

const v$ = useVuelidate(rules, formData);

const errorBorder = (key) =>
  v$.value[key]?.$error
    ? 'border-error'
    : 'border-border-light hover:border-primary/60';

async function submitForm() {
  if (isLoading.value) return;
  if (await v$.value.$validate()) {
    const body = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      isContact: true
    };

    if (formData.city) {
      body.city = formData.city;
    }
    if (formData.phone) {
      body.phone = formData.phone;
    }

    isLoading.value = true;
    try {
      body.recaptchaToken = await executeRecaptcha();
      await $fetch(
        'https://hgu39dkq4d.execute-api.eu-north-1.amazonaws.com/default/emailSender',
        {
          method: 'POST',
          body: JSON.stringify(body)
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
