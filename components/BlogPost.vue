<template>
  <NuxtLink
    class="flex h-full flex-col bg-surface-cream rounded-card overflow-hidden transition-shadow hover:shadow-md"
    :to="{ name: 'blog-id', params: { id } }"
  >
    <img
      class="w-full h-[198px] desktop:h-[220px] shrink-0 object-cover"
      :src="img?.url"
      :alt="img?.alt || title"
    />
    <div class="flex flex-col gap-3 px-5 py-4 desktop:p-6">
      <div class="flex items-center gap-1.5">
        <span
          class="flex items-center justify-center w-6 h-6 shrink-0 rounded-full bg-bg-main text-sm leading-none"
          aria-hidden="true"
        >📆</span>
        <span
          class="text-sm font-bold leading-[1.4] uppercase tracking-[0.03em] text-content-light"
        >{{ formattedDate }}</span>
      </div>
      <p
        class="text-base font-bold leading-[1.3] text-content-blog desktop:text-2xl desktop:leading-[1.3]"
      >
        {{ title }}
      </p>
      <prismic-rich-text
        class="text-sm leading-[1.4] text-content-muted desktop:text-lg desktop:leading-[1.4] desktop:tracking-[0.01em] description"
        :field="content"
      />
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
