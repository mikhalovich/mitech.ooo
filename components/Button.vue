<template>
  <NuxtLink :to="route" class="flex items-baseline gap-5 text-base font-secondary text-[#177531] px-6 py-[14px] bg-[#C7E7D0] rounded-[33px]">
    {{ label }}
    <img src="~/assets/svg/arrow-button.svg" alt="arrow" class="w-2 h-2">
  </NuxtLink>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: false,
  }
});
</script>