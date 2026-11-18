<template>
  <div class="flex min-h-screen flex-col items-center justify-between bg-bg-main font-primary text-content-main">
    <Header />
    <slot />
    <Footer />
  </div>
</template>
<script setup>
const route = useRoute();
const location = computed(() => route.path);
</script>
