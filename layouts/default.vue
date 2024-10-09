<template>
  <div class="flex flex-col min-h-screen items-center justify-between">
    <templateHeader />
    <slot />
    <!-- <Footer /> -->
  </div>
</template>
<script setup>
const route = useRoute();
const location = computed(() => route.path);
</script>
