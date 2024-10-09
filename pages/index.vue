<template>
  <Index class="mt-[60px]" />
  <LogisticsIntro class="mt-52" />
  <VarietyServices class="mt-60" />
</template>

<script setup>
import Index from "~/components/mainPage/index.vue";
import LogisticsIntro from "~/components/mainPage/LogisticsIntro.vue"; 
import VarietyServices from "~/components/mainPage/VarietyServices.vue";

useHead({
  title:
    'Организация грузоперевозок логистической компанией MiTech',
  meta: [
    {
      name: 'description',
      content:
        'Предоставляем грузоперевозки по России, Беларуси и странам СНГ. Работаем с негабаритными, опасными, сборными грузами и посылками, требующими особый температурный режим. Организуем автомобильную грузовую доставку «под ключ». Свой автопарк автомобилей'
    },
    {
      name: 'keywords',
      content:
        'транспортные услуги, организация грузоперевозок, оказание транспортных услуг, услуги грузоперевозок, транспортные перевозки услуги, услуги международные грузоперевозки, международные транспортные услуги'
    }
  ]
});
</script>
