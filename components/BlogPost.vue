<template>
  <NuxtLink
    class="flex flex-col bg-surface-cream rounded-card overflow-hidden transition-shadow hover:shadow-md"
    :to="{ name: 'blog-id', params: { id } }"
  >
    <img
      class="w-full h-56 object-cover"
      :src="img?.url"
      :alt="img?.alt || title"
    />
    <div class="flex flex-col gap-3 p-6">
      <div class="flex items-center gap-1.5">
        <span class="flex items-center justify-center w-6 h-6 rounded-full bg-bg-main text-sm" aria-hidden="true">📆</span>
        <span class="text-sm font-semibold uppercase tracking-wider text-content-light">{{ formattedDate }}</span>
      </div>
      <p class="text-2xl font-bold text-content-blog">{{ title }}</p>
      <prismic-rich-text class="text-lg text-content-muted description" :field="content" />
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
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

const formattedDate = computed(() => {
  const parsed = new Date(props.date);
  if (!props.date || Number.isNaN(parsed.getTime())) return props.date;
  return parsed.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
});
</script>

<style scoped>
.description {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
}
</style>
