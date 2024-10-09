<template>
  <section class="flex flex-col gap-11" ref="wholeServicesRef">
    <div class="flex flex-col justify-center text-[58px] leading-tight font-bold text-[#202124]">
      <h2 class="flex justify-center gap-3">
        Mi-Tech -
        <div class="flex gap-5 pl-[26px] pr-[30px] rounded-[48px] bg-[#E8F0FE]">
          <svg class="w-9 [&>.fill]:fill-[#1967D2]" viewBox="0 0 37 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="fill" d="M33.9999 6.75299C35.4399 7.39299 36.3799 8.83299 36.3799 10.413V19.812C36.3799 24.572 33.9999 31.885 30.1399 36.393C27.0399 40.013 22.9799 42.692 18.3799 43.812C8.05988 41.292 0.379883 30.912 0.379883 19.812V10.413C0.379883 8.83299 1.31988 7.39299 2.75988 6.75299L16.7599 0.532989C17.7799 0.072988 18.9599 0.072988 19.9999 0.532989L33.9999 6.75299Z" fill="#FAB408"/>
            <path d="M24.3799 21.812C24.3799 25.126 21.6939 27.812 18.3799 27.812C15.0659 27.812 12.3799 25.126 12.3799 21.812C12.3799 18.498 15.0659 15.812 18.3799 15.812C21.6939 15.812 24.3799 18.498 24.3799 21.812ZM23.8949 30.155C22.3139 31.202 20.4179 31.812 18.3799 31.812C12.8569 31.812 8.37988 27.335 8.37988 21.812C8.37988 16.289 12.8569 11.812 18.3799 11.812C23.9029 11.812 28.3799 16.289 28.3799 21.812C28.3799 23.85 27.7699 25.746 26.7229 27.327L33.2939 33.898C34.0749 34.679 34.0749 35.945 33.2939 36.726C32.5129 37.507 31.2469 37.507 30.4659 36.726L23.8949 30.155Z" fill="white"/>
            <path class="fill" d="M18.3779 27.7971C21.6919 27.7971 24.3779 25.1111 24.3779 21.7971C24.3779 18.4831 21.6919 15.7971 18.3779 15.7971C15.0639 15.7971 12.3779 18.4831 12.3779 21.7971C12.3779 25.1111 15.0639 27.7971 18.3779 27.7971Z" fill="#FAB408"/>
          </svg>
          <span class="text-[50px] font-medium text-[#1967D2]">разнообразие</span>
        </div>
      </h2>
      <h2 class="text-center">
        услуг
      </h2>
    </div>
    <div class="relative max-w-desktop-xxl desktop-xxl:w-[1847px] mt-32 translate-x-full" ref="servicesRef">
      <img src="~/assets/svg/index-page/services-word.svg" alt="word" class="absolute w-full top-0 left-0">
      <div class="absolute left-[20%] top-48 max-w-[373px] flex flex-col pt-6 pb-8 pl-6 pr-14 rounded-[22px] text-[#202124] font-secondary bg-[#FEF6DB] rotate-180" ref="firstCardRef">
        <span class="text-[10px] leading-[12.4px]">ВОСТРЕБОВАНО</span>
        <h3 class="py-3 font-bold text-[29px] leading-[35px]">Экспедирование грузов</h3>
        <p class="pb-4 text-[12.4px] leading-[17.6px]">Мы специализируемся на организации автогрузоперевозок по странам СНГ. Наш опыт и обширная сеть партнеров позволяют нам осуществлять транспортировки различных видов грузов – от малогабаритных до крупногабаритных. Независимо от вашего бизнеса, мы найдем оптимальное для вас решение.</p>
        <NuxtLink to="" class="text-[13px] leading-[17.6px] text-[#FAB408]">Подробнее о грузоперевозках</NuxtLink>
      </div>
      <div class="absolute -top-[50px] left-[40%] -rotate-90" ref="secondCardRef">
        <div class="relative w-[530px] pt-10 pb-11 rounded-3xl font-secondary text-[38px] leading-[44px] font-bold bg-[#C7E7D0]">
          <svg class="absolute -top-5 left-[calc(50%-22px)] w-11 [&>.fill]:fill-[#177531]" viewBox="0 0 37 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="fill" d="M33.9999 6.75299C35.4399 7.39299 36.3799 8.83299 36.3799 10.413V19.812C36.3799 24.572 33.9999 31.885 30.1399 36.393C27.0399 40.013 22.9799 42.692 18.3799 43.812C8.05988 41.292 0.379883 30.912 0.379883 19.812V10.413C0.379883 8.83299 1.31988 7.39299 2.75988 6.75299L16.7599 0.532989C17.7799 0.072988 18.9599 0.072988 19.9999 0.532989L33.9999 6.75299Z" fill="#FAB408"/>
            <path d="M24.3799 21.812C24.3799 25.126 21.6939 27.812 18.3799 27.812C15.0659 27.812 12.3799 25.126 12.3799 21.812C12.3799 18.498 15.0659 15.812 18.3799 15.812C21.6939 15.812 24.3799 18.498 24.3799 21.812ZM23.8949 30.155C22.3139 31.202 20.4179 31.812 18.3799 31.812C12.8569 31.812 8.37988 27.335 8.37988 21.812C8.37988 16.289 12.8569 11.812 18.3799 11.812C23.9029 11.812 28.3799 16.289 28.3799 21.812C28.3799 23.85 27.7699 25.746 26.7229 27.327L33.2939 33.898C34.0749 34.679 34.0749 35.945 33.2939 36.726C32.5129 37.507 31.2469 37.507 30.4659 36.726L23.8949 30.155Z" fill="white"/>
            <path class="fill" d="M18.3779 27.7971C21.6919 27.7971 24.3779 25.1111 24.3779 21.7971C24.3779 18.4831 21.6919 15.7971 18.3779 15.7971C15.0639 15.7971 12.3779 18.4831 12.3779 21.7971C12.3779 25.1111 15.0639 27.7971 18.3779 27.7971Z" fill="#FAB408"/>
          </svg>
          <h2 class="text-center text-[#177531] uppercase">Международные грузоперевозки</h2>
        </div>
      </div>
      <div class="absolute top-[170px] left-[70%] rotate-90" ref="thirdCardRef">
        <div class="relative w-[530px] pt-10 pb-11 rounded-3xl font-secondary text-[38px] leading-[44px] font-bold bg-[#E5EEFE]">
          <svg class="absolute -top-5 left-[calc(50%-22px)] w-11 [&>.fill]:fill-[#185CCC]" viewBox="0 0 37 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="fill" d="M33.9999 6.75299C35.4399 7.39299 36.3799 8.83299 36.3799 10.413V19.812C36.3799 24.572 33.9999 31.885 30.1399 36.393C27.0399 40.013 22.9799 42.692 18.3799 43.812C8.05988 41.292 0.379883 30.912 0.379883 19.812V10.413C0.379883 8.83299 1.31988 7.39299 2.75988 6.75299L16.7599 0.532989C17.7799 0.072988 18.9599 0.072988 19.9999 0.532989L33.9999 6.75299Z" fill="#FAB408"/>
            <path d="M24.3799 21.812C24.3799 25.126 21.6939 27.812 18.3799 27.812C15.0659 27.812 12.3799 25.126 12.3799 21.812C12.3799 18.498 15.0659 15.812 18.3799 15.812C21.6939 15.812 24.3799 18.498 24.3799 21.812ZM23.8949 30.155C22.3139 31.202 20.4179 31.812 18.3799 31.812C12.8569 31.812 8.37988 27.335 8.37988 21.812C8.37988 16.289 12.8569 11.812 18.3799 11.812C23.9029 11.812 28.3799 16.289 28.3799 21.812C28.3799 23.85 27.7699 25.746 26.7229 27.327L33.2939 33.898C34.0749 34.679 34.0749 35.945 33.2939 36.726C32.5129 37.507 31.2469 37.507 30.4659 36.726L23.8949 30.155Z" fill="white"/>
            <path class="fill" d="M18.3779 27.7971C21.6919 27.7971 24.3779 25.1111 24.3779 21.7971C24.3779 18.4831 21.6919 15.7971 18.3779 15.7971C15.0639 15.7971 12.3779 18.4831 12.3779 21.7971C12.3779 25.1111 15.0639 27.7971 18.3779 27.7971Z" fill="#FAB408"/>
          </svg>
          <h2 class="text-center text-[#185CCC] uppercase">Международные грузоперевозки</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted, onBeforeUnmount } from "vue";

gsap.registerPlugin(ScrollTrigger);

const servicesRef = ref(null);
const wholeServicesRef = ref(null);
const firstCardRef = ref(null);
const secondCardRef = ref(null);
const thirdCardRef = ref(null);
const screenWidth = ref(0);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;

  if (servicesRef.value && screenWidth.value < 1920) {
    servicesRef.value.style.width = `${screenWidth.value - (screenWidth.value / 100 * 10)}px`;
  }
};

onMounted(() => {
  updateScreenWidth();
  window.addEventListener('resize', updateScreenWidth);

  gsap.to(servicesRef.value, {
    x: "0",
    scrollTrigger: {
      trigger: wholeServicesRef.value,
      start: "top bottom",
    },
    duration: 1.5,
  });

  gsap.to(firstCardRef.value, {
    rotation: -14,
    duration: 1.5,
    scrollTrigger: {
      trigger: wholeServicesRef.value,
      start: "top bottom",
    },
  });

  gsap.to(secondCardRef.value, {
    rotation: 2,
    duration: 1.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: wholeServicesRef.value,
      start: "top bottom",
    },
  });

  gsap.to(thirdCardRef.value, {
    rotation: -10,
    duration: 1.5,
    scrollTrigger: {
      trigger: wholeServicesRef.value,
      start: "top bottom",
    },
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
</script>