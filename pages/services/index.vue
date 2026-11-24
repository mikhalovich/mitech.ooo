<template>
  <div class="font-primary text-content-main">
    <section
      class="max-w-container-service mx-auto px-2 pt-6 pb-8 desktop:pt-4 desktop:pb-10"
    >
      <h1
        class="text-center text-3xl desktop:text-5xl font-bold mb-6 desktop:mb-8 leading-tight"
      >
        MiTech –
        <span
          class="inline-flex items-center gap-2 align-middle bg-surface-blue-alt text-accent-blue rounded-full px-4 py-1 desktop:px-5 desktop:py-2 font-semibold"
        >
          <img
            src="~/assets/svg/services-page/puzzle.svg"
            alt=""
            class="w-6 h-6 desktop:w-8 desktop:h-8"
          />
          разнообразие
        </span>
        услуг
      </h1>

      <div class="grid grid-cols-1 desktop:grid-cols-2 gap-4 desktop:gap-10">
        <!-- Грузоперевозки: широкая светлая карточка -->
        <NuxtLink
          :to="pathToTransportation"
          class="relative overflow-hidden flex flex-col desktop:flex-row desktop:items-center desktop:col-span-2 bg-bg-main border border-border rounded-card-xl p-5 desktop:p-0 desktop:pl-14 desktop:min-h-[20rem]"
        >
          <div class="relative z-10 flex flex-col desktop:w-5/12 desktop:py-12">
            <span
              class="text-sm uppercase font-light text-content-muted mb-6 desktop:mb-4"
            >
              Востребовано
            </span>
            <h2 class="text-3xl desktop:text-4xl font-bold mb-4">
              Международные грузоперевозки
            </h2>
            <p class="text-base desktop:text-sm font-normal mb-8 desktop:mb-6">
              Организуем автоперевозки по странам СНГ. Опыт и сеть партнеров
              позволяют доставлять любые грузы — от малых до крупногабаритных.
              Предлагаем решения для любого бизнеса.
            </p>
            <span
              class="inline-flex items-center justify-center gap-2 self-start bg-accent-blue text-bg-main rounded-full h-12 px-4 desktop:w-10 desktop:h-10 desktop:p-0"
            >
              <span class="desktop:hidden">Подробнее</span>
              <img
                src="~/assets/svg/services-page/arrow-up-right.svg"
                alt=""
                class="desktop:w-5 desktop:h-5 w-3 h-2"
              />
            </span>
          </div>
          <img
            src="~/assets/svg/services-page/truck.jpg"
            alt="Грузовик MITech"
            class="relative mt-4 -mr-6 -mb-6 self-end w-3/4 desktop:absolute desktop:right-0 desktop:bottom-0 desktop:m-0 desktop:w-7/12"
          />
        </NuxtLink>

        <!-- Экспедирование -->
        <NuxtLink
          :to="pathToFreightForwarding"
          class="relative overflow-hidden flex flex-col bg-[#174EA6] text-bg-main rounded-card-xl p-6 desktop:p-12 desktop:min-h-[23rem]"
        >
          <img
            src="~/assets/svg/services-page/pin.svg"
            alt=""
            class="absolute right-0 bottom-0 w-2/3 desktop:w-1/2 opacity-90 pointer-events-none"
          />
          <span class="relative text-sm uppercase font-light mb-6 desktop:mb-4"
            >Востребовано</span
          >
          <h2
            class="relative text-3xl desktop:text-4xl font-bold mb-4 desktop:max-w-[16rem]"
          >
            Экспедирование грузов
          </h2>
          <p
            class="relative text-base desktop:text-sm font-normal mb-8 desktop:max-w-[16rem]"
          >
            Предоставляем полный спектр услуг международного экспедирования:
            таможенное оформление, контроль качества, отслеживание грузов.
            Обеспечиваем быструю и безопасную доставку с минимальными рисками.
          </p>
          <span
            class="relative mt-auto inline-flex items-center justify-center gap-2 self-start bg-bg-main text-accent-blue rounded-full h-12 px-6 desktop:absolute desktop:right-6 desktop:bottom-6"
          >
            <span class="">Подробнее</span>
          </span>
        </NuxtLink>

        <!-- Разработка ПО -->
        <NuxtLink
          :to="pathToSoftwareDevelopment"
          class="relative overflow-hidden flex flex-col bg-[#174EA6] text-bg-main rounded-card-xl p-6 desktop:p-12 desktop:min-h-[23rem]"
        >
          <img
            src="~/assets/svg/services-page/mouse.svg"
            alt=""
            class="absolute right-0 bottom-0 w-2/3 desktop:w-1/2 opacity-90 pointer-events-none"
          />
          <span class="relative text-sm uppercase font-light mb-6 desktop:mb-4"
            >Востребовано</span
          >
          <h2 class="relative text-3xl desktop:text-4xl font-bold mb-4">
            Разработка ПО для управления автопарком из электромобилей
          </h2>
          <p
            class="relative text-base desktop:text-sm font-normal mb-8 desktop:max-w-[18rem]"
          >
            Разрабатываем ПО для автоматизации учета электромобилей в автопарках
            компаний.
          </p>
          <span
            class="relative mt-auto inline-flex items-center justify-center gap-2 self-start bg-bg-main text-accent-blue rounded-full h-12 px-6 desktop:absolute desktop:right-6 desktop:bottom-6"
          >
            Подробнее
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
