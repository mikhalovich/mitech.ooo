<template>
  <div
    class="overflow-x-hidden font-primary text-content-main"
  >
    <!-- Hero -->
    <section class="max-w-container mx-auto mb-5 desktop:mb-8">
      <div
        class="relative overflow-hidden flex min-h-[309px] desktop:min-h-[358px] flex-col justify-start rounded-b-card-xl desktop:rounded-b-card-lg bg-content-main bg-cover bg-center px-3 py-4 desktop:px-[72px] desktop:py-9 text-bg-main"
        style="
          background-image: url(&quot;/images/services/freight-forwarding-hero.jpg&quot;);
        "
      >
        <!-- Затемнение: слева темнее, справа прозрачно -->
        <div
          class="absolute inset-0 bg-gradient-to-l from-transparent to-black/50 desktop:from-black/25 desktop:to-black/50"
          aria-hidden="true"
        />
        <div class="relative flex flex-col items-start gap-4 desktop:gap-6 desktop:max-w-[721px]">
          <div class="flex flex-col gap-6 w-full">
            <nav aria-label="Хлебные крошки">
              <ol class="flex flex-wrap items-center gap-x-2 gap-y-[3px] text-sm">
                <li class="flex items-center gap-1">
                  <NuxtLink to="/">Главная</NuxtLink>
                  <img src="/images/icons/arrow-right-16.svg" alt="" width="16" height="16" aria-hidden="true" />
                </li>
                <li class="flex items-center gap-1">
                  <NuxtLink to="/services">Услуги</NuxtLink>
                  <img src="/images/icons/arrow-right-16.svg" alt="" width="16" height="16" aria-hidden="true" />
                </li>
                <li aria-current="page">Экспедирование грузов</li>
              </ol>
            </nav>
            <div class="flex flex-col gap-3">
              <h1
                class="text-2xl desktop:text-[40px] font-bold"
              >
                Экспедирование грузов
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
            class="inline-flex items-center justify-center w-48 px-2.5 py-3 rounded-card border border-bg-main bg-bg-main/30 backdrop-blur-sm text-sm desktop:text-base font-bold text-bg-main transition-colors"
          >
            Заказать расчет
          </a>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section
      class="max-w-container-service mx-auto px-5 desktop:px-0 mb-5 desktop:mb-8"
    >
      <div
        class="flex flex-col gap-5 desktop:gap-4 bg-surface-cream/50 rounded-card-lg p-5 desktop:px-16 desktop:py-6 text-sm desktop:text-base leading-normal"
      >
        <h2 class="text-base desktop:text-xl font-bold">
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
            Оптимизация маршрута: разработка наиболее эффективного маршрута с
            учетом сроков, типа груза и бюджета.
          </li>
          <li>
            Выбор транспорта: автоперевозки, авиа, морской или железнодорожный
            транспорт — мы найдем лучший вариант.
          </li>
          <li>
            Защита груза: страхование и меры по минимизации рисков на всех
            этапах доставки.
          </li>
        </ul>

        <h2 class="text-base desktop:text-xl font-bold">Почему это удобно?</h2>
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
    </section>

    <!-- Form -->
    <div
      id="contact-form"
      class="max-w-container mx-auto mb-10 desktop:mb-16"
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
