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
              srcset="/images/services/software-development-hero.jpg"
            />
            <img
              src="/images/services/software-development-hero-mobile.jpg"
              alt=""
              class="absolute inset-0 h-full w-full bg-content-main object-cover object-center"
            />
          </picture>
          <div
            class="absolute inset-0 bg-gradient-to-l from-black/25 to-black/50"
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
                    Разработка ПО для управления автопарками состоящими из электромобилей
                  </li>
                </ol>
              </nav>

              <div class="flex flex-col gap-3">
                <h1
                  class="text-xl leading-[1.1] tablet:text-[32px] tablet:leading-[1.1] desktop:text-[40px] desktop:leading-[1.17] font-bold"
                >
                  Разработка ПО для управления автопарками состоящими из электромобилей
                </h1>
                <p
                  class="text-sm leading-[1.4] tracking-[0.01em] tablet:text-base tablet:leading-[1.4] desktop:text-lg desktop:leading-[1.4] desktop:tracking-normal font-normal text-bg-main/85"
                >
                  Создаем инновационные решения для управления автопарками с электромобилями, помогая оптимизировать процессы и внедрять интеллектуальные технологии для будущего автомобильной индустрии.
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
            <p class="indent-6">
              Наша компания – инновационный разработчик программных комплексов,
              специализирующихся на управлении автопарками, включающими в себя
              электромобили. Мы считаем, что будущее автомобильной индустрии
              принадлежит электрическим транспортным средствам, и поэтому наша
              миссия заключается в предоставлении клиентам эффективных и
              интеллектуальных решений для управления и оптимизации их
              электромобильных парков.
            </p>
            <div class="flex flex-col gap-5">
              <h2
                class="text-base tablet:text-lg desktop:text-xl leading-[1.3] tracking-[0.01em] font-bold"
              >
                Основной функционал разрабатываемого комплекса:
              </h2>
              <ul class="list-disc ms-5 flex flex-col gap-2">
                <li v-for="item in features" :key="item">{{ item }}</li>
              </ul>
              <p class="text-base leading-normal tracking-[0.01em]">
                Такой подход позволяет клиентам сосредоточиться на своих
                бизнес-целях и экономить время и ресурсы на управление автопарками.
              </p>
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
      <ContactForm id-prefix="software-dev-form" />
    </div>
  </div>
</template>

<script setup>
const features = [
  'Наши программные продукты предоставляют комплексные решения для мониторинга и управления каждым электромобилем в автопарке. Отслеживание местоположения, состояния заряда, технического обслуживания и другие аспекты флота осуществляются в режиме реального времени.',
  'Мы разрабатываем интеллектуальные алгоритмы для оптимизации маршрутов электромобилей, учитывая факторы, такие как трафик, наличие зарядных станций и индивидуальные предпочтения клиентов. Это способствует уменьшению времени в пути, повышению эффективности и снижению эксплуатационных расходов.',
  'Наши продукты позволяют эффективно управлять энергопотреблением электромобилей. Мы предоставляем инструменты для мониторинга зарядки, распределения энергии и оптимизации времени подключения к зарядным станциям.',
  'Наш аналитический инструментарий предоставляет клиентам глубокий анализ данных о деятельности и производительности флота. Это помогает принимать информированные решения, улучшать процессы и повышать эффективность использования электромобилей.'
];

useHead({
  title: 'Разработка ПО для управления автопарком из электромобилей',
  meta: [
    {
      name: 'description',
      content:
        'Разработка программных комплексов для управления автопарками состоящими из электромобилей'
    },
    { name: 'robots', content: 'noindex' }
  ]
});
</script>
