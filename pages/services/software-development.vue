<template>
  <div class="overflow-x-hidden font-primary text-content-main">
    <!-- Hero -->
    <section class="max-w-container mx-auto mb-5 desktop:mb-8">
      <div
        class="relative flex min-h-[309px] desktop:min-h-[358px] flex-col justify-start overflow-hidden rounded-b-card-lg px-3 py-4 desktop:px-[72px] desktop:py-9 text-bg-main"
      >
        <!-- Фон: desktop — software-development-hero.jpg, mobile — software-development-hero-mobile.jpg (ЗАГЛУШКА, нужно добавить) -->
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
          class="absolute inset-0 bg-gradient-to-l from-transparent to-black/50 desktop:from-black/25 desktop:to-black/50"
          aria-hidden="true"
        ></div>

        <div
          class="relative flex flex-col items-start gap-4 desktop:gap-6 desktop:max-w-[721px]"
        >
          <div class="flex flex-col gap-6 w-full">
            <nav aria-label="Хлебные крошки">
              <ol class="flex flex-wrap items-center gap-x-2 gap-y-[3px] text-sm">
                <li class="flex items-center gap-1">
                  <NuxtLink to="/">Главная</NuxtLink>
                  <!-- ЗАГЛУШКА: /images/icons/arrow-right-16.svg (Icon arrow 16x16) -->
                  <img
                    src="/images/icons/arrow-right-16.svg"
                    alt=""
                    width="16"
                    height="16"
                    aria-hidden="true"
                  />
                </li>
                <li class="flex items-center gap-1">
                  <NuxtLink to="/services">Услуги</NuxtLink>
                  <img
                    src="/images/icons/arrow-right-16.svg"
                    alt=""
                    width="16"
                    height="16"
                    aria-hidden="true"
                  />
                </li>
                <li aria-current="page">
                  Разработка ПО для управления автопарками состоящими из электромобилей
                </li>
              </ol>
            </nav>

            <div class="flex flex-col gap-3">
              <h1 class="text-2xl desktop:text-[40px] font-bold">
                Разработка ПО для управления автопарками состоящими из электромобилей
              </h1>
              <p class="text-sm desktop:text-lg font-normal text-bg-main/85">
                Создаем инновационные решения для управления автопарками с электромобилями, помогая оптимизировать процессы и внедрять интеллектуальные технологии для будущего автомобильной индустрии.
              </p>
            </div>
          </div>

          <a
            href="#contact-form"
            class="inline-flex w-48 items-center justify-center rounded-card border border-bg-main bg-bg-main/30 px-2.5 py-3 text-sm desktop:text-base font-bold text-bg-main backdrop-blur-sm transition-colors hover:bg-bg-main/40"
          >
            Заказать расчет
          </a>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="max-w-container-service mx-auto mb-5 desktop:mb-8 px-5 desktop:px-0">
      <div
        class="rounded-card-lg bg-surface-cream/50 p-5 desktop:px-16 desktop:py-6 text-sm desktop:text-base leading-normal"
      >
        <div class="flex flex-col gap-4">
          <p class="indent-6">
            Наша компания – инновационный разработчик программных комплексов,
            специализирующихся на управлении автопарками, включающими в себя
            электромобили. Мы считаем, что будущее автомобильной индустрии
            принадлежит электрическим транспортным средствам, и поэтому наша
            миссия заключается в предоставлении клиентам эффективных и
            интеллектуальных решений для управления и оптимизации их
            электромобильных парков.
          </p>
          <div>
            <h2 class="mb-1 text-base font-bold">
              Основной функционал разрабатываемого комплекса:
            </h2>
            <ul class="list-disc ms-5 flex flex-col gap-1">
              <li v-for="item in features" :key="item">{{ item }}</li>
            </ul>
          </div>
          <p>
            Такой подход позволяет клиентам сосредоточиться на своих
            бизнес-целях и экономить время и ресурсы на управление автопарками.
          </p>
        </div>
      </div>
    </section>

    <!-- Form -->
    <div id="contact-form" class="max-w-container mx-auto mb-10 desktop:mb-16">
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
