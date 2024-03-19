<template>
  <div class="relative" @click="handleClickCard">
    <img
      class="border border-primary rounded mb-9 transition-all object-cover"
      :src="img.url"
      :alt="img.alt"
    />
    <div>
      <p class="mb-2 opacity-80">{{ date }}</p>
      <p class="text-2xl font-semibold mb-1">{{ title }}</p>
      <prismic-rich-text class="opacity-80 pr-16 description" :field="content" />
    </div>
    <NuxtLink class="absolute right-0 bottom-0" :to="{ name: 'blog-id', params: { id } }">
      <img
        class="w-14"
        src="@/assets/svg/arrow.svg"
        alt="pagination-arrow"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  img: {
    type: Object,
    default() {
      return {}
    }
  },
  title: {
    type: String,
    default: ""
  },
  content: {
    type: Object,
    default() {
      return {}
    }
  },
  date: {
    type: String,
    default: ""
  }
});
</script>