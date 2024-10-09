<template>
  <section class="flex flex-col justify-center gap-9 font-secondary" ref="logisticIntroRef">
    <div class="flex flex-col justify-center text-[58px] leading-tight font-bold text-[#202124]">
      <h2 class="flex justify-center gap-3">
        Международные
        <div class="flex gap-5 pl-[26px] pr-[30px] rounded-[48px] bg-[#FEF6DB]">
          <svg class="w-9 [&>.fill]:fill-[#FAB408]" viewBox="0 0 37 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="fill" d="M33.9999 6.75299C35.4399 7.39299 36.3799 8.83299 36.3799 10.413V19.812C36.3799 24.572 33.9999 31.885 30.1399 36.393C27.0399 40.013 22.9799 42.692 18.3799 43.812C8.05988 41.292 0.379883 30.912 0.379883 19.812V10.413C0.379883 8.83299 1.31988 7.39299 2.75988 6.75299L16.7599 0.532989C17.7799 0.072988 18.9599 0.072988 19.9999 0.532989L33.9999 6.75299Z" fill="#FAB408"/>
            <path d="M24.3799 21.812C24.3799 25.126 21.6939 27.812 18.3799 27.812C15.0659 27.812 12.3799 25.126 12.3799 21.812C12.3799 18.498 15.0659 15.812 18.3799 15.812C21.6939 15.812 24.3799 18.498 24.3799 21.812ZM23.8949 30.155C22.3139 31.202 20.4179 31.812 18.3799 31.812C12.8569 31.812 8.37988 27.335 8.37988 21.812C8.37988 16.289 12.8569 11.812 18.3799 11.812C23.9029 11.812 28.3799 16.289 28.3799 21.812C28.3799 23.85 27.7699 25.746 26.7229 27.327L33.2939 33.898C34.0749 34.679 34.0749 35.945 33.2939 36.726C32.5129 37.507 31.2469 37.507 30.4659 36.726L23.8949 30.155Z" fill="white"/>
            <path class="fill" d="M18.3779 27.7971C21.6919 27.7971 24.3779 25.1111 24.3779 21.7971C24.3779 18.4831 21.6919 15.7971 18.3779 15.7971C15.0639 15.7971 12.3779 18.4831 12.3779 21.7971C12.3779 25.1111 15.0639 27.7971 18.3779 27.7971Z" fill="#FAB408"/>
          </svg>
          <span class="text-[50px] font-medium text-[#FAB408]">автомобильные</span>
        </div>
      </h2>
      <h2 class="text-center">
        грузоперевозки
      </h2>
    </div>
    <div class="flex flex-col gap-9 max-w-7xl text-2xl leading-[30px] text-center pt-14 pb-[50px] px-[100px] rounded-[20px] shadow-logistic-card">
      <p>Логистические услуги позволяют сократить время доставки грузов и минимизировать риски потерь и повреждений.</p>
      <p>Благодаря использованию современных технологий и инновационному подходу, компания MiTech может обеспечить высокий уровень сервиса и удовлетворить потребности самых требовательных клиентов.</p>
    </div>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

gsap.registerPlugin(ScrollTrigger);

const logisticIntroRef = ref(null);
let scrollTriggerInstance;

onMounted(async () => {
  await nextTick();

  if (logisticIntroRef.value) {
    scrollTriggerInstance = gsap.to(logisticIntroRef.value,
      { 
        scale: 1.1,
        scrollTrigger: {
          trigger: logisticIntroRef.value,
          start: "top 20%",
          end: "bottom top",
          onEnter: () => gsap.to(logisticIntroRef.value, { scale: 1.1 }),
          onLeaveBack: () => gsap.to(logisticIntroRef.value, { scale: 1 }),
        }
      }
    );
  }
});

onBeforeUnmount(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.scrollTrigger.kill();
  }
});
</script>