<template>
  <main class="w-full overflow-x-clip font-primary text-content-main">
    <!-- Hero -->
    <section
      class="max-w-container mx-auto px-5 tablet:px-8 desktop:px-4 py-5 tablet:py-10 text-center"
    >
      <h1
        class="max-w-container-narrow mx-auto text-2xl tablet:text-[44px] desktop:text-[56px] leading-[1.1] font-bold mb-2 tablet:mb-5"
      >
        Логистическая компания,<br />
        созданная для вас
      </h1>
      <p
        class="text-base tablet:text-xl desktop:text-2xl leading-[1.3] tablet:leading-[1.1] font-normal text-black mb-4 tablet:mb-8"
      >
        Доставим ваш груз быстро, безопасно и экономично
      </p>

      <div
        class="max-w-container-narrow mx-auto flex flex-col tablet:flex-row tablet:items-center gap-3 tablet:gap-5 desktop:gap-12 text-left"
      >
        <img
          :src="heroDriver"
          alt="Водитель грузового автомобиля"
          class="w-[300px] h-[180px] max-w-full tablet:w-[385px] tablet:h-[385px] desktop:w-[450px] desktop:h-[450px] tablet:shrink-0 mx-auto tablet:mx-0 rounded-card-xl object-cover"
        />

        <div class="flex flex-col gap-3 tablet:gap-8 desktop:gap-12 w-full tablet:flex-1">
          <div class="flex flex-col gap-2 tablet:gap-5">
            <div
              v-for="(stat, index) in stats"
              :key="stat.title"
              class="flex items-center gap-4 tablet:gap-5 desktop:gap-9"
              :class="
                index === 0
                  ? 'py-1'
                  : 'min-h-[58px] tablet:min-h-[76px] desktop:min-h-[90px]'
              "
            >
              <span
                class="w-1 shrink-0 self-stretch rounded-full"
                :class="index === 0 ? 'bg-accent-green' : 'bg-border-light'"
                aria-hidden="true"
              />
              <div class="flex flex-col gap-2">
                <p
                  class="text-base tablet:text-xl desktop:text-2xl leading-[1.3] font-bold"
                  :class="index === 0 ? 'text-black' : 'text-content-main'"
                >
                  {{ stat.title }}
                </p>
                <p
                  v-if="stat.text"
                  class="text-sm tablet:text-base desktop:text-lg leading-[1.2] font-normal text-content-muted"
                >
                  {{ stat.text }}
                </p>
              </div>
            </div>
          </div>

          <NuxtLink
            to="/contacts"
            class="self-center tablet:self-start inline-flex items-center gap-2 rounded-full bg-surface-green px-6 py-3 text-sm tablet:text-base leading-none font-medium text-accent-green transition-colors hover:bg-accent-green hover:text-bg-main"
          >
            Заказать обратную связь
            <img :src="arrowGreen" alt="" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Международные автомобильные грузоперевозки -->
    <section
      class="max-w-container mx-auto px-5 tablet:px-8 desktop:px-4 py-5 tablet:py-10"
    >
      <h2 class="section-title">
        Международные<br class="tablet:hidden" />
        <span class="title-pill bg-surface-cream text-primary">
          <img
            :src="iconWheel"
            alt=""
            class="w-7 h-7 tablet:w-10 tablet:h-10 desktop:w-[52px] desktop:h-[52px]"
          />
          автомобильные
        </span>
        <br />
        грузоперевозки
      </h2>
      <div
        class="max-w-container-narrow mx-auto rounded-card-lg bg-bg-main shadow-[0_4px_10px_rgba(32,33,36,0.1)] px-6 py-4 tablet:px-16 tablet:py-8 desktop:py-12 text-center text-sm tablet:text-base desktop:text-lg leading-[1.4] font-normal text-black"
      >
        <p class="mb-4 tablet:mb-5">
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
    <section
      class="max-w-container mx-auto px-5 tablet:px-8 desktop:px-4 py-5 tablet:py-10"
    >
      <h2 class="section-title">
        MiTech –
        <span class="title-pill bg-surface-blue-alt text-accent-blue">
          <img
            :src="iconPuzzle"
            alt=""
            class="w-7 h-7 tablet:w-10 tablet:h-10 desktop:w-[52px] desktop:h-[52px]"
          />
          разнообразие
        </span>
        <br />
        услуг
      </h2>

      <!-- Мобилка и планшет: слайдер -->
      <div class="laptop:hidden">
        <Swiper
          class="!overflow-visible"
          :slides-per-view="'auto'"
          :space-between="16"
          :breakpoints="{ 768: { spaceBetween: 24 } }"
        >
          <SwiperSlide
            v-for="service in services"
            :key="service.to"
            class="!h-auto !w-[300px] tablet:!w-[400px]"
          >
            <NuxtLink
              :to="service.to"
              class="flex h-full min-h-[340px] tablet:min-h-[320px] flex-col rounded-card py-4 px-5 tablet:py-5 tablet:px-7 transition-shadow hover:shadow-lg"
              :class="service.cardClass"
            >
              <span
                class="text-sm leading-none font-medium uppercase"
                :class="service.accentClass"
              >
                Востребовано
              </span>
              <h3
                class="mt-2 mb-3 tablet:mt-3 tablet:mb-4 text-base tablet:text-xl leading-[1.3] font-bold text-content-main"
              >
                {{ service.title }}
              </h3>
              <p class="mb-5 text-sm leading-[1.4] font-normal text-content-main">
                {{ service.text }}
              </p>
              <span
                class="mt-auto text-sm font-bold"
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
          class="flex min-h-[340px] flex-col rounded-card py-5 px-7 transition-shadow hover:shadow-lg"
          :class="service.cardClass"
        >
          <span
            class="text-sm leading-none font-medium uppercase"
            :class="service.accentClass"
          >
            Востребовано
          </span>
          <h3
            class="mt-3 mb-4 text-2xl font-bold leading-[1.3] text-black"
          >
            {{ service.title }}
          </h3>
          <p class="mb-8 text-sm leading-[1.4] font-normal text-content-main">
            {{ service.text }}
          </p>
          <span
            class="mt-auto text-base font-bold"
            :class="service.accentClass"
          >
            {{ service.link }}
          </span>
        </NuxtLink>
      </div>
    </section>

    <!-- Надежная команда -->
    <section
      class="max-w-container mx-auto px-5 tablet:px-8 desktop:px-4 py-5 tablet:py-10"
    >
      <h2 class="section-title">
        MiTech –
        <span class="title-pill bg-surface-green/60 text-accent-green">
          <img
            :src="iconHandshake"
            alt=""
            class="w-7 h-7 tablet:w-10 tablet:h-10 desktop:w-[52px] desktop:h-[52px]"
          />
          надежная
        </span>
        <br />
        команда
      </h2>
      <div
        class="relative max-w-container-narrow mx-auto overflow-hidden rounded-lg tablet:rounded-card"
      >
        <img
          :src="teamParking"
          alt="Парковка с грузовыми автомобилями MiTech"
          class="w-full h-[240px] tablet:h-[480px] desktop:h-[620px] object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"
        ></div>
        <p
          class="absolute inset-0 flex items-center justify-center px-10 tablet:px-16 desktop:px-48 text-center text-sm tablet:text-xl desktop:text-2xl leading-[1.4] font-normal text-bg-main"
        >
          Транспортно-экспедиторская компания "MiTech" – ваш надежный партнер в
          сфере международных грузоперевозок и экспедирования грузов, на
          протяжении 13 лет.
        </p>
        <span
          class="absolute bottom-3 right-8 tablet:bottom-2 tablet:right-14 desktop:right-20 text-[56px] tablet:text-[140px] desktop:text-[180px] font-bold leading-none text-bg-main/50"
          aria-hidden="true"
        >
          1
        </span>
      </div>
    </section>

    <!-- Гарантия безопасности -->
    <section
      class="max-w-container mx-auto px-5 tablet:px-8 desktop:px-4 py-5 tablet:py-10"
    >
      <h2 class="section-title">
        MiTech –
        <span class="title-pill bg-surface-cream text-amber">
          <img
            :src="iconShield"
            alt=""
            class="w-7 h-7 tablet:w-10 tablet:h-10 desktop:w-[52px] desktop:h-[52px]"
          />
          гарантия
        </span>
        <br />
        безопасности
      </h2>

      <!-- Мобилка и планшет: слайдер -->
      <div class="laptop:hidden">
        <Swiper
          class="!overflow-visible"
          :slides-per-view="'auto'"
          :space-between="16"
        >
          <SwiperSlide
            v-for="card in safetyCards"
            :key="card.tag"
            class="!h-auto"
            :class="
              card.dark
                ? '!w-[260px] tablet:!w-[331px]'
                : '!w-[240px] tablet:!w-[287px]'
            "
          >
            <NuxtLink
              :to="card.to"
              class="relative flex flex-col overflow-hidden rounded-card py-4 px-5 tablet:px-7 transition-shadow hover:shadow-lg"
              :class="
                card.dark
                  ? 'h-[260px] tablet:h-[308px] bg-amber/80'
                  : 'h-[200px] tablet:h-[256px] bg-yellow-soft/40'
              "
            >
              <span
                class="relative z-10 text-sm leading-none font-normal uppercase"
                :class="card.dark ? 'text-content-main' : 'text-amber'"
              >
                {{ card.tag }}
              </span>
              <p
                class="relative z-10 mt-2 font-bold leading-[1.3] text-content-main"
                :class="
                  card.dark
                    ? 'text-base tablet:text-xl'
                    : 'text-sm tablet:text-base'
                "
              >
                {{ card.text }}
              </p>
              <img
                v-if="card.img"
                :src="card.img"
                :alt="card.imgAlt"
                class="pointer-events-none absolute w-auto"
                :class="
                  card.imgClass ||
                  'bottom-11 left-5 right-5 max-h-[68px] tablet:max-h-[85px] object-contain'
                "
              />
              <span
                class="absolute bottom-4 right-5 tablet:right-7 z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full text-lg font-bold leading-none"
                :class="
                  card.dark ? 'bg-bg-main text-amber' : 'bg-amber text-bg-main'
                "
                aria-label="Подробнее"
              >
                +
              </span>
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Десктоп: 4 колонки, карточки разной ширины и высоты (как в макете) -->
      <div
        class="hidden laptop:grid laptop:grid-cols-[330fr_280fr_330fr_280fr] laptop:items-start laptop:gap-5"
      >
        <NuxtLink
          v-for="card in safetyCards"
          :key="card.tag"
          :to="card.to"
          class="relative flex flex-col overflow-hidden rounded-card py-4 px-7 pb-14 transition-shadow hover:shadow-lg"
          :class="
            card.dark
              ? 'min-h-[346px] bg-amber/80'
              : 'min-h-[247px] bg-yellow-soft/40'
          "
        >
          <span
            class="relative z-10 text-sm leading-none font-medium uppercase"
            :class="card.dark ? 'text-content-main' : 'text-amber'"
          >
            {{ card.tag }}
          </span>
          <p
            class="relative z-10 mt-3 font-bold leading-[1.3] text-black"
            :class="card.dark ? 'text-2xl' : 'text-xl'"
          >
            {{ card.text }}
          </p>
          <img
            v-if="card.img"
            :src="card.img"
            :alt="card.imgAlt"
            class="pointer-events-none absolute w-auto"
            :class="
              card.imgDesktopClass ||
              'bottom-14 left-7 right-7 max-h-[85px] object-contain'
            "
          />
          <span
            class="absolute bottom-4 right-7 z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full text-lg font-bold leading-none"
            :class="
              card.dark ? 'bg-bg-main text-amber' : 'bg-amber text-bg-main'
            "
            aria-label="Подробнее"
          >
            +
          </span>
        </NuxtLink>
      </div>
    </section>

    <!-- Довольные клиенты -->
    <section
      class="max-w-container mx-auto px-5 tablet:px-8 desktop:px-4 py-5 tablet:py-10"
    >
      <h2 class="section-title mb-9 tablet:mb-8">
        MiTech –
        <span class="title-pill bg-surface-blue-alt text-accent-blue">
          <img
            :src="iconSmile"
            alt=""
            class="w-7 h-7 tablet:w-10 tablet:h-10 desktop:w-[52px] desktop:h-[52px]"
          />
          довольные
        </span>
        <br />
        клиенты
      </h2>

      <div class="relative max-w-container-narrow mx-auto pb-4">
        <button
          type="button"
          class="clients-prev slider-arrow left-2 tablet:left-5"
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
          class="clients-next slider-arrow right-2 tablet:right-5"
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
          class="!pt-7 tablet:!pt-12 desktop:!pt-14 !pb-10 tablet:!pb-12 !px-1"
          :modules="[SwiperPagination, SwiperNavigation, SwiperKeyboard]"
          :navigation="{ nextEl: '.clients-next', prevEl: '.clients-prev' }"
          :pagination="{ clickable: true }"
          :keyboard="true"
          :loop="true"
          :grab-cursor="true"
          :slides-per-view="1"
          :space-between="20"
          :breakpoints="{ 1024: { slidesPerView: 2, spaceBetween: 24 } }"
        >
          <SwiperSlide v-for="client in clients" :key="client.name" class="!h-auto">
            <div
              class="relative h-full rounded-card-xl bg-bg-main shadow-[0_4px_20px_rgba(0,0,0,0.1)] px-12 py-5 tablet:px-20 tablet:py-10 laptop:px-14 desktop:py-[52px] text-center"
            >
              <img
                :src="clientImg(client.img)"
                :alt="client.name"
                class="absolute -top-6 right-5 tablet:-top-10 tablet:right-12 desktop:-top-12 desktop:right-8 h-[52px] w-[52px] tablet:h-20 tablet:w-20 desktop:h-[100px] desktop:w-[100px] rounded-xl tablet:rounded-card-lg bg-bg-main object-contain p-2 tablet:p-3 desktop:p-4 shadow-[0_4px_13px_rgba(0,0,0,0.25)]"
              />
              <h3
                class="mb-1 tablet:mb-2 text-base tablet:text-xl leading-[26px] font-bold text-accent-blue"
              >
                {{ client.name }}
              </h3>
              <p
                class="mb-1 tablet:mb-2 text-sm tablet:text-base leading-snug tablet:leading-[26px] font-normal"
              >
                {{ client.specialization }}
              </p>
              <a
                v-if="client.website"
                :href="`https://${client.website}`"
                target="_blank"
                rel="noopener"
                class="block mb-1 tablet:mb-2 text-base tablet:text-xl leading-[26px] font-bold"
              >
                {{ client.website }}
              </a>
              <p class="text-sm tablet:text-base leading-snug tablet:leading-[26px] font-normal">
                {{ client.contacts }}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <!-- FAQ -->
    <section
      class="max-w-container mx-auto px-5 tablet:px-8 desktop:px-4 py-5 tablet:py-10"
    >
      <div class="max-w-container-narrow mx-auto">
        <h2
          class="mb-5 tablet:mb-8 text-center text-[26px] tablet:text-[32px] desktop:text-[40px] leading-[1.1] font-bold"
        >
          Часто задаваемые вопросы
        </h2>
        <div class="divide-y divide-border border-y border-border">
          <details
            v-for="item in faq"
            :key="item.question"
            class="group py-2 px-2 tablet:py-2.5"
          >
            <summary
              class="flex cursor-pointer list-none items-center justify-between gap-4 text-sm tablet:text-xl desktop:text-2xl leading-[1.4] font-normal [&::-webkit-details-marker]:hidden"
            >
              <span>{{ item.question }}</span>
              <span
                class="shrink-0 text-xl tablet:text-3xl leading-none transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p
              class="mt-2 tablet:mt-3 text-sm tablet:text-base leading-[1.4] font-normal text-content-muted"
            >
              {{ item.answer }}
              <NuxtLink to="/contacts" class="underline">Контакты</NuxtLink>
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- Форма обратной связи -->
    <section
      class="max-w-container mx-auto px-0 tablet:px-8 desktop:px-4 py-5 tablet:py-10"
    >
      <ContactForm id-prefix="index-form" />
    </section>
  </main>
</template>

<script setup>
import sliderClients from "~/assets/data/sliderClients.json";
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
    imgClass: "-bottom-6 right-12 max-h-[171px] tablet:max-h-[203px]",
    imgDesktopClass: "-bottom-6 right-12 max-h-[212px]",
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
    question: "Сколько по времени занимают грузоперевозки?",
    answer:
      "Срок зависит от маршрута и вида груза. Точные сроки уточняйте у менеджеров.",
  },
  {
    question: "Какие документы необходимы для перевоза груза?",
    answer:
      "Перечень документов зависит от направления и типа груза. Подробности – у наших менеджеров.",
  },
  {
    question: "Какие расценки у ваших услуг?",
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
  @apply max-w-container-service mx-auto mb-5 tablet:mb-8 text-center text-xl tablet:text-[32px] desktop:text-[40px] leading-[1.35] tablet:leading-[1.1] font-bold;
}
.title-pill {
  @apply inline-flex items-center gap-1 tablet:gap-2 rounded-full py-1 pl-2 pr-3 tablet:py-2 tablet:px-4 font-semibold leading-none align-middle;
}
.slider-arrow {
  @apply absolute top-1/2 z-10 flex h-9 w-9 tablet:h-10 tablet:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-accent-blue text-bg-main transition-colors hover:bg-accent-blue-hover;
}
</style>
