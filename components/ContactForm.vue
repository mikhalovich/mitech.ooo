<template>
  <section
    class="relative overflow-hidden rounded-card bg-surface-cream font-primary text-content-main px-6 py-4 tablet:px-8 desktop:px-20 desktop:py-[54px]"
  >
    <img
      src="../assets/svg/contact-form/stripes.svg"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute -bottom-[129px] -left-[69px] hidden h-[212px] w-[299px] max-w-none desktop:block"
    />
    <div
      class="relative flex flex-col gap-3 desktop:flex-row desktop:items-start desktop:gap-16"
    >
      <div class="text-center desktop:min-w-0 desktop:flex-1 desktop:text-left">
        <h2 class="text-primary font-bold text-[20px] leading-[normal] tablet:text-[32px] desktop:text-[52px] mb-1 desktop:mb-5">
          Остались вопросы?
        </h2>
        <p class="text-sm leading-[normal] tablet:text-base desktop:max-w-[454px] desktop:text-xl font-normal">
          Опишите что вас интересует и мы обязательно ответим вам в течение 10
          минут
        </p>
      </div>

      <form class="w-full desktop:w-[556px] desktop:shrink-0 flex flex-col gap-3 desktop:gap-4" novalidate @submit.prevent="handleSubmit">
        <div>
          <input
            v-model="formData.name"
            type="text"
            name="name"
            placeholder="Имя"
            aria-label="Имя"
            :class="[inputClass, v$.name.$error ? inputErrorClass : inputNormalClass]"
            @blur="v$.name.$touch"
            @change="v$.name.$touch"
          />
          <p v-if="v$.name.$error" class="mt-0.5 text-xs desktop:text-sm text-error">
            {{ v$.name.$errors[0]?.$message }}
          </p>
        </div>

        <div>
          <input
            v-model="formData.phone"
            type="tel"
            name="phone"
            placeholder="Номер телефона"
            aria-label="Номер телефона"
            :class="[inputClass, v$.phone.$error ? inputErrorClass : inputNormalClass]"
            @blur="v$.phone.$touch"
            @change="v$.phone.$touch"
          />
          <p v-if="v$.phone.$error" class="mt-0.5 text-xs desktop:text-sm text-error">
            {{ v$.phone.$errors[0]?.$message }}
          </p>
        </div>

        <div>
          <input
            v-model="formData.email"
            type="text"
            name="email"
            placeholder="E-mail"
            aria-label="E-mail"
            :class="[inputClass, v$.email.$error ? inputErrorClass : inputNormalClass]"
            @blur="v$.email.$touch"
            @change="v$.email.$touch"
          />
          <p v-if="v$.email.$error" class="mt-0.5 text-xs desktop:text-sm text-error">
            {{ v$.email.$errors[0]?.$message }}
          </p>
        </div>

        <div>
          <input
            :id="`${idPrefix}-consent`"
            v-model="formData.checkbox"
            type="checkbox"
            class="custom-checkbox contact-checkbox"
            :class="{ 'is-error': v$.checkbox.$error }"
            name="consent"
          />
          <label
            :for="`${idPrefix}-consent`"
            class="text-xs tablet:text-sm desktop:text-base font-normal"
          >
            <span>
              Даю согласие на
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
          <p v-if="v$.checkbox.$error" class="mt-0.5 text-xs desktop:text-sm text-error">
            {{ v$.checkbox.$errors[0]?.$message }}
          </p>
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class="h-11 w-full rounded desktop:mt-1 desktop:h-[59px] desktop:rounded-input text-sm desktop:text-xl font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-content-main"
          :class="
            isLoading
              ? 'cursor-not-allowed bg-primary text-content-main opacity-70'
              : 'bg-primary text-content-main hover:bg-primary-hover active:bg-primary-hover'
          "
        >
          {{ isLoading ? 'Отправка...' : 'Оставить заявку' }}
        </button>
      </form>
    </div>

    <Transition name="fade">
      <Alert v-if="isAlertShowed" />
    </Transition>
  </section>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import {
  required,
  email,
  helpers
} from '@vuelidate/validators';
import { useChallengeV3 } from 'vue-recaptcha';

defineProps({
  // уникальный префикс id, если на странице несколько форм
  idPrefix: { type: String, default: 'contact-form' }
});

const inputClass =
  'w-full h-11 px-4 border bg-transparent font-normal text-sm outline-none transition-colors rounded placeholder:text-content-light desktop:h-[57px] desktop:px-6 desktop:text-lg desktop:rounded-input desktop:placeholder:text-black';
const inputNormalClass =
  'border-black hover:border-primary/60 focus:border-primary text-black';
const inputErrorClass = 'border-error text-error-dark';

const isAlertShowed = ref(false);
const isLoading = ref(false);
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  checkbox: false
});

// Невидимая reCAPTCHA v3: ключ (runtimeConfig.public.recaptcha.v3SiteKey)
// передаётся в плагин vue-recaptcha/nuxt, токен получаем перед отправкой
const { execute: executeRecaptcha } = useChallengeV3('contact_form_submit');

// Необязательный телефон: если заполнен — проверяем формат
const phoneFormat = (value) =>
  !value || (/^[\d\s()+-]+$/.test(value) && value.replace(/\D/g, '').length >= 7);

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('Это поле обязательное', required)
    },
    email: {
      required: helpers.withMessage('Это поле обязательное', required),
      email: helpers.withMessage('Неверный формат', email)
    },
    phone: {
      format: helpers.withMessage('Неверный формат', phoneFormat)
    },
    checkbox: {
      required: helpers.withMessage(
        'Для отправки разрешите обработку персональных данных',
        required
      )
    }
  };
});

const v$ = useVuelidate(rules, formData);

async function handleSubmit() {
  if (isLoading.value) return;
  if (await v$.value.$validate()) {
    const body = {
      name: formData.name,
      email: formData.email,
      message: '',
      isContact: true
    };

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
      Object.assign(formData, {
        name: '',
        email: '',
        phone: '',
        checkbox: false
      });
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
/* Чекбокс по макету: 20x20, рамка 1px, отступ до текста 8px */
.custom-checkbox.contact-checkbox + label::before {
  width: 20px;
  height: 20px;
  border-width: 1px;
  margin-right: 8px;
  background-size: 14px 14px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
