<template>
  <div class="w-full shadow-header">
    <header class="-translate-x-[700px] flex justify-start items-center max-w-screen-desktop-xxl gap-12 m-auto pt-3 pb-4 px-11" ref="headerRef">
      <NuxtLink to="/" class="text-[32px] leading-[38px] font-normal font-logo text-[#1B1C1E]">MITech</NuxtLink>
      <div class="flex gap-6 text-base font-bold font-secondary text-[#5F6368] [&>*]:cursor-pointer hover:[&>*]:text-[#202124]">
        <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" :class="{ 'text-[#202124]': location === link.path }">
          {{ link.label }}
        </NuxtLink>
      </div>
    </header>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { gsap } from "gsap";

const route = useRoute();
const location = computed(() => route.path);
const headerRef = ref(null);

const navLinks = [
  { path: '/', label: 'Главная страница' },
  { path: '/blog', label: 'Блог' },
  { path: '/services', label: 'Услуги' },
  { path: '/prices', label: 'Цены' },
  { path: '/contacts', label: 'Контакты' }
];

onMounted(() => {
  gsap.to(headerRef.value, 
    { x: '0%', duration: 1.5, ease: "power2.out" },
  );
});
</script>