<template>
  <div class="max-w-container mx-auto mt-20">
    <div class="font-primary text-base font-light text-primary mb-24">
      <div
        class="grid gap-4 grid-cols-1 tablet:grid-cols-3 [&>*]:justify-self-center mb-10"
      >
        <div class="relative max-w-medium">
          <img
            class="absolute top-[-5%] right-[2%]"
            src="~/assets/svg/about-page/number_one.svg"
            alt="number one"
          />
          <div
            class="flex flex-col min-h-[17rem] border-0 rounded-xl bg-greenCard"
          >
            <img
              class="max-w-[10rem] pl-2 pt-3"
              src="~/assets/svg/about-page/calendar.svg"
              alt="calendar"
            />
            <p class="px-6 py-5">
              Транспортно-экспедиторская компания "MiTech" – ваш надежный
              партнер в сфере международных грузоперевозок и экспедирования
              грузов, на протяжении 13 лет.
            </p>
          </div>
        </div>
        <div class="relative max-w-medium">
          <img
            class="absolute top-[-5%] right-[2%]"
            src="~/assets/svg/about-page/number_two.svg"
            alt="number two"
          />
          <div
            class="flex flex-col min-h-[17rem] border-0 rounded-xl bg-purpleCard"
          >
            <img
              class="max-w-[10rem] pl-2 pt-3"
              src="~/assets/svg/about-page/todo.svg"
              alt="todo"
            />
            <p class="px-6 py-5">
              Обеспечиваем комплексное обслуживание грузовых автоперевозок,
              прозрачную систему управления и эффективные решения для вашего
              бизнеса
            </p>
          </div>
        </div>
        <div class="relative max-w-medium">
          <img
            class="absolute top-[-5%] right-[2%]"
            src="~/assets/svg/about-page/number_three.svg"
            alt="number three"
          />
          <div
            class="flex flex-col min-h-[17rem] border-0 rounded-xl bg-pinkCard"
          >
            <img
              class="max-w-[7rem] pl-2 pt-3"
              src="~/assets/svg/about-page/planet.svg"
              alt="planet"
            />
            <p class="px-6 py-5">
              90% наших клиентов возвращаются к нам с новыми заказами или
              рекомендуют нас своим деловым партнерам, благодаря налаженным
              процессам и высокому уровню сервиса.
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col desktop:flex-row items-center justify-between last:[&>*]:mt-10 desktop:last:[&>*]:mt-0"
      >
        <div
          class="flex flex-col justify-between items-center max-w-container tablet:px-8 pt-4 pb-8 rounded-2xl shadow-normal"
        >
          <h3 class="mb-1 text-4xlg font-medium">Наши клиенты</h3>

          <Swiper
            class="w-full"
            :modules="[SwiperPagination, SwiperNavigation, SwiperKeyboard]"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }"
            :loop="true"
            :pagination="{ clickable: true }"
            :slides-per-view="2"
            :keyboard="true"
            :grab-cursor="true"
          >
            <div class="hidden tablet:block slider-navigation">
              <img
                class="swiper-button-prev"
                src="~/assets/svg/about-page/arrow_left.svg"
                alt="arrow left"
              />
              <img
                class="swiper-button-next"
                src="~/assets/svg/about-page/arrow_right.svg"
                alt="arrow right"
              />
            </div>

            <SwiperSlide v-for="client in sliderClients" class="items-center">
              <div class="flex justify-center items-center w-full">
                <div
                  class="flex flex-col items-center w-auto px-6 h-52 mb-7 mx-8"
                >
                  <img class="w-auto h-14" :src="client.img" alt="client" />

                  <h4 class="pb-2 text-2xl font-normal text-center">
                    {{ client.name }}
                  </h4>
                  <p class="text-base text-center mt-1">
                    {{ client.specialization }}
                  </p>
                  <a
                    :href="`https://${client.website}`"
                    class="text-xlg text-center"
                  >
                    {{ client.website }}
                  </a>
                  <p class="text-base text-center mt-1">
                    {{ client.contacts }}
                  </p>
                </div>
              </div>
              <div class="divider"></div>
            </SwiperSlide>
          </Swiper>
        </div>

        <!-- <div
          class="flex flex-col justify-between items-center max-w-[24rem] tablet:max-w-2xlg tablet:px-8 pt-4 pb-8 rounded-2xl shadow-normal"
        >
          <h3 class="mb-1 text-4xlg font-medium">Наши партнеры</h3>

          <Swiper
            class="w-full"
            :modules="[SwiperPagination, SwiperNavigation, SwiperKeyboard]"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }"
            :loop="true"
            :pagination="{ clickable: true }"
            :slides-per-view="1"
            :keyboard="true"
            :grab-cursor="true"
          >
            <div class="hidden tablet:block slider-navigation">
              <img
                class="swiper-button-prev"
                src="~/assets/svg/about-page/arrow_left.svg"
                alt="arrow left"
              />
              <img
                class="swiper-button-next"
                src="~/assets/svg/about-page/arrow_right.svg"
                alt="arrow right"
              />
            </div>

            <SwiperSlide v-for="partner in sliderPartners">
              <div class="flex justify-center items-center">
                <div
                  class="flex flex-col items-center w-auto px-6 h-52 mb-7 mx-8"
                >
                  <img class="w-auto h-14" :src="partner.img" alt="partner" />

                  <h4 class="pb-2 text-2xl font-normal text-center">
                    {{ partner.name }}
                  </h4>
                  <p class="text-base text-center mt-1">
                    {{ partner.specialization }}
                  </p>
                  <a
                    :href="`https://${partner.website}`"
                    class="text-xlg text-center"
                  >
                    {{ partner.website }}
                  </a>
                  <p class="text-base text-center mt-1">
                    {{ partner.contacts }}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import sliderClients from '../assets/data/sliderClients.json';
import sliderPartners from '../assets/data/sliderPartners.json';

useHead({
  title: 'О компании MiTech',
  meta: [
    {
      name: 'description',
      content:
        'Транспортно-экспедиторская компания "MiTech" – ваш надежный партнер в сфере международных грузоперевозок и экспедирования грузов.'
    },
    { name: 'keywords', content: 'о компании' }
  ]
});
</script>

<style>
.swiper-slide.swiper-slide-active {
  display: flex;
}
.swiper-slide-active .divider {
  height: 150px;
  border-right: 1px solid;
  width: 0px;
}
</style>
