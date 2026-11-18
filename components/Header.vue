<template>
  <header class="relative z-30 w-full bg-bg-main shadow-sm">
    <div class="mx-auto flex h-16 w-full max-w-container items-center justify-between px-5 laptop:h-auto laptop:py-3 laptop:px-0">
      <!-- Логотип + (мобильный) телефон -->
      <div class="flex items-center gap-3 laptop:gap-12">
        <NuxtLink class="font-logo text-3xl text-content-main laptop:text-4xl" to="/">
          MITech
        </NuxtLink>

        <a
          class="flex h-10 w-10 items-center justify-center rounded-input bg-yellow-soft laptop:hidden"
          href="tel:+375297827334"
          aria-label="Позвонить"
        >
          <img src="../assets/svg/app-header/phone.svg" alt="" class="h-6 w-6" />
        </a>

        <!-- Навигация -->
        <nav class="hidden laptop:flex laptop:items-center laptop:gap-7 font-primary text-base font-bold text-content-muted">
          <NuxtLink
            class="hover:text-content-main"
            :class="{ '!text-content-main': location === '/' }"
            to="/"
          >
            О компании
          </NuxtLink>
          <NuxtLink
            class="hover:text-content-main"
            :class="{ '!text-content-main': location === '/blog' }"
            to="/blog"
          >
            Блог
          </NuxtLink>
          <div class="relative">
            <NuxtLink
              id="services"
              class="flex items-center gap-[5px] hover:text-content-main"
              :class="{ '!text-content-main': isServicesPage }"
              to="/services"
              @mouseenter="showLinks"
              @mouseleave="hideLinks"
            >
              Услуги
              <img src="../assets/svg/app-header/chevron.svg" alt="" class="-rotate-90" />
            </NuxtLink>
            <Transition name="fade">
              <div
                v-if="isHovered && !isMobile"
                id="links"
                class="absolute left-0 top-full z-30 pt-3"
                @mouseenter="showLinks"
                @mouseleave="hideLinks"
              >
                <div class="w-max rounded-card bg-bg-main px-6 py-4 font-primary text-base font-medium text-content-muted shadow-md [&_a:hover]:text-content-main [&_li]:py-1">
                  <AppearingLinks @toggle-menu="toggleMenu" />
                </div>
              </div>
            </Transition>
          </div>
          <NuxtLink
            class="hover:text-content-main"
            :class="{ '!text-content-main': location === '/prices' }"
            to="/prices"
          >
            Цены
          </NuxtLink>
          <NuxtLink
            class="hover:text-content-main"
            :class="{ '!text-content-main': location === '/contacts' }"
            to="/contacts"
          >
            Контакты
          </NuxtLink>
        </nav>
      </div>

      <!-- Телефон + кнопка (десктоп) -->
      <div class="hidden items-center gap-8 laptop:flex">
        <a class="font-primary text-base font-normal text-black" href="tel:+375297827334">
          +375297827334
        </a>
        <NuxtLink
          class="rounded-input bg-yellow-soft px-4 py-2 font-primary text-base font-bold text-black hover:bg-primary-hover"
          to="/contacts"
        >
          Заказать звонок
        </NuxtLink>
      </div>

      <!-- Бургер (мобильный) -->
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-input bg-bg-main shadow-md laptop:hidden"
        aria-label="Меню"
        @click="toggleMenu"
      >
        <img src="../assets/svg/app-header/menu.svg" alt="" />
      </button>
    </div>

    <!-- Мобильное меню -->
    <div
      class="fixed inset-x-0 bottom-0 top-16 z-20 bg-black/45 transition-opacity duration-300 laptop:hidden"
      :class="isPressed ? 'opacity-100' : 'pointer-events-none opacity-0'"
      @click.self="closeMenu"
    >
      <nav
        class="h-full w-[342px] max-w-full overflow-y-auto bg-bg-main px-8 pt-10 font-primary text-base font-bold text-content-muted transition-transform duration-300"
        :class="isPressed ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="flex flex-col gap-5">
          <NuxtLink
            class="border-b border-border pb-2"
            :class="{ 'text-content-main': location === '/' }"
            to="/"
            @click="toggleMenu"
          >
            Главная страница
          </NuxtLink>
          <NuxtLink
            class="border-b border-border pb-2"
            :class="{ 'text-content-main': location === '/blog' }"
            to="/blog"
            @click="toggleMenu"
          >
            Блог
          </NuxtLink>

          <div class="overflow-hidden transition-[height] duration-200 ease-linear" :class="isOpened ? 'h-48' : 'h-8'">
            <div class="flex cursor-pointer items-center gap-[5px] border-b border-border pb-2" @click="toggleDropDown">
              <span :class="{ 'text-content-main': isServicesPage }">Услуги</span>
              <img src="../assets/svg/app-header/chevron.svg" alt="" class="rotate-90" />
            </div>
            <div class="mt-2 pl-3 font-medium [&_a]:block [&_a]:border-b [&_a]:border-border-light [&_a]:pb-2 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-[10px]">
              <AppearingLinks @toggle-menu="toggleMenu" />
            </div>
          </div>

          <NuxtLink
            class="border-b border-border pb-2"
            :class="{ 'text-content-main': location === '/prices' }"
            to="/prices"
            @click="toggleMenu"
          >
            Цены
          </NuxtLink>
          <NuxtLink
            class="border-b border-border pb-2"
            :class="{ 'text-content-main': location === '/contacts' }"
            to="/contacts"
            @click="toggleMenu"
          >
            Контакты
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue';

const route = useRoute();
const router = useRouter();
const location = computed(() => route.path);
const isServicesPage = computed(() => location.value.startsWith('/services'));

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
  const target = event.relatedTarget || event.toElement;
  if (!target || !target.id) {
    isHovered.value = false;
  }
};
const toggleDropDown = () => {
  if (isOpened.value) {
    router.push('/services');
    isPressed.value = false;
  }
  isOpened.value = !isOpened.value;
};

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
</style>
