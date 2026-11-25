<template>
  <div class="overflow-x-hidden font-primary text-content-main">
    <!-- Hero -->
    <section class="max-w-container mx-auto mb-5 desktop:mb-8">
      <div
        class="relative flex min-h-[309px] desktop:min-h-[358px] flex-col justify-start overflow-hidden rounded-b-card-lg px-3 py-4 desktop:px-[72px] desktop:py-9 text-bg-main"
      >
        <!-- Фон: desktop — transportation-hero.jpg, mobile — transportation-hero-mobile.jpg (ЗАГЛУШКА, нужно добавить) -->
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
                  Международные автомобильные грузоперевозки
                </li>
              </ol>
            </nav>

            <div class="flex flex-col gap-3">
              <h1 class="text-2xl desktop:text-[40px] font-bold">
                Международные автомобильные грузоперевозки
              </h1>
              <p class="text-sm desktop:text-lg font-normal text-bg-main/85">
                Услуга по экспедированию грузов включает в себя организацию
                транспортировки груза, таможенное оформление и страхование
                груза.
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

    <!-- Content: desktop -->
    <section
      class="hidden desktop:block max-w-container-service mx-auto mb-8"
    >
      <div
        class="rounded-card-lg bg-surface-cream/50 px-16 py-6 text-base"
      >
        <div class="flex flex-col gap-4 leading-normal">
          <div v-for="item in advantages" :key="item.title">
            <h2 class="list-item list-disc ms-6 font-bold">
              {{ item.title }}
            </h2>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Content: mobile / tablet -->
    <section class="desktop:hidden mx-auto mb-5 w-full max-w-container-service px-5">
      <div
        class="flex flex-col gap-6 rounded-card-lg bg-surface-cream/50 p-5 text-sm leading-normal"
      >
        <div class="flex flex-col gap-5">
          <h2 class="text-base font-bold">
            Что входит в услугу экспедирования?
          </h2>
          <ul class="list-disc ms-5">
            <li>Полное сопровождение: от момента отправки до получения груза клиентом.</li>
            <li>Документальное оформление: таможенные документы, транспортные накладные и прочие обязательные бумаги.</li>
            <li>Оптимизация маршрута: разработка наиболее эффективного маршрута с учетом сроков, типа груза и бюджета.</li>
            <li>Выбор транспорта: автоперевозки, авиа, морской или железнодорожный транспорт — мы найдем лучший вариант.</li>
            <li>Защита груза: страхование и меры по минимизации рисков на всех этапах доставки.</li>
          </ul>
        </div>
        <div class="flex flex-col gap-5">
          <h2 class="text-base font-bold">Почему это удобно?</h2>
          <div class="flex flex-col">
            <p>
              Наши клиенты доверяют нам логистические задачи, чтобы
              сосредоточиться на развитии своего бизнеса. Мы берем на себя всю
              рутину, связанную с доставкой, избавляя вас от лишних хлопот и
              затрат времени. Такой подход позволяет:
            </p>
            <ul class="list-disc ms-5">
              <li>Уменьшить расходы на логистику.</li>
              <li>Избежать задержек и ошибок в оформлении документов.</li>
              <li>Гарантировать сохранность груза.</li>
            </ul>
          </div>
          <p>
            Вы можете быть уверены, что ваш груз будет доставлен вовремя,
            безопасно и без лишних сложностей.
          </p>
        </div>
      </div>
    </section>

    <!-- Form -->
    <div id="contact-form" class="max-w-container mx-auto mb-10 desktop:mb-16">
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
