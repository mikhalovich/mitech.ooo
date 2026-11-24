<template>
  <main class="w-full overflow-x-clip font-primary text-content-main">
    <!-- Hero -->
    <section class="max-w-container px-4 mx-auto pt-8 laptop:pt-10 text-center">
      <img
        :src="miLogo"
        alt="Mi."
        class="w-12 h-12 laptop:w-16 laptop:h-16 mx-auto mb-4 laptop:mb-6"
      />
      <h1
        class="max-w-container-narrow mx-auto text-3xl laptop:text-6xl font-bold mb-2 laptop:mb-4"
      >
        Логистическая компания, созданная для вас
      </h1>
      <p class="text-base laptop:text-xl font-normal mb-6 laptop:mb-14">
        Доставим ваш груз быстро, безопасно и экономично
      </p>

      <div
        class="max-w-container-narrow mx-auto flex flex-col laptop:flex-row laptop:items-center gap-6 laptop:gap-12 text-left"
      >
        <img
          :src="heroDriver"
          alt="Водитель грузового автомобиля"
          class="w-full max-w-xs laptop:max-w-none laptop:w-1/2 mx-auto rounded-card-xl object-cover aspect-square"
        />

        <div class="flex flex-col gap-4 laptop:w-1/2">
          <div
            v-for="(stat, index) in stats"
            :key="stat.title"
            class="border-l-4 pl-4 laptop:pl-6 py-2"
            :class="index === 0 ? 'border-accent-green' : 'border-border-light'"
          >
            <p class="text-xl laptop:text-2xl font-bold">{{ stat.title }}</p>
            <p
              v-if="stat.text"
              class="mt-2 text-base font-normal text-content-muted"
            >
              {{ stat.text }}
            </p>
          </div>

          <NuxtLink
            to="/contacts"
            class="self-center laptop:self-start mt-2 inline-flex items-center gap-2 rounded-full bg-surface-green px-6 py-3 text-sm font-semibold text-accent-green transition-colors hover:bg-accent-green hover:text-bg-main"
          >
            Заказать обратную связь
            <img :src="arrowGreen" alt="" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Международные автомобильные грузоперевозки -->
    <section class="max-w-container px-4 mx-auto mt-12 laptop:mt-16">
      <h2 class="section-title">
        Международные
        <span class="title-pill bg-surface-cream text-amber">
          <img
            :src="iconWheel"
            alt=""
            class="w-6 h-6 laptop:w-10 laptop:h-10"
          />
          автомобильные
        </span>
        <br class="hidden laptop:block" />
        грузоперевозки
      </h2>
      <div
        class="max-w-container-narrow mx-auto rounded-card bg-bg-main shadow-lg px-6 py-6 laptop:px-14 laptop:py-10 text-center text-sm laptop:text-xl font-normal"
      >
        <p class="mb-4 laptop:mb-6">
          Логистические услуги позволяют сократить время доставки грузов и
          минимизировать риски потерь и повреждений.
        </p>
        <p>
          Благодаря использованию современных технологий и инновационному
          подходу, компания MiTech может обеспечить высокий уровень сервиса и
          удовлетворить потребности самых требовательных клиентов.
        </p>
      </div>
    </section>

    <!-- Разнообразие услуг -->
    <section class="max-w-container px-4 mx-auto mt-12 laptop:mt-16">
      <h2 class="section-title">
        MiTech –
        <span class="title-pill bg-surface-blue-alt text-accent-blue">
          <img
            :src="iconPuzzle"
            alt=""
            class="w-6 h-6 laptop:w-10 laptop:h-10"
          />
          разнообразие
        </span>
        <br class="hidden laptop:block" />
        услуг
      </h2>

      <!-- Мобильная версия: слайдер -->
      <div class="laptop:hidden">
      <Swiper
        class="!overflow-visible"
        :slides-per-view="'auto'"
        :space-between="16"
      >
        <SwiperSlide
          v-for="service in services"
          :key="service.to"
          class="!h-auto !w-72"
        >
          <NuxtLink
            :to="service.to"
            class="flex h-full flex-col rounded-card p-5 transition-shadow hover:shadow-lg"
            :class="service.cardClass"
          >
            <span class="text-xs font-normal uppercase" :class="service.accentClass">
              Востребовано
            </span>
            <h3 class="mt-2 mb-3 text-2xl font-bold text-content-main">
              {{ service.title }}
            </h3>
            <p class="mb-6 text-sm font-normal text-content-main">
              {{ service.text }}
            </p>
            <span
              class="mt-auto text-sm font-semibold"
              :class="service.accentClass"
            >
              {{ service.link }}
            </span>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
      </div>

      <!-- Десктоп: сетка из трёх колонок -->
      <div class="hidden laptop:grid laptop:grid-cols-3 laptop:gap-6">
        <NuxtLink
          v-for="service in services"
          :key="service.to"
          :to="service.to"
          class="flex flex-col rounded-card p-7 transition-shadow hover:shadow-lg"
          :class="service.cardClass"
        >
          <span class="text-xs font-normal uppercase" :class="service.accentClass">
            Востребовано
          </span>
          <h3 class="mt-2 mb-4 text-3xl font-bold leading-tight text-content-main">
            {{ service.title }}
          </h3>
          <p class="mb-8 text-base font-normal text-content-main">
            {{ service.text }}
          </p>
          <span
            class="mt-auto text-base font-semibold"
            :class="service.accentClass"
          >
            {{ service.link }}
          </span>
        </NuxtLink>
      </div>
    </section>

    <!-- Надежная команда -->
    <section class="max-w-container px-4 mx-auto mt-12 laptop:mt-16">
      <h2 class="section-title">
        MiTech –
        <span class="title-pill bg-surface-green/60 text-accent-green">
          <img
            :src="iconHandshake"
            alt=""
            class="w-6 h-6 laptop:w-10 laptop:h-10"
          />
          надежная
        </span>
        <br class="hidden laptop:block" />
        команда
      </h2>
      <div
        class="relative max-w-container-narrow mx-auto overflow-hidden rounded-card"
      >
        <img
          :src="teamParking"
          alt="Парковка с грузовыми автомобилями MiTech"
          class="w-full h-72 laptop:h-[26.5rem] object-cover"
        />
        <div class="absolute inset-0 bg-content-main/40"></div>
        <p
          class="absolute inset-0 flex items-center justify-center px-6 laptop:px-32 text-center text-sm laptop:text-xl font-normal text-bg-main"
        >
          Транспортно-экспедиторская компания "MiTech" – ваш надежный партнер в
          сфере международных грузоперевозок и экспедирования грузов, на
          протяжении 13 лет.
        </p>
        <span
          class="absolute bottom-0 right-6 laptop:right-14 text-7xl laptop:text-9xl font-bold leading-none text-bg-main/30"
          aria-hidden="true"
        >
          1
        </span>
      </div>
    </section>

    <!-- Гарантия безопасности -->
    <section class="max-w-container px-4 mx-auto mt-12 laptop:mt-16">
      <h2 class="section-title">
        MiTech –
        <span class="title-pill bg-surface-cream text-amber">
          <img
            :src="iconShield"
            alt=""
            class="w-6 h-6 laptop:w-10 laptop:h-10"
          />
          гарантия
        </span>
        <br class="hidden laptop:block" />
        безопасности
      </h2>

      <!-- Мобильная версия: слайдер -->
      <div class="laptop:hidden">
      <Swiper
        class="!overflow-visible"
        :slides-per-view="'auto'"
        :space-between="16"
      >
        <SwiperSlide
          v-for="card in safetyCards"
          :key="card.tag"
          class="!h-auto !w-64"
        >
          <NuxtLink
            :to="card.to"
            class="relative flex h-full min-h-[14rem] flex-col rounded-card p-4 transition-shadow hover:shadow-lg"
            :class="card.dark ? 'bg-amber/80' : 'bg-yellow-soft/40'"
          >
            <span
              class="text-xs font-normal uppercase"
              :class="card.dark ? 'text-content-main' : 'text-amber'"
            >
              {{ card.tag }}
            </span>
            <p class="mt-2 text-base font-bold text-content-main">
              {{ card.text }}
            </p>
            <img
              v-if="card.img"
              :src="card.img"
              :alt="card.imgAlt"
              class="absolute bottom-4 max-h-36 w-auto"
              :class="card.imgClass || 'left-4'"
            />
            <span
              class="absolute bottom-4 right-4 flex h-6 w-6 items-center justify-center rounded-full text-base font-bold leading-none"
              :class="card.dark ? 'bg-bg-main text-amber' : 'bg-amber text-bg-main'"
              aria-label="Подробнее"
            >
              +
            </span>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
      </div>

      <!-- Десктоп: 4 колонки, карточки разной высоты (как в макете) -->
      <div class="hidden laptop:grid laptop:grid-cols-4 laptop:items-start laptop:gap-6">
        <NuxtLink
          v-for="card in safetyCards"
          :key="card.tag"
          :to="card.to"
          class="relative flex flex-col rounded-card p-5 pb-14 transition-shadow hover:shadow-lg"
          :class="
            card.dark
              ? 'min-h-[17rem] bg-amber/80'
              : 'min-h-[13rem] bg-yellow-soft/40'
          "
        >
          <span
            class="text-xs font-normal uppercase"
            :class="card.dark ? 'text-content-main' : 'text-amber'"
          >
            {{ card.tag }}
          </span>
          <p
            class="mt-2 font-bold text-content-main"
            :class="card.dark ? 'text-base' : 'text-xl'"
          >
            {{ card.text }}
          </p>
          <img
            v-if="card.img"
            :src="card.img"
            :alt="card.imgAlt"
            class="absolute bottom-4 max-h-48 w-auto"
            :class="card.imgClass || 'left-4'"
          />
          <span
            class="absolute bottom-4 right-4 flex h-6 w-6 items-center justify-center rounded-full text-base font-bold leading-none"
            :class="card.dark ? 'bg-bg-main text-amber' : 'bg-amber text-bg-main'"
            aria-label="Подробнее"
          >
            +
          </span>
        </NuxtLink>
      </div>
    </section>

    <!-- Довольные клиенты -->
    <section class="max-w-container px-4 mx-auto mt-12 laptop:mt-16">
      <h2 class="section-title">
        MiTech –
        <span class="title-pill bg-surface-blue-alt text-accent-blue">
          <img
            :src="iconSmile"
            alt=""
            class="w-6 h-6 laptop:w-10 laptop:h-10"
          />
          довольные
        </span>
        <br class="hidden laptop:block" />
        клиенты
      </h2>

      <div class="relative max-w-container-blog mx-auto px-2 pb-8">
        <button
          type="button"
          class="clients-prev slider-arrow left-0"
          aria-label="Предыдущий клиент"
        >
          <svg
            viewBox="0 0 24 24"
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          class="clients-next slider-arrow right-0"
          aria-label="Следующий клиент"
        >
          <svg
            viewBox="0 0 24 24"
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>

        <Swiper
          class="!pt-8 !pb-12 !px-6 laptop:!px-8"
          :modules="[SwiperPagination, SwiperNavigation, SwiperKeyboard]"
          :navigation="{ nextEl: '.clients-next', prevEl: '.clients-prev' }"
          :pagination="{ clickable: true }"
          :keyboard="true"
          :loop="true"
          :grab-cursor="true"
          :slides-per-view="1"
          :breakpoints="{ 1024: { slidesPerView: 2 } }"
        >
          <SwiperSlide v-for="client in clients" :key="client.name">
            <div
              class="relative h-full rounded-card-lg bg-bg-main shadow-lg px-6 pt-10 pb-6 text-center"
            >
              <img
                :src="clientImg(client.img)"
                :alt="client.name"
                class="absolute -top-8 right-6 h-16 w-16 rounded-card bg-bg-main object-contain p-2 shadow-lg"
              />
              <h3 class="mb-2 text-base font-bold text-accent-blue">
                {{ client.name }}
              </h3>
              <p class="mb-2 text-sm font-normal">
                {{ client.specialization }}
              </p>
              <a
                v-if="client.website"
                :href="`https://${client.website}`"
                target="_blank"
                rel="noopener"
                class="block mb-2 text-base font-bold"
              >
                {{ client.website }}
              </a>
              <p class="text-sm font-normal">{{ client.contacts }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <!-- FAQ -->
    <section class="max-w-container-blog px-4 mx-auto mt-12 laptop:mt-16">
      <h2 class="mb-6 text-center text-2xl laptop:text-4xl font-bold">
        Часто задаваемые вопросы
      </h2>
      <div class="divide-y divide-border-light border-y border-border-light">
        <details v-for="item in faq" :key="item.question" class="group py-3">
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-normal [&::-webkit-details-marker]:hidden"
          >
            {{ item.question }}
            <span
              class="text-2xl leading-none transition-transform group-open:rotate-45"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <p class="mt-3 text-sm font-normal text-content-muted">
            {{ item.answer }}
            <NuxtLink to="/contacts" class="underline">Контакты</NuxtLink>
          </p>
        </details>
      </div>
    </section>

    <!-- Форма обратной связи -->
    <section
      class="max-w-container laptop:px-4 mx-auto mt-12 laptop:mt-16 mb-12 laptop:mb-20"
    >
      <ContactForm id-prefix="index-form" />
    </section>
  </main>
</template>

<script setup>
import sliderClients from "~/assets/data/sliderClients.json";
import miLogo from "~/assets/svg/index-page/mi-logo.svg";
import heroDriver from "~/assets/svg/index-page/hero-driver.jpg";
import teamParking from "~/assets/svg/index-page/team-parking.jpg";
import arrowGreen from "~/assets/svg/index-page/Frame 1336586038.svg";
import iconWheel from "~/assets/svg/index-page/Vector-2.svg";
import iconPuzzle from "~/assets/svg/index-page/Vector-1.svg";
import iconHandshake from "~/assets/svg/index-page/Vector.svg";
import iconShield from "~/assets/svg/index-page/Vector-3.svg";
import iconSmile from "~/assets/svg/index-page/Vector-4.svg";
import illustrationDelivery from "~/assets/svg/index-page/Group.svg";
import illustrationMilk from "~/assets/svg/index-page/Group (1).svg";

useHead({
  title: "Организация грузоперевозок логистической компанией MiTech",
  meta: [
    {
      name: "description",
      content:
        "Предоставляем грузоперевозки по России, Беларуси и странам СНГ. Работаем с негабаритными, опасными, сборными грузами и посылками, требующими особый температурный режим. Организуем автомобильную грузовую доставку «под ключ». Свой автопарк автомобилей",
    },
    {
      name: "keywords",
      content:
        "транспортные услуги, организация грузоперевозок, оказание транспортных услуг, услуги грузоперевозок, транспортные перевозки услуги, услуги международные грузоперевозки, международные транспортные услуги",
    },
  ],
});

const clients = Object.values(sliderClients);
const clientImg = (img) => `/${img.replace(/^\.\//, "")}`;

const stats = [
  {
    title: "Нам 13 лет",
    text: "Чтобы персонализировать веб-браузер, используйте темы, ночной режим и другие параметры.",
  },
  { title: "150+ маршрутов" },
  { title: "5 тонн доставленных грузов ежемесячно" },
];

const serviceText =
  "Мы специализируемся на организации автогрузоперевозок по странам СНГ. Наш опыт и обширная сеть партнеров позволяют нам осуществлять транспортировки различных видов грузов – от малогабаритных до крупногабаритных. Независимо от вашего бизнеса, мы найдем оптимальное для вас решение.";

const services = [
  {
    to: "/services/transportation",
    title: "Международные грузоперевозки",
    text: serviceText,
    link: "Подробнее о грузоперевозках",
    cardClass: "bg-surface-blue-alt",
    accentClass: "text-accent-blue",
  },
  {
    to: "/services/freight-forwarding",
    title: "Экспедирование грузов",
    text: serviceText,
    link: "Подробнее об экспедировании",
    cardClass: "bg-surface-cream",
    accentClass: "text-amber",
  },
  {
    to: "/services/software-development",
    title: "Разработка ПО для управления автопарком из электромобилей",
    text: "Мы разрабатываем программные комплексы для ведения автоматизации учета электромобилей в автопарках юридических лиц.",
    link: "Подробнее о разработке ПО",
    cardClass: "bg-surface-green",
    accentClass: "text-accent-green",
  },
];

const safetyCards = [
  {
    tag: "Крупногабаритные грузы",
    text: "Безопасная доставка крупных грузов.",
    to: "/services/transportation",
    dark: true,
    img: illustrationDelivery,
    imgAlt: "Доставка крупногабаритных грузов",
  },
  {
    tag: "Техника",
    text: "Если вы не нашли описание своего груза, вы можете связаться с нами для уточнения деталей",
    to: "/contacts",
    dark: false,
  },
  {
    tag: "Товары народного потребления",
    text: "Мы обещаем надежность и оперативность доставки.",
    to: "/services/transportation",
    dark: true,
    img: illustrationMilk,
    imgAlt: "Молочная продукция",
    imgClass: "right-10",
  },
  {
    tag: "Продукты",
    text: "Будьте уверены, что наши рефрижераторы справятся.",
    to: "/services/transportation",
    dark: false,
  },
];

const faq = [
  {
    question: "Сколько по времени занимает грузоперевозки?",
    answer:
      "Срок зависит от маршрута и вида груза. Точные сроки уточняйте у менеджеров.",
  },
  {
    question: "Какие документы необходимы для перевоза груза?",
    answer:
      "Перечень документов зависит от направления и типа груза. Подробности – у наших менеджеров.",
  },
  {
    question: "Какие раценки у ваших услуг?",
    answer:
      "Стоимость рассчитывается индивидуально. Актуальные цены смотрите на странице «Цены».",
  },
  {
    question: "Почему нужно обращаться именно в MiTech?",
    answer: "Мы 13 лет перевозим грузы по России, Беларуси и странам СНГ.",
  },
];
</script>

<style scoped>
.section-title {
  @apply max-w-container-service mx-auto mb-6 text-center text-2xl laptop:text-6xl laptop:leading-tight laptop:mb-10 font-bold;
}
.title-pill {
  @apply inline-flex items-center gap-2 laptop:gap-3 rounded-full px-3 laptop:px-5 font-semibold;
}
.slider-arrow {
  @apply absolute top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-accent-blue text-bg-main transition-colors hover:bg-accent-blue-hover;
}
</style>
