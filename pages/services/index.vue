<template>
  <div class="font-primary text-content-main">
    <section
      class="max-w-container mx-auto px-5 py-5 tablet:px-8 tablet:py-10 desktop:px-4 desktop:py-10"
    >
      <h1
        class="flex flex-col items-center text-center text-[26px] leading-none tablet:text-[32px] tablet:leading-[1.1] desktop:text-[40px] desktop:leading-[1.1] font-bold mb-9 tablet:mb-8 desktop:mb-8"
      >
        <span class="inline-flex flex-wrap items-center justify-center gap-2">
          <span>MiTech –</span>
          <span
            class="inline-flex items-center gap-1 tablet:gap-2 bg-surface-blue-alt text-accent-blue rounded-full pl-2 pr-3 py-1 tablet:px-4 tablet:py-2 text-2xl tablet:text-[28px] desktop:text-[40px] leading-none font-semibold"
          >
            <span
              class="inline-flex items-center justify-center w-8 h-8 tablet:w-10 tablet:h-10 desktop:w-[52px] desktop:h-[52px]"
            >
              <img
                src="~/assets/svg/services-page/puzzle.svg"
                alt=""
                class="w-6 h-6 tablet:w-7 tablet:h-7 desktop:w-[38px] desktop:h-[38px]"
              />
            </span>
            разнообразие
          </span>
        </span>
        <span class="-mt-1">услуг</span>
      </h1>

      <div
        class="grid grid-cols-1 desktop:grid-cols-2 gap-5 tablet:gap-8 desktop:gap-10"
      >
        <!-- Грузоперевозки: широкая светлая карточка -->
        <NuxtLink
          :to="pathToTransportation"
          class="relative overflow-hidden flex flex-col desktop:col-span-2 bg-bg-main border border-border rounded-card tablet:rounded-card-xl h-[361px] tablet:h-[508px] desktop:h-[365px] p-5 tablet:px-8 tablet:pt-8 tablet:pb-0 desktop:px-16 desktop:py-10"
        >
          <div class="relative z-10 flex flex-col desktop:w-[448px]">
            <span
              class="text-sm leading-5 uppercase font-normal text-content-muted mb-4"
            >
              Востребовано
            </span>
            <h2
              class="text-[26px] leading-[1.1] tablet:text-[32px] desktop:text-[40px] font-bold mb-3"
            >
              Международные грузоперевозки
            </h2>
            <p
              class="text-sm leading-[1.35] tablet:text-base tablet:leading-[1.4] font-normal"
            >
              Организуем автоперевозки по странам СНГ. Опыт и сеть партнеров
              позволяют доставлять любые грузы — от малых до крупногабаритных.
              Предлагаем решения для любого бизнеса.
            </p>
          </div>
          <img
            src="~/assets/svg/services-page/truck.jpg"
            alt="Грузовик MITech"
            class="absolute bottom-0 left-0 w-full h-[134px] object-cover object-left tablet:left-8 tablet:h-[321px] tablet:w-auto tablet:max-w-none desktop:left-[41%] desktop:h-[358px] pointer-events-none"
          />
          <span
            class="absolute z-10 right-5 bottom-5 inline-flex items-center justify-between bg-accent-blue text-bg-main rounded-full w-[140px] h-[42px] px-4 py-2.5 text-base font-medium tablet:right-8 tablet:bottom-8 tablet:w-14 tablet:h-14 tablet:p-0 tablet:justify-center desktop:right-auto desktop:left-[37%] desktop:bottom-[30px]"
          >
            <span class="tablet:hidden">Подробнее</span>
            <img
              src="~/assets/svg/services-page/arrow-up-right.svg"
              alt=""
              class="w-2.5 h-2.5 tablet:w-4 tablet:h-4"
            />
          </span>
        </NuxtLink>

        <!-- Экспедирование -->
        <NuxtLink
          :to="pathToFreightForwarding"
          class="relative overflow-hidden flex flex-col bg-[#174EA6] text-bg-main rounded-card-xl min-h-[318px] tablet:min-h-[274px] desktop:min-h-[425px] p-5 pb-[72px] tablet:p-8 desktop:px-[60px] desktop:py-10"
        >
          <img
            src="~/assets/svg/services-page/pin.svg"
            alt=""
            class="absolute right-[-11px] bottom-0 w-[178px] tablet:right-6 tablet:w-[222px] desktop:right-[22px] desktop:w-[270px] h-auto pointer-events-none"
          />
          <span
            class="relative text-[13.781px] leading-6 uppercase font-normal tracking-[0.5px] mb-4"
            >Востребовано</span
          >
          <h2
            class="relative text-[26px] leading-[1.1] tablet:text-[32px] desktop:text-[40px] font-bold mb-3 tablet:max-w-[18rem] desktop:max-w-[22rem]"
          >
            Экспедирование грузов
          </h2>
          <p
            class="relative text-sm leading-[1.35] tablet:text-base tablet:leading-[1.4] font-normal text-border-light tablet:max-w-[506px] desktop:w-[360px]"
          >
            Предоставляем полный спектр услуг международного экспедирования:
            таможенное оформление, контроль качества, отслеживание грузов.
            Обеспечиваем быструю и безопасную доставку с минимальными рисками.
          </p>
          <span
            class="absolute right-5 bottom-5 inline-flex items-center justify-between bg-bg-main text-accent-blue rounded-full w-[140px] h-[42px] px-4 py-2.5 text-base font-medium tablet:right-8 tablet:bottom-8 tablet:w-14 tablet:h-14 tablet:p-0 tablet:justify-center desktop:right-6 desktop:bottom-6"
          >
            <span class="tablet:hidden">Подробнее</span>
            <img
              src="~/assets/svg/services-page/arrow-up-right-blue.svg"
              alt=""
              class="w-2.5 h-2.5 tablet:w-4 tablet:h-4"
            />
          </span>
        </NuxtLink>

        <!-- Разработка ПО -->
        <NuxtLink
          :to="pathToSoftwareDevelopment"
          class="relative overflow-hidden flex flex-col bg-[#174EA6] text-bg-main rounded-card-xl min-h-[300px] tablet:min-h-[265px] desktop:min-h-[425px] p-5 pb-[72px] tablet:p-8 desktop:px-[60px] desktop:py-10"
        >
          <img
            src="~/assets/svg/services-page/mouse.svg"
            alt=""
            class="absolute right-0 bottom-0 w-[160px] tablet:right-8 tablet:w-[220px] desktop:right-[21px] desktop:w-[267px] h-auto pointer-events-none"
          />
          <span
            class="relative text-[13.781px] leading-6 uppercase font-normal tracking-[0.5px] mb-4 desktop:text-sm desktop:tracking-normal"
            >Востребовано</span
          >
          <h2
            class="relative text-[26px] leading-[1.1] tablet:text-[32px] desktop:text-[40px] font-bold mb-3 tablet:max-w-[506px] desktop:max-w-none"
          >
            Разработка ПО для управления автопарком из электромобилей
          </h2>
          <p
            class="relative text-sm leading-[1.35] tablet:text-base tablet:leading-[1.4] font-normal text-border-light tablet:max-w-[506px] desktop:w-[360px]"
          >
            Разрабатываем ПО для автоматизации учета электромобилей в автопарках
            компаний.
          </p>
          <span
            class="absolute right-5 bottom-5 inline-flex items-center justify-between bg-bg-main text-accent-blue rounded-full w-[140px] h-[42px] px-4 py-2.5 text-base font-medium tablet:right-8 tablet:bottom-8 tablet:w-14 tablet:h-14 tablet:p-0 tablet:justify-center desktop:right-6 desktop:bottom-6 desktop:w-44 desktop:px-4 desktop:justify-between desktop:text-xl desktop:font-semibold"
          >
            <span class="tablet:hidden desktop:inline">Подробнее</span>
            <img
              src="~/assets/svg/services-page/arrow-up-right-blue.svg"
              alt=""
              class="w-2.5 h-2.5 tablet:w-4 tablet:h-4"
            />
          </span>
        </NuxtLink>
      </div>
    </section>

    <section class="max-w-container mx-auto px-5 tablet:px-8 desktop:px-4 mb-12">
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
