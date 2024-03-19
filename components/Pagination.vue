<template>
  <div
    v-if="pageCount > 1"
    class="w-fit mx-auto flex items-center gap-2 mb-16"
  >
    <PaginationButton
      :prev="true"
      :disabled="currentPage < 2"
      @click="$emit('pageClicked', currentPage - 1)"
    />
    <div
      v-for="page in pageCount"
      :key="page"
      class="w-8 h-8 text-primary cursor-pointer flex items-center justify-center border border-primary rounded-full"
      :class="{'bg-primary text-white': page === currentPage}"
      @click="$emit('pageClicked', page)"
    >
      {{ page }}
    </div>
    <PaginationButton
      :prev="false"
      :disabled="currentPage >= pageCount"
      @click="$emit('pageClicked', currentPage + 1)"
    />
  </div>
</template>

<script setup>
defineProps({
  pageCount: {
    type: Number,
    default: 1
  },
  currentPage: {
    type: Number,
    default: 1
  }
});
</script>