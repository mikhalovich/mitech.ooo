<template>
  <div class="font-primary text-content-main">
    <section
      class="max-w-container mx-auto px-5 pt-8 pb-8 desktop:px-4 desktop:pb-10"
    >
      <h1
        class="text-center text-[26px] desktop:text-[58px] font-bold leading-tight mb-7 desktop:mb-10"
      >
        MiTech –
        <span
          class="inline-flex items-center gap-1 desktop:gap-2 align-middle bg-surface-blue-alt text-accent-blue rounded-full px-4 py-1 desktop:px-5 desktop:py-2 text-2xl desktop:text-[50px] font-semibold"
        >
          <img
            src="~/assets/svg/services-page/puzzle.svg"
            alt=""
            class="w-8 h-8 desktop:w-[58px] desktop:h-[58px]"
          />
          разнообразие
        </span>
        услуг
      </h1>

      <div class="grid grid-cols-1 desktop:grid-cols-2 gap-5 desktop:gap-x-12 desktop:gap-y-10">
        <!-- Грузоперевозки: широкая светлая карточка -->
        <NuxtLink
          :to="pathToTransportation"
          class="relative overflow-hidden flex flex-col desktop:col-span-2 bg-bg-main border border-border rounded-card desktop:rounded-card-xl h-[325px] desktop:h-[365px] p-5 desktop:px-16 desktop:py-10"
        >
          <div class="relative z-10 flex flex-col desktop:w-[448px]">
            <span
              class="text-sm leading-5 uppercase font-normal text-content-muted mb-4"
            >
              Востребовано
            </span>
            <h2 class="text-2xl desktop:text-[40px] font-bold mb-3">
              Международные грузоперевозки
            </h2>
            <p class="text-sm desktop:text-base font-normal">
              Организуем автоперевозки по странам СНГ. Опыт и сеть партнеров
              позволяют доставлять любые грузы — от малых до крупногабаритных.
              Предлагаем решения для любого бизнеса.
            </p>
          </div>
          <img
            src="~/assets/svg/services-page/truck.jpg"
            alt="Грузовик MITech"
            class="absolute bottom-0 left-[40%] w-[90%] desktop:left-[41%] desktop:w-[76%] pointer-events-none"
          />
          <span
            class="absolute left-5 bottom-5 inline-flex items-center justify-between bg-accent-blue text-bg-main rounded-full w-[140px] h-11 px-4 py-2.5 font-medium desktop:left-[37%] desktop:bottom-7 desktop:w-14 desktop:h-14 desktop:p-0 desktop:justify-center"
          >
            <span class="desktop:hidden">Подробнее</span>
            <img
              src="~/assets/svg/services-page/arrow-up-right.svg"
              alt=""
              class="w-[10px] h-2 desktop:w-5 desktop:h-5"
            />
          </span>
        </NuxtLink>

        <!-- Экспедирование -->
        <NuxtLink
          :to="pathToFreightForwarding"
          class="relative overflow-hidden flex flex-col bg-[#174EA6] text-bg-main rounded-card-xl h-[285px] desktop:h-[425px] p-5 desktop:px-[60px] desktop:py-10"
        >
          <img
            src="~/assets/svg/services-page/pin.svg"
            alt=""
            class="absolute inset-[28%_4%_-18%_54%] w-auto h-auto desktop:inset-[28%_3%_-17%_54%] pointer-events-none"
          />
          <span
            class="relative text-[13.781px] leading-6 uppercase font-normal tracking-[0.5px] mb-4"
            >Востребовано</span
          >
          <h2
            class="relative text-2xl desktop:text-[40px] font-bold mb-3 desktop:max-w-[16rem]"
          >
            Экспедирование грузов
          </h2>
          <p
            class="relative text-sm desktop:text-base font-normal text-border-light desktop:w-80"
          >
            Предоставляем полный спектр услуг международного экспедирования:
            таможенное оформление, контроль качества, отслеживание грузов.
            Обеспечиваем быструю и безопасную доставку с минимальными рисками.
          </p>
          <span
            class="absolute left-5 bottom-5 inline-flex items-center justify-between bg-bg-main text-accent-blue rounded-full w-[140px] h-11 px-4 py-2.5 font-medium desktop:left-auto desktop:right-6 desktop:bottom-6 desktop:w-14 desktop:h-14 desktop:p-0 desktop:justify-center"
          >
            <span class="desktop:hidden">Подробнее</span>
            <img
              src="~/assets/svg/services-page/arrow-up-right-blue.svg"
              alt=""
              class="w-[10px] h-2 desktop:w-5 desktop:h-5"
            />
          </span>
        </NuxtLink>

        <!-- Разработка ПО -->
        <NuxtLink
          :to="pathToSoftwareDevelopment"
          class="relative overflow-hidden flex flex-col bg-[#174EA6] text-bg-main rounded-card-xl h-[285px] desktop:h-[425px] p-5 desktop:px-[60px] desktop:py-10"
        >
          <img
            src="~/assets/svg/services-page/mouse.svg"
            alt=""
            class="absolute inset-[34%_4%_-18%_56%] w-auto h-auto desktop:inset-[27%_3%_-20%_55%] pointer-events-none"
          />
          <span
            class="relative text-[13.781px] leading-6 uppercase font-normal tracking-[0.5px] mb-4 desktop:text-sm desktop:tracking-normal"
            >Востребовано</span
          >
          <h2 class="relative text-2xl desktop:text-[40px] font-bold mb-3">
            Разработка ПО для управления автопарком из электромобилей
          </h2>
          <p
            class="relative text-sm desktop:text-base font-normal text-border-light desktop:w-80"
          >
            Разрабатываем ПО для автоматизации учета электромобилей в автопарках
            компаний.
          </p>
          <span
            class="absolute left-5 bottom-5 inline-flex items-center justify-between bg-bg-main text-accent-blue rounded-full w-[140px] h-11 px-4 py-2.5 font-medium desktop:left-auto desktop:right-6 desktop:bottom-6 desktop:w-44 desktop:h-14 desktop:px-4 desktop:text-xl desktop:font-semibold"
          >
            Подробнее
            <img
              src="~/assets/svg/services-page/arrow-up-right-blue.svg"
              alt=""
              class="w-[10px] h-2 desktop:w-4 desktop:h-4"
            />
          </span>
        </NuxtLink>
      </div>
    </section>

    <section class="max-w-container mx-auto px-4 mb-12">
      <ContactForm id-prefix="services-form" />
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Автомобильные грузоперевозки: перевозка грузов любой сложности",
  meta: [
    {
      name: "description",
      content:
        "Необходима надежная перевозка грузов по странам СНГ? Качественный сервис и своевременная доставка грузов с MiTech +375297827334",
    },
    {
      name: "keywords",
      content:
        "транспортные услуги, организация грузоперевозок, оказание транспортных услуг, услуги грузоперевозок, транспортные перевозки услуги, услуги международные грузоперевозки, международные транспортные услуги",
    },
  ],
});

const pathToTransportation = "/services/transportation";
const pathToFreightForwarding = "/services/freight-forwarding";
const pathToSoftwareDevelopment = "/services/software-development";
</script>
