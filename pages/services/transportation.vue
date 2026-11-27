<template>
  <div class="w-full overflow-x-hidden font-primary text-content-main">
    <div class="max-w-container mx-auto tablet:px-8 desktop:px-4">
      <!-- Hero -->
      <section>
        <div
          class="relative flex flex-col justify-center overflow-hidden rounded-b-card-lg p-5 tablet:px-8 tablet:py-10 desktop:py-10 desktop:pl-20 desktop:pr-60 text-bg-main"
        >
          <picture>
            <source
              media="(min-width: 1280px)"
              srcset="/images/services/transportation-hero.jpg"
            />
            <img
              src="/images/services/transportation-hero-mobile.jpg"
              alt=""
              class="absolute inset-0 h-full w-full bg-content-main object-cover object-center"
            />
          </picture>
          <div
            class="absolute inset-0 bg-gradient-to-l from-transparent to-black/70"
            aria-hidden="true"
          />

          <div
            class="relative flex flex-col items-start gap-8 tablet:gap-10 desktop:max-w-[697px]"
          >
            <div class="flex flex-col gap-8 w-full">
              <nav aria-label="Хлебные крошки">
                <ol
                  class="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-[1.4] tracking-[0.01em]"
                >
                  <li class="flex items-center gap-1 desktop:text-base desktop:leading-[1.4]">
                    <NuxtLink to="/" class="hover:underline">Главная</NuxtLink>
                    <img
                      src="/images/icons/arrow-right-16.svg"
                      alt=""
                      width="16"
                      height="16"
                      aria-hidden="true"
                    />
                  </li>
                  <li class="flex items-center gap-1 desktop:text-base desktop:leading-[1.4]">
                    <NuxtLink to="/services" class="hover:underline">Услуги</NuxtLink>
                    <img
                      src="/images/icons/arrow-right-16.svg"
                      alt=""
                      width="16"
                      height="16"
                      aria-hidden="true"
                    />
                  </li>
                  <li aria-current="page" class="desktop:leading-none desktop:tracking-normal">
                    Международные автомобильные грузоперевозки
                  </li>
                </ol>
              </nav>

              <div class="flex flex-col gap-3">
                <h1
                  class="text-xl leading-[1.1] tablet:text-[32px] tablet:leading-[1.1] desktop:text-[40px] desktop:leading-[1.17] font-bold"
                >
                  Международные автомобильные грузоперевозки
                </h1>
                <p
                  class="text-sm leading-[1.4] tracking-[0.01em] tablet:text-base tablet:leading-[1.4] desktop:text-lg desktop:leading-[1.4] desktop:tracking-normal font-normal text-bg-main/85"
                >
                  Услуга по экспедированию грузов включает в себя организацию
                  транспортировки груза, таможенное оформление и страхование
                  груза.
                </p>
              </div>
            </div>

            <a
              href="#contact-form"
              class="inline-flex items-center justify-center rounded-input bg-primary hover:bg-primary-hover px-6 py-3 text-base leading-snug font-bold text-content-main transition-colors"
            >
              Заказать расчет
            </a>
          </div>
        </div>
      </section>

      <!-- Content -->
      <section
        class="px-5 pt-5 pb-10 tablet:px-8 tablet:py-5 desktop:px-20 desktop:py-10"
      >
        <div
          class="rounded-card bg-surface-cream/50 px-5 py-4 tablet:px-10 tablet:py-8 desktop:px-[52px] desktop:py-10 text-sm leading-[1.4]"
        >
          <div class="flex flex-col gap-6">
            <div
              v-for="item in advantages"
              :key="item.title"
              class="flex flex-col gap-5"
            >
              <h2
                class="text-base tablet:text-lg desktop:text-xl leading-[1.3] tracking-[0.01em] font-bold"
              >
                {{ item.title }}
              </h2>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Form -->
    <div
      id="contact-form"
      class="max-w-container mx-auto tablet:px-8 tablet:py-10 desktop:px-4"
    >
      <ContactForm id-prefix="transportation-form" />
    </div>
  </div>
</template>

<script setup>
const advantages = [
  {
    title: 'Полный цикл\\спектр услуг:',
    text: 'Наша компания предоставляет полный спектр услуг по международным авто грузоперевозкам, включая :доставку со склада отправителя на склад консолидации, погрузку, транспортировку к месту назначения, выгрузку на складе получателя, а также оформление всей расчетной, сопроводительной и отчетной документации на грузовую доставку со склада отправителя на склад консолидации, погрузку, транспортировку к месту назначения, выгрузку на складе получателя, а также оформление всей расчетной, сопроводительной и отчетной документации на груз, таможенное оформление.'
  },
  {
    title: 'Гибкая система ценообразования:',
    text: 'Мы предлагаем гибкую систему ценообразования, которая позволяет нашим клиентам выбирать наиболее оптимальный вариант для своих потребностей.'
  },
  {
    title: 'Обширная сеть партнеров:',
    text: 'Мы имеем обширную сеть партнеров и контрагентов по всему миру, что позволяет нам обеспечивать быструю и надежную доставку грузов в любую точку СНГ.'
  },
  {
    title: 'Современные технологии и своевременная доставка:',
    text: 'Мы оснащаем наши автомобили GPS-трекерами, что позволяет отслеживать местоположение груза в режиме реального времени.'
  },
  {
    title: 'Безопасность грузов:',
    text: 'Наш собственный автопарк и водители с многолетним стажем обеспечат безопасную доставку вашего груза.'
  },
  {
    title: 'Индивидуальный подход:',
    text: 'Наши специалисты готовы проконсультировать клиента по всем вопросам, связанным с перевозкой грузов, и предложить наиболее оптимальный вариант для его бизнеса.'
  },
  {
    title: 'Высокое качество наших услуг и оперативность выполнения задач:',
    text: 'Мы понимаем, что каждый день задержки в доставке грузов может означать потерю прибыли для наших клиентов, поэтому мы стараемся обеспечивать максимальную скорость и надежность в нашей работе.'
  }
];

useHead({
  title: 'Международные грузоперевозки по странам СНГ стоимость',
  meta: [
    {
      name: 'description',
      content:
        'Автомобильные грузовые перевозки по странам СНГ: полный цикл услуг, индивидуальный подход, свой автомобильный парк, водители с многолетним стажем'
    },
    { name: 'keywords', content: 'автомобильные транспортные грузоперевозки' }
  ]
});
</script>
