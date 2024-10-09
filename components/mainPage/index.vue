<template>
  <section class="flex flex-col gap-24 opacity-0" ref="indexRef">
    <div class="flex flex-col gap-8 items-center font-secondary">
      <img src="~\assets\svg\index-page\alternative-logo.svg" alt="logo" class="w-[63px] h-[63px]" />
      <div class="flex flex-col gap-6 text-center">
        <h2 class="font-bold text-[72px] leading-[200px] text-[#202124] -rotate-[35deg] -translate-y-[450px]" ref="titleRef">
          <p>Логистическая компания,</p>
          <p>созданная для вас</p>
        </h2>
        <div class="text-base text-[#000000]">
          <p>Логистические услуги позволяют сократить время доставки грузов и</p>
          <p>минимизировать риски потерь и повреждений.</p>
        </div>
      </div>
    </div>
    <div class="flex gap-24">
      <img src="driver.png" alt="driver" class="max-w-[614px]" />
      <div class="flex flex-col items-start gap-11 pt-24">
        <div class="flex flex-col gap-8">
          <div
            v-for="(card, idx) in cardInfo"
            :key="card.title"
            class="flex flex-col gap-2 font-secondary pt-2 pl-8 border-l-4 transition-all duration-300"
            :class="{ 'border-[#177531]': isVisible[idx], 'pb-2 border-[#F1F3F4] cursor-pointer': !isVisible[idx] }"
            @click="toggleCard(idx)"
          >
            <p class="text-[28px] leading-[36px] font-bold text-[#202124]">{{ card.title }}</p>
            <p v-if="isVisible[idx]" class="max-w-[350px] text-[17px] leading-7 text-[#5F6368]">{{ card.body }}</p>
          </div>
        </div>
        <Button :label="buttonInfo.label" :route="buttonInfo.route" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '~/components/Button.vue';
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const buttonInfo = {
  label: 'Заказать обратную связь',
  route: '/contacts',
};

const cardInfo = [
  {
    title: 'Нам 13 лет',
    body: 'Чтобы персонализировать веб-браузер, используйте темы, ночной режим и другие параметры.',
  },
  {
    title: 'Комплексное обслуживание',
    body: 'Чтобы персонализировать веб-браузер, используйте темы, ночной режим и другие параметры.',
  },
  {
    title: 'Высокий уровень обслуживания',
    body: 'Чтобы персонализировать веб-браузер, используйте темы, ночной режим и другие параметры.',
  },
];

const isVisible = ref(cardInfo.map(() => false));
isVisible.value[0] = true;

const toggleCard = (idx) => {
  isVisible.value = isVisible.value.map((_, index) => index === idx);
}

const titleRef = ref(null);
const indexRef = ref(null);

onMounted(() => {
  gsap.to(indexRef.value,
    { opacity: 1, duration: 1.5, ease: "power1.out" },
  );

  gsap.to(titleRef.value, 
    { y: '0%', lineHeight: "78px", rotation: 0, duration: 1.5, ease: "power2.out" },
  );
});
</script>