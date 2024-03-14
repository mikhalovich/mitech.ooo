<template>
  <div class="max-w-container px-4 mx-auto mt-20">
    <div class="text-base font-normal font-primary text-primary mb-4">
      <div>
        <h1 class="text-4xlg font-medium mb-6">Разнообразие услуг</h1>
        <p class="font-light">
          Логистические услуги позволяют сократить время доставки грузов и
          минимизировать риски потерь и повреждений. Благодаря использованию
          современных технологий и инновационному подходу, компания MiTech может
          обеспечить высокий уровень сервиса и удовлетворить потребности самых
          требовательных клиентов.
        </p>
      </div>
      <div
        class="flex flex-wrap flex-col desktop:flex-row justify-around items-center desktop:items-baseline relative [&>*]:mb-24 last:[&>*]:mb-0"
      >
        <div class="flex flex-col items-center relative mt-36">
          <img
            class="absolute bottom-3/4 mobile-xxl:bottom-2/3"
            src="~/assets/svg/services-pages/bus.svg"
            alt="a bus"
          />
          <div
            class="flex flex-col items-center justify-items-center max-w-2xlg px-5 last:[&>*]:mb-8 border-0 rounded-2xl shadow-normal"
          >
            <h2 class="text-xlg text-center mt-36 mb-2">
              Международные автомобильные грузоперевозки
            </h2>
            <p class="font-light mb-6">
              Мы специализируемся на организации автогрузоперевозок по странам
              СНГ. Наш опыт и обширная сеть партнеров позволяют нам осуществлять
              транспортировки различных видов грузов – от малогабаритных до
              крупногабаритных. Независимо от вашего бизнеса, мы найдем
              оптимальное для вас решение.
            </p>

            <LearnMoreButton :pathToTransportaion="pathToTransportaion" />
          </div>
        </div>

        <div class="flex flex-col items-center relative">
          <img
            class="absolute bottom-3/4 mobile-xl:bottom-2/3"
            src="~/assets/svg/services-pages/opened_bus.svg"
            alt="a bus"
          />
          <div
            class="flex flex-col items-center justify-items-center max-w-2xlg px-5 last:[&>*]:mb-8 border-0 rounded-2xl shadow-normal"
          >
            <h2 class="text-xlg text-center mt-36 mb-2">
              <p>Экспедирование грузов</p>
            </h2>
            <p class="font-light mb-11">
              Мы предоставляем полный спектр услуг по международному
              экспедированию, включая таможенное оформление, контроль качества и
              отслеживание грузов. Наши экспедиторы обеспечивают бесперебойный
              процесс доставки, минимизируя риски и сокращая время транзита.
            </p>

            <LearnMoreButton :pathToFreightForwading="pathToFreightForwading" />
          </div>
        </div>

        <div
          class="flex flex-col items-center relative desktop:mt-20 mobile-xl:mt-12"
        >
          <img
            class="absolute bottom-2/3"
            src="~/assets/svg/services-pages/developing.svg"
            alt="developing"
          />
          <div
            class="flex flex-col items-center justify-items-center max-w-2xlg px-5 last:[&>*]:mb-8 border-0 rounded-2xl shadow-normal"
          >
            <h2 class="text-xlg text-center mt-32 mb-2">
              Разработка ПО для управления автопарком из электромобилей
            </h2>
            <p class="font-light mb-6">
              Мы разрабатываем программные комплексы для ведения автоматизации
              учета электромобилей в автопарках юридических лиц.
            </p>

            <LearnMoreButton
              :pathToSoftwareDevelopment="pathToSoftwareDevelopment"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Автомобильные грузоперевозки: перевозка грузов любой сложности',
  meta: [
    {
      name: 'description',
      content:
        'Необходима надежная перевозка грузов по странам СНГ? Качественный сервис и своевременная доставка грузов с MiTech +375297827334'
    },
    {
      name: 'keywords',
      content:
        'транспортные услуги, организация грузоперевозок, оказание транспортных услуг, услуги грузоперевозок, транспортные перевозки услуги, услуги международные грузоперевозки, международные транспортные услуги'
    }
  ]
});

const pathToTransportaion = '/services/transportation';
const pathToFreightForwading = '/services/freight-forwarding';
const pathToSoftwareDevelopment = '/services/software-development';
</script>
