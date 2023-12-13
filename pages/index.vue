<template>
  <div class="max-w-container px-4 mx-auto mt-20">
    <div
      class="flex flex-col desktop:flex-row justify-between items-center mb-24"
    >
      <div class="flex flex-col font-primary text-primary">
        <div class="flex flex-col max-w-[28.5rem] mb-4 tablet:mb-6">
          <h1 class="text-3xl tablet:text-lg font-medium mb-4 tablet:mb-6">
            Международные автоперевозки
          </h1>
          <div class="text-xl tablet:text-2xl font-light">
            13 лет перевозим грузы по России, Беларуси и странам СНГ
          </div>
        </div>
        <LearnMoreButton
          class="self-start mb-4 tablet:mb-0"
          :pathToTransportaion="pathToTransportaion"
        />
      </div>
      <img src="~/assets/svg/index-page/stock.svg" alt="stock" />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Международные грузоперевозки и экспедирование грузов от компании MiTech',
  meta: [
    { name: 'description', content: 'Международные грузоперевозки РБ, РФ, СНГ. Полный комплекс услуг. Индивидуальный подход' }
  ],
});

const pathToTransportaion = '/services/transportation';
</script>
