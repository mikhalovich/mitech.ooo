<template>
  <div class="max-w-container px-4 mx-auto mt-20">
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
              Работаем с 2008 года. Отзыв клиента 1. Бла-бла-бла. Крутые ребята.
              Работаем дальше. Бла-бла-бла. Крутые ребята. Работаем дальше
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
              Выполнено 100500 успешных перевозок. Отзыв клиента 1. Бла-бла-бла.
              Крутые ребята. Работаем дальше. Бла-бла-бла. Крутые ребята.
              Работаем дальше
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
              Еще один занимательный факт.Работаем с 2008 года. Отзыв клиента 1.
              Бла-бла-бла. Крутые ребята. Работаем дальше. Бла-бла-бла. Крутые
              ребята. Работаем дальше
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col desktop:flex-row items-center justify-between last:[&>*]:mt-10 desktop:last:[&>*]:mt-0"
      >
        <div
          class="flex flex-col justify-between items-center max-w-[24rem] tablet:max-w-2xlg tablet:px-14 pt-10 pb-14 rounded-2xl shadow-normal"
        >
          <h3 class="mb-7 text-4xlg font-medium">Наши клиенты</h3>

          <Swiper
            class="w-full"
            :modules="[SwiperPagination, SwiperNavigation, SwiperKeyboard]"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
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

            <SwiperSlide v-for="client in sliderClients">
              <div class="flex justify-center items-center">
                <div class="flex flex-col items-center w-96 h-52 mb-4 mx-8">
                  <img class="w-20 h-20" :src="client.img" alt="client" />

                  <h4 class="pb-2 text-2xl font-normal">
                    {{ client.name }}
                  </h4>
                  <p class="text-base text-center">
                    {{ client.message }}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div
          class="flex flex-col justify-between items-center max-w-[24rem] tablet:max-w-2xlg tablet:px-14 pt-10 pb-14 rounded-2xl shadow-normal"
        >
          <h3 class="mb-7 text-4xlg font-medium">Наши партнеры</h3>

          <Swiper
            class="w-full"
            :modules="[SwiperPagination, SwiperNavigation, SwiperKeyboard]"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
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
                <div class="flex flex-col items-center w-96 h-52 mb-4 mx-8">
                  <img class="w-20 h-20" :src="partner.img" alt="partner" />

                  <h4 class="pb-2 text-2xl font-normal">
                    {{ partner.name }}
                  </h4>
                  <p class="text-base text-center">
                    {{ partner.message }}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import sliderClients from "../assets/data/sliderClients.json";
import sliderPartners from "../assets/data/sliderPartners.json";
</script>
