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
              srcset="/images/services/freight-forwarding-hero.jpg"
            />
            <img
              src="/images/services/freight-forwarding-hero-mobile.jpg"
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
                    Экспедирование грузов
                  </li>
                </ol>
              </nav>

              <div class="flex flex-col gap-3">
                <h1
                  class="text-xl leading-[1.1] tablet:text-[32px] tablet:leading-[1.1] desktop:text-[40px] desktop:leading-[1.17] font-bold"
                >
                  Экспедирование грузов
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
            <div class="flex flex-col gap-5">
              <h2
                class="text-base tablet:text-lg desktop:text-xl leading-[1.3] tracking-[0.01em] font-bold"
              >
                Что входит в услугу экспедирования?
              </h2>
              <ul class="list-disc ms-5">
                <li>
                  Полное сопровождение: от момента отправки до получения груза
                  клиентом.
                </li>
                <li>
                  Документальное оформление: таможенные документы, транспортные
                  накладные и прочие обязательные бумаги.
                </li>
                <li>
                  Оптимизация маршрута: разработка наиболее эффективного маршрута
                  с учетом сроков, типа груза и бюджета.
                </li>
                <li>
                  Выбор транспорта: автоперевозки, авиа, морской или
                  железнодорожный транспорт — мы найдем лучший вариант.
                </li>
                <li>
                  Защита груза: страхование и меры по минимизации рисков на всех
                  этапах доставки.
                </li>
              </ul>
            </div>

            <div class="flex flex-col gap-5">
              <h2
                class="text-base tablet:text-lg desktop:text-xl leading-[1.3] tracking-[0.01em] font-bold"
              >
                Почему это удобно?
              </h2>
              <div class="flex flex-col">
                <p>
                  Наши клиенты доверяют нам логистические задачи, чтобы
                  сосредоточиться на развитии своего бизнеса. Мы берем на себя
                  всю рутину, связанную с доставкой, избавляя вас от лишних
                  хлопот и затрат времени. Такой подход позволяет:
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
        </div>
      </section>
    </div>

    <!-- Form -->
    <div
      id="contact-form"
      class="max-w-container mx-auto tablet:px-8 tablet:py-10 desktop:px-4"
    >
      <ContactForm id-prefix="freight-forwarding-form" />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Перевозка и экспедирование грузов от компании MiTech",
  meta: [
    {
      name: "description",
      content:
        "Экспедирование грузов по Беларуси, России и странам СНГ. Оформление документов. Оптимальный маршрут. Полный спектр услуг по доставке груза",
    },
    {
      name: "keywords",
      content:
        "Экспедиторские услуги для грузоперевозок между Россией и Беларусью",
    },
  ],
});
</script>
