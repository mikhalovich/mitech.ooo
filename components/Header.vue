<template>
  <div class="max-w-container mobile-l:px-4 mt-10 overflow-hidden w-full">
    <header class="flex items-center justify-between">
      <NuxtLink class="font-logo text-5xl font-bold text-secondary" to="/">
        MITech
      </NuxtLink>

      <a
        class="font-primary text-xl font-normal text-navigate mobile-l:ml-auto mobile-l:mr-6 tablet:hidden"
        href="tel:+375292837757"
      >
        +375292837757
      </a>

      <nav class="font-primary text-2xl font-normal text-navigate">
        <div class="tablet:hidden" @click="toggleMenu">
          <img
            v-if="!isPressed"
            src="../assets/svg/burger-open.svg"
            alt=""
            class="w-12 h-12 duration-300"
          />

          <img
            v-else
            src="../assets/svg/burger-close.svg"
            alt=""
            class="w-12 h-12 rotate-45"
          />
        </div>

        <div
          class="fixed tablet:static flex flex-col tablet:flex-row items-center w-full bg-cultured/90 tablet:bg-cultured/0 z-20 list-none transition-all duration-300 overflow-x-hidden [&>a]:my-6 tablet:[&>a]:my-0 [&>a]:mr-3 laptop:[&>a]:mr-12 [&>a]:transition-[text-shadow] [&>a]:duration-[0.1s]"
          :class="[!isPressed ? 'left-full' : 'left-0']"
        >
          <a
              class="hidden text-xl active:text-secondary tablet:block tablet:active:text-primary tablet:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]"
              href="tel:+375292837757"
            >
            +375292837757
          </a>
          <NuxtLink
            @click="toggleMenu"
            class="active:text-secondary tablet:active:text-primary tablet:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]"
            :class="{
              underline: location === '/',
              'decoration-secondary': location === '/'
            }"
            to="/"
          >
            Главная
          </NuxtLink>
          <NuxtLink
            @click="toggleMenu"
            class="active:text-secondary tablet:active:text-primary tablet:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]"
            :class="{
              underline: location === '/about',
              'decoration-secondary': location === '/about'
            }"
            to="/about"
          >
            О нас
          </NuxtLink>
          <NuxtLink
            @click="toggleMenu"
            class="active:text-secondary tablet:active:text-primary tablet:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]"
            :class="{
              underline:
                location === '/services' ||
                location === '/services/transportation' ||
                location === '/services/freight-forwarding',
              'decoration-secondary':
                location === '/services' ||
                location === '/services/transportation' ||
                location === '/services/freight-forwarding'
            }"
            to="/services"
          >
            Услуги
          </NuxtLink>
          <NuxtLink
            @click="toggleMenu"
            class="active:text-secondary tablet:active:text-primary tablet:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] last:mr-0"
            :class="{
              underline: location === '/contacts',
              'decoration-secondary': location === '/contacts'
            }"
            to="/contacts"
          >
            Контакты
          </NuxtLink>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue';

const route = useRoute();
const location = computed(() => route.path);

let isPressed = ref(false);

const toggleMenu = () => {
  isPressed.value = !isPressed.value;
};
const closeMenu = () => {
  isPressed.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', closeMenu);
});
onUnmounted(() => {
  window.removeEventListener('scroll', closeMenu);
});
</script>
