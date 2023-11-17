<template>
  <div class="max-w-container px-4 mx-auto mt-20">
    <div
      class="flex flex-col desktop:flex-row justify-between items-center mb-24"
    >
      <div class="flex flex-col font-primary text-primary">
        <div class="flex flex-col max-w-[28.5rem] mb-4 tablet:mb-6">
          <h1 class="text-3xl tablet:text-lg font-medium mb-4 tablet:mb-6">
            Международные автомобильные грузоперевозки
          </h1>
          <div class="text-xl tablet:text-2xl font-light">
            Текст заглушка для сео о чем угодно. Бла-бла-бла и всякое разное.
            Текст заглушка для сео о чем угодно. Бла-бла-бла и всякое разное.
          </div>
        </div>
        <LearnMoreButton
          class="self-start mb-4 tablet:mb-0"
          :pathToTransportaion="pathToTransportaion"
        />
      </div>
      <img src="~/assets/svg/index-page/stock.svg" alt="stock" />
    </div>
    <Footer />
  </div>
</template>

<script setup>
const pathToTransportaion = "/services/transportation";
</script>
