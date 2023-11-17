<template>
  <div class="max-w-container px-4 mx-auto mt-20">
    <div
      class="flex flex-col laptop:flex-row justify-around desktop:justify-between items-center laptop:items-start mb-24 font-primary text-primary"
    >
      <div class="max-w-medium mb-8 laptop:mb-0">
        <div class="mb-14">
          <h1 class="text-4xlg font-medium mb-4">Задать вопрос</h1>
          <p class="text-base font-light">
            Менеджеры компании с радостью ответят на ваши вопросы, произведут
            расчет стоимости услуг и подготовят индивидуальное коммерческое
            предложение.
          </p>
        </div>
        <div>
          <div
            class="text-xl tablet:text-2xl font-light [&>*]:mb-4 last:[&>p]:mb-8"
          >
            <div>
              <p><b>Адрес</b>: РБ, г. Гродно,</p>
              <p>ул. Гаспадарчая, 21А, оф. 107, 230005</p>
            </div>
            <p><b>Телефон</b>: +375292929292</p>
            <p><b>e-mail</b>: info.mitech@yandex.com</p>
          </div>

          <div>
            <div class="relative w-full overflow-hidden">
              <a
                href="https://yandex.by/maps/org/mitech_/100614216891/?utm_medium=mapframe&utm_source=maps"
                style="
                  color: #eee;
                  font-size: 12px;
                  position: absolute;
                  top: 0px;
                "
                >MITech, ЭмАйТех</a
              ><a
                href="https://yandex.by/maps/10274/grodno/category/it_company/184106174/?utm_medium=mapframe&utm_source=maps"
                style="
                  color: #eee;
                  font-size: 12px;
                  position: absolute;
                  top: 14px;
                "
                >IT-компания в Гродно</a
              ><a
                href="https://yandex.by/maps/10274/grodno/category/logistics_company/184108185/?utm_medium=mapframe&utm_source=maps"
                style="
                  color: #eee;
                  font-size: 12px;
                  position: absolute;
                  top: 28px;
                "
                >Логистическая компания в Гродно</a
              ><iframe
                class="relative w-full h-80"
                src="https://yandex.by/map-widget/v1/?ll=23.825658%2C53.711301&mode=search&oid=100614216891&ol=biz&z=18"
                frameborder="1"
                allowfullscreen="true"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <form
        class="w-full max-w-medium tablet:max-w-none tablet:w-auto"
        action="submit"
      >
        <div class="w-full [&>*]:mb-8 last:[&>*]:mb-0">
          <div class="flex flex-col desktop:flex-row text-base font-light">
            <div
              class="w-full desktop:w-80 [&>label]:flex [&>label]:flex-col desktop:mr-4 [&>label]:mb-4 last:desktop:[&>label]:mb-0"
            >
              <label>
                <span>
                  Ваше имя:
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
                      v$.name.$error,
                  }"
                  @change="v$.name.$touch"
                />
                <span v-if="v$.name.$error" class="text-sm text-warning">
                  {{ v$.name.$errors[0]?.$message }}
                </span>
              </label>

              <label>
                <span>
                  e-mail:
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
                      v$.email.$error,
                    'border-[#42d392] outline-[#42d392] ': !v$.email.$invalid,
                  }"
                  @change="v$.email.$touch"
                />
                <span v-if="v$.email.$error" class="text-sm text-warning">
                  {{ v$.email.$errors[0]?.$message }}
                </span>
              </label>

              <label>
                <span> Телефон:</span>
                <input
                  class="font-normal border border-[#D8D8D8] py-3 px-1 bg-cultured"
                  type="text"
                />
              </label>

              <label>
                <span> Город:</span>
                <input
                  class="font-normal border border-[#D8D8D8] py-3 px-1 bg-cultured"
                  type="text"
                />
              </label>
            </div>
            <div class="desktop:w-[27rem]">
              <label class="flex flex-col">
                <span>
                  Сообщение:
                  <mark class="text-base pl-0.5 bg-[white] text-warning"
                    >*</mark
                  >
                </span>
                <textarea
                  v-model="formData.message"
                  class="font-normal border border-[#D8D8D8] h-56 desktop:h-[18.75rem] bg-cultured py-1 px-1"
                  :class="{
                    'border-warning focus:border-warning outline-warning':
                      v$.message.$error,
                    'border-[#42d392] outline-[#42d392] ': !v$.message.$invalid,
                  }"
                  @change="v$.message.$touch"
                ></textarea>
                <span v-if="v$.message.$error" class="text-sm text-warning">
                  {{ v$.message.$errors[0]?.$message }}
                </span>
              </label>
            </div>
          </div>

          <div>
            <p class="text-sm font-normal text-[#7a7a7a]">
              Подтвердите, что вы не робот:
              <mark class="text-xl bg-[white] text-warning">*</mark>
            </p>
            Captcha
          </div>

          <div>
            <div class="flex">
              <input
                @click="toggleValue"
                type="checkbox"
                class="custom-checkbox"
                id="checkbox"
                name="checkbox"
                value="true"
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
            <div v-if="!checkboxObject.value && checkboxObject.isPressed">
              <p class="text-sm text-warning">
                {{ v$.checkbox.$errors[0]?.$message }}
              </p>
            </div>
          </div>

          <button
            @click.prevent="submitForm"
            type="submit"
            class="text-base font-normal border-0 rounded-lg px-14 py-[1.125rem] bg-secondary hover:shadow-xl active:translate-y-[3px] active:shadow-buttonActive"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>

    <div class="pb-10 font-primary font-normal text-primary">
      <p>© ООО “ЭмАйТех” 2023</p>
    </div>
  </div>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
} from "@vuelidate/validators";

const formData = reactive({
  name: "",
  email: "",
  message: "",
  checkbox: null,
});

const checkboxObject = reactive({
  value: false,
  isPressed: false,
});

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage("Это поле обязательное", required),
    },
    email: {
      required: helpers.withMessage("Это поле обязательное", required),
      email: helpers.withMessage("e-mail введён некорректно", email),
    },
    message: {
      required: helpers.withMessage("Это поле обязательное", required),
      minLength: helpers.withMessage(
        "Сообщение должно быть длиннее тридцати символов",
        minLength(30)
      ),
      maxLength: helpers.withMessage(
        "Сообщение не должно быть длиннее пятисот символов",
        maxLength(500)
      ),
    },

    checkbox: {
      required: helpers.withMessage(
        "Для отправки разрешите обработку персональных данных",
        required
      ),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const submitForm = () => {
  checkboxObject.isPressed = true;
  v$.value.$validate();
};

function toggleValue() {
  checkboxObject.value = !checkboxObject.value;
}
</script>
