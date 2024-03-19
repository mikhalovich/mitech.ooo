<template>
  <div class="max-w-container w-full px-4 mx-auto mt-20 text-primary mb-24">
    <h1 class="text-4xlg font-medium mb-6">Цены</h1>
    <form
        class="w-full"
        action="submit"
      >
        <div class="w-full [&>*]:mb-8 last:[&>*]:mb-0">
          <div class="flex flex-col desktop:flex-row text-base font-light">
            <div
              class="w-full grid grid-cols-2 laptop:grid-cols-3 gap-5 [&>label]:mb-4 last:desktop:[&>label]:mb-0"
            >
              <label class="flex flex-col m-0">
                <span class="h-[42px]">
                  Полное название компании:
                  <mark class="text-base pl-0.5 bg-[white] text-warning"
                    >*</mark
                  >
                </span>
                <input
                  type="text"
                  v-model="formData.company"
                  class="font-normal border border-[#D8D8D8] py-3 px-1 bg-cultured"
                  :class="{
                    'border-warning focus:border-warning outline-warning':
                      v$.company.$error
                  }"
                  @change="v$.company.$touch"
                />
                <span v-if="v$.company.$error" class="text-sm text-warning">
                  {{ v$.company.$errors[0]?.$message }}
                </span>
              </label>

              <label class="flex flex-col">
                <span class="h-[42px]">
                  Адрес компании:
                  <mark class="text-base pl-0.5 bg-[white] text-warning"
                    >*</mark
                  >
                </span>
                <input
                  type="text"
                  v-model="formData.address"
                  class="font-normal border border-[#D8D8D8] py-3 px-1 bg-cultured"
                  :class="{
                    'border-warning focus:border-warning outline-warning':
                      v$.address.$error
                  }"
                  @change="v$.address.$touch"
                />
                <span v-if="v$.address.$error" class="text-sm text-warning">
                  {{ v$.address.$errors[0]?.$message }}
                </span>
              </label>

              <label class="flex flex-col">
                <span class="h-[42px]">
                  Имя/Фамилия:
                  <mark class="text-base pl-0.5 bg-[white] text-warning"
                    >*</mark
                  >
                </span>
                <input
                  type="text"
                  v-model="formData.name"
                  class="font-normal border border-[#D8D8D8] py-3 px-1 bg-cultured"
                  :class="{
                    'border-warning focus:border-warning outline-warning':
                      v$.name.$error
                  }"
                  @change="v$.name.$touch"
                />
                <span v-if="v$.name.$error" class="text-sm text-warning">
                  {{ v$.name.$errors[0]?.$message }}
                </span>
              </label>

              <label class="flex flex-col">
                <span class="h-[42px]">
                  Email:
                  <mark class="text-base pl-0.5 bg-[white] text-warning"
                    >*</mark
                  >
                </span>
                <input
                  type="text"
                  v-model="formData.email"
                  class="font-normal border border-[#D8D8D8] py-3 px-1 bg-cultured"
                  :class="{
                    'border-warning focus:border-warning outline-warning':
                      v$.email.$error
                  }"
                  @change="v$.email.$touch"
                />
                <span v-if="v$.email.$error" class="text-sm text-warning">
                  {{ v$.email.$errors[0]?.$message }}
                </span>
              </label>

              <label class="flex flex-col">
                <span class="h-[42px]">
                  Телефон:
                  <mark class="text-base pl-0.5 bg-[white] text-warning"
                    >*</mark
                  >
                </span>
                <input
                  type="text"
                  v-model="formData.phone"
                  class="font-normal border border-[#D8D8D8] py-3 px-1 bg-cultured"
                  :class="{
                    'border-warning focus:border-warning outline-warning':
                      v$.phone.$error
                  }"
                  @change="v$.phone.$touch"
                />
                <span v-if="v$.phone.$error" class="text-sm text-warning">
                  {{ v$.phone.$errors[0]?.$message }}
                </span>
              </label>

              <label class="flex flex-col">
                <span class="h-[42px]">
                  Наименование груза:
                  <mark class="text-base pl-0.5 bg-[white] text-warning"
                    >*</mark
                  >
                </span>
                <input
                  type="text"
                  v-model="formData.cargo"
                  class="font-normal border border-[#D8D8D8] py-3 px-1 bg-cultured"
                  :class="{
                    'border-warning focus:border-warning outline-warning':
                      v$.cargo.$error
                  }"
                  @change="v$.cargo.$touch"
                />
                <span v-if="v$.cargo.$error" class="text-sm text-warning">
                  {{ v$.cargo.$errors[0]?.$message }}
                </span>
              </label>

              <label class="flex flex-col">
                <span class="h-[42px]">
                  Вес (в килограммах):
                  <mark class="text-base pl-0.5 bg-[white] text-warning"
                    >*</mark
                  >
                </span>
                <input
                  type="text"
                  v-model="formData.weight"
                  class="font-normal border border-[#D8D8D8] py-3 px-1 bg-cultured"
                  :class="{
                    'border-warning focus:border-warning outline-warning':
                      v$.weight.$error
                  }"
                  @change="v$.weight.$touch"
                />
                <span v-if="v$.weight.$error" class="text-sm text-warning">
                  {{ v$.weight.$errors[0]?.$message }}
                </span>
              </label>

              <label class="flex flex-col">
                <span class="h-[42px]">
                  Откуда (страна):
                  <mark class="text-base pl-0.5 bg-[white] text-warning"
                    >*</mark
                  >
                </span>
                <input
                  type="text"
                  v-model="formData.fromCountry"
                  class="font-normal border border-[#D8D8D8] py-3 px-1 bg-cultured"
                  :class="{
                    'border-warning focus:border-warning outline-warning':
                      v$.fromCountry.$error
                  }"
                  @change="v$.fromCountry.$touch"
                />
                <span v-if="v$.fromCountry.$error" class="text-sm text-warning">
                  {{ v$.fromCountry.$errors[0]?.$message }}
                </span>
              </label>

              <label class="flex flex-col">
                <span class="h-[42px]">
                  Куда (страна):
                  <mark class="text-base pl-0.5 bg-[white] text-warning"
                    >*</mark
                  >
                </span>
                <input
                  type="text"
                  v-model="formData.toCountry"
                  class="font-normal border border-[#D8D8D8] py-3 px-1 bg-cultured"
                  :class="{
                    'border-warning focus:border-warning outline-warning':
                      v$.toCountry.$error
                  }"
                  @change="v$.toCountry.$touch"
                />
                <span v-if="v$.toCountry.$error" class="text-sm text-warning">
                  {{ v$.toCountry.$errors[0]?.$message }}
                </span>
              </label>

              <label class="flex flex-col">
                <span class="h-[42px]">
                  Откуда (город):
                  <mark class="text-base pl-0.5 bg-[white] text-warning"
                    >*</mark
                  >
                </span>
                <input
                  type="text"
                  v-model="formData.fromCity"
                  class="font-normal border border-[#D8D8D8] py-3 px-1 bg-cultured"
                  :class="{
                    'border-warning focus:border-warning outline-warning':
                      v$.fromCity.$error
                  }"
                  @change="v$.fromCity.$touch"
                />
                <span v-if="v$.fromCity.$error" class="text-sm text-warning">
                  {{ v$.fromCity.$errors[0]?.$message }}
                </span>
              </label>

              <label class="flex flex-col">
                <span class="h-[42px]">
                  Куда (город):
                  <mark class="text-base pl-0.5 bg-[white] text-warning"
                    >*</mark
                  >
                </span>
                <input
                  type="text"
                  v-model="formData.toCity"
                  class="font-normal border border-[#D8D8D8] py-3 px-1 bg-cultured"
                  :class="{
                    'border-warning focus:border-warning outline-warning':
                      v$.toCity.$error
                  }"
                  @change="v$.toCity.$touch"
                />
                <span v-if="v$.toCity.$error" class="text-sm text-warning">
                  {{ v$.toCity.$errors[0]?.$message }}
                </span>
              </label>

              <label class="flex flex-col">
                <span class="h-[42px]">Комментарий: </span>
                <textarea
                  v-model="formData.comment"
                  class="font-normal border border-[#D8D8D8] h-32 bg-cultured py-1 px-1"
                ></textarea>
              </label>
            </div>
          </div>

          <div class="flex gap-20">
            <div>
              <p class="text-sm font-normal text-[#7a7a7a] mb-4">
                Дополнительные услуги
              </p>
              <div class="flex mb-4">
                <input
                  v-model="formData.temperature"
                  type="checkbox"
                  class="custom-checkbox"
                  id="temperature-checkbox"
                  name="temperature-checkbox"
                />
                <label class="text-sm tablet:text-base font-light" for="temperature-checkbox">
                  <p class="flex flex-col tablet:flex-row">
                    Температура
                  </p>
                </label>
              </div>
              <div class="flex mb-4">
                <input
                  v-model="formData.convoy"
                  type="checkbox"
                  class="custom-checkbox"
                  id="convoy-checkbox"
                  name="convoy-checkbox"
                />
                <label class="text-sm tablet:text-base font-light" for="convoy-checkbox">
                  <p class="flex flex-col tablet:flex-row">
                    Конвой
                  </p>
                </label>
              </div>
              <div class="flex mb-4">
                <input
                  v-model="formData.insurance"
                  type="checkbox"
                  class="custom-checkbox"
                  id="insurance-checkbox"
                  name="insurance-checkbox"
                />
                <label class="text-sm tablet:text-base font-light" for="insurance-checkbox">
                  <p class="flex flex-col tablet:flex-row">
                    Страхование
                  </p>
                </label>
              </div>
              <div class="flex mb-4">
                <input
                  v-model="formData.consolidatedCargo"
                  type="checkbox"
                  class="custom-checkbox"
                  id="consolidated-checkbox"
                  name="consolidated-checkbox"
                />
                <label class="text-sm tablet:text-base font-light" for="consolidated-checkbox">
                  <p class="flex flex-col tablet:flex-row">
                    Сборный груз
                  </p>
                </label>
              </div>
              <div class="flex mb-4">
                <input
                  v-model="formData.adr"
                  type="checkbox"
                  class="custom-checkbox"
                  id="adr-checkbox"
                  name="adr-checkbox"
                />
                <label class="text-sm tablet:text-base font-light" for="adr-checkbox">
                  <p class="flex flex-col tablet:flex-row">
                    АДР
                  </p>
                </label>
              </div>
            </div>
            <div>
              <p class="text-sm font-normal text-[#7a7a7a] mb-4">
                Вид связи
              </p>
              <div class="flex mb-4">
                <input
                  v-model="formData.contactByPhone"
                  type="checkbox"
                  class="custom-checkbox"
                  id="phone-checkbox"
                  name="phone-checkbox"
                />
                <label class="text-sm tablet:text-base font-light" for="phone-checkbox">
                  <p class="flex flex-col tablet:flex-row">
                    Телефон
                  </p>
                </label>
              </div>
              <div class="flex mb-4">
                <input
                  v-model="formData.contactByEmail"
                  type="checkbox"
                  class="custom-checkbox"
                  id="email-checkbox"
                  name="email-checkbox"
                />
                <label class="text-sm tablet:text-base font-light" for="email-checkbox">
                  <p class="flex flex-col tablet:flex-row">
                    Email
                  </p>
                </label>
              </div>
            </div>
          </div>

          <div class="flex flex-col tablet:flex-row gap-10 tablet:gap-20">
            <div>
              <p class="text-sm font-normal text-[#7a7a7a]">
                Подтвердите, что вы не робот:
                <mark class="text-xl bg-[white] text-warning">*</mark>
              </p>
              <Checkbox v-model="formData.captcha" />
              <span v-if="v$.captcha.$error" class="text-sm text-warning">
                {{ v$.captcha.$errors[0]?.$message }}
              </span>
            </div>
            <div class="flex flex-col justify-between gap-3">
              <div class="flex gap-20">
                <input
                  v-model="formData.checkbox"
                  type="checkbox"
                  class="custom-checkbox"
                  id="checkbox"
                  name="checkbox"
                />
                <label class="text-sm tablet:text-base font-light" for="checkbox">
                  <p class="flex flex-col tablet:flex-row">
                    Я согласен на
                    <a
                      href="./lorem.pdf"
                      target="_blank"
                      class="tablet:pl-1 font-normal underline"
                    >
                      обработку персональных данных
                    </a>
                  </p>
                </label>
              </div>
              <div v-if="!formData.checkbox">
                <p class="text-sm text-warning">
                  {{ v$.checkbox.$errors[0]?.$message }}
                </p>
              </div>
              <button
                @click.prevent="submitForm"
                type="submit"
                class="max-w-[190px] text-base font-normal border-0 rounded-lg px-14 py-[1.125rem] hover:shadow-xl active:translate-y-[3px] active:shadow-buttonActive mx-auto tablet:mx-0"
                :class="{
                  'cursor-not-allowed bg-[#ebebe4]': isButtonDisabled,
                  'bg-secondary': !isButtonDisabled
                }"
              >
                Отправить
              </button>
            </div>
          </div>

        </div>
      </form>
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
import { Checkbox } from 'vue-recaptcha';

const isAlertShowed = ref(false);

const formData = reactive({
  company: '',
  address: '',
  name: '',
  email: '',
  phone: '',
  cargo: '',
  weight: '',
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
  captcha: '',
  isContact: false
});

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
      numeric: helpers.withMessage('Допустимы только цифры', numeric),
    },
    cargo: {
      required: helpers.withMessage('Это поле обязательное', required)
    },
    weight: {
      required: helpers.withMessage('Это поле обязательное', required)
    },
    fromCountry: {
      required: helpers.withMessage('Это поле обязательное', required)
    },
    toCountry: {
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
    },
    captcha: {
      required: helpers.withMessage('Это поле обязательное', required)
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
    formData.fromCountry &&
    formData.toCountry &&
    formData.fromCity &&
    formData.toCity &&
    emailPattern.test(formData.email) &&
    formData.checkbox &&
    formData.captcha
  );
});

const v$ = useVuelidate(rules, formData);

async function submitForm() {
  if (await v$.value.$validate()) {

    try {
      await $fetch(
        'https://hgu39dkq4d.execute-api.eu-north-1.amazonaws.com/default/emailSender',
        {
          method: 'POST',
          body: JSON.stringify(formData)
        }
      );
      isAlertShowed.value = true;
      Object.assign(formData, {
        company: '',
        address: '',
        name: '',
        email: '',
        phone: '',
        cargo: '',
        weight: '',
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
        captcha: '',
        isContact: false
      });
      v$.value.$reset();
    } catch (error) {
    } finally {
      setTimeout(() => (isAlertShowed.value = false), 2000);
    }
  }
}
</script>