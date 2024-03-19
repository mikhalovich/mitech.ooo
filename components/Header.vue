<template>
  <div class="max-w-container mobile-l:px-4 mt-10 w-full">
    <header class="flex items-center justify-between">
      <NuxtLink class="font-logo text-5xl font-bold text-secondary" to="/">
        MITech
      </NuxtLink>

      <a
        class="font-primary text-xl font-normal text-navigate mobile-l:ml-auto mobile-l:mr-6 tablet:hidden"
        href="tel:+375297827334"
      >
        +375297827334
      </a>

      <nav class="font-primary text-2xl font-normal text-navigate relative">
        <div class="laptop:hidden" @click="toggleMenu">
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
          class="fixed laptop:static flex flex-col laptop:flex-row items-center w-full bg-cultured/90 laptop:bg-cultured/0 z-20 list-none transition-all duration-300 overflow-x-hidden [&>a]:my-6 laptop:[&>a]:my-0 gap-3 laptop-xl:gap-12 [&>a]:transition-[text-shadow] [&>a]:duration-[0.1s]"
          :class="[!isPressed ? 'left-full' : 'left-0']"
        >
          <a
              class="hidden text-xl active:text-secondary laptop:block laptop:active:text-primary laptop:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]"
              href="tel:+375297827334"
            >
            +375297827334
          </a>
          <NuxtLink
            @click="toggleMenu"
            class="active:text-secondary laptop:active:text-primary laptop:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]"
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
            class="active:text-secondary laptop:active:text-primary laptop:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]"
            :class="{
              underline: location === '/about',
              'decoration-secondary': location === '/about'
            }"
            to="/about"
          >
            О нас
          </NuxtLink>
          <NuxtLink
            v-if="!isMobile"
            @click="toggleMenu"
            @mouseenter="showLinks"
            @mouseleave="hideLinks"
            id="services"
            class="active:text-secondary laptop:active:text-primary laptop:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]"
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
          <div v-else class="h-8 my-6 overflow-hidden height-transition" :class="{ '!h-[132px]': isOpened }">
            <p @click="toggleDropDown" class="text-center cursor-pointer">Услуги</p>
            <Transition name="fade">
              <div class="mt-1 overflow-hidden">
                <AppearingLinks @toggle-menu="toggleMenu" />
              </div>
            </Transition>
          </div>
          <NuxtLink
            @click="toggleMenu"
            class="active:text-secondary laptop:active:text-primary laptop:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]"
            :class="{
              underline: location === '/blog',
              'decoration-secondary': location === '/blog'
            }"
            to="/blog"
          >
            Блог
          </NuxtLink>
          <NuxtLink
            @click="toggleMenu"
            class="active:text-secondary laptop:active:text-primary laptop:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]"
            :class="{
              underline: location === '/prices',
              'decoration-secondary': location === '/prices'
            }"
            to="/prices"
          >
            Цены
          </NuxtLink>
          <NuxtLink
            @click="toggleMenu"
            class="active:text-secondary laptop:active:text-primary laptop:active:[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]"
            :class="{
              underline: location === '/contacts',
              'decoration-secondary': location === '/contacts'
            }"
            to="/contacts"
          >
            Контакты
          </NuxtLink>
          <Transition name="fade">
            <div
              v-if="isHovered && !isMobile"
              @mouseenter="showLinks"
              @mouseleave="hideLinks"
              id="links"
              class="absolute top-8 right-0 pt-[10px]"
            >
              <AppearingLinks @toggle-menu="toggleMenu" />
            </div>
          </Transition>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue';

const route = useRoute();
const router = useRouter();
const location = computed(() => route.path);

const isPressed = ref(false);
const isHovered = ref(false);
const isOpened = ref(false);

const isMobile = computed(() => {
  if (process.client) {
    return window.innerWidth < 1024;
  }
});

const toggleMenu = () => {
  isPressed.value = !isPressed.value;
  isOpened.value = false;
};
const closeMenu = () => {
  isPressed.value = false;
};
const showLinks = () => {
  isHovered.value = true;
};
const hideLinks = (event) => {
  if (!event.toElement.id) {
    isHovered.value = false;
  }
};
const toggleDropDown = () => 
{
  if (isOpened.value) {
    router.push("/services");
    isPressed.value = false;
  }
  isOpened.value = !isOpened.value;
}

onMounted(() => {
  window.addEventListener('scroll', closeMenu);
});
onUnmounted(() => {
  window.removeEventListener('scroll', closeMenu);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.height-transition {
  transition: height 0.2s linear;
}
</style>