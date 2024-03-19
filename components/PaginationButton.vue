<template>
  <img
    class="w-6 cursor-pointer"
    :class="{ 'rotate-180': prev }"
    src="@/assets/svg/arrow.svg"
    alt="pagination-arrow"
  />
</template>

<script setup>
defineProps({
  prev: Boolean,
  disabled: Boolean
});
</script>