<template>
  <div class="max-w-container w-full px-4 mx-auto font-primary">
    <div v-if="isLoading" class="loader"></div>
    <div v-else class="flex flex-col gap-9 pt-9 mb-20">
      <div class="flex flex-col gap-4">
        <nav
          class="flex items-center gap-1 text-sm text-content-muted"
          aria-label="breadcrumb"
        >
          <NuxtLink to="/" class="hover:text-content-main">Главная</NuxtLink>
          <svg
            class="w-4 h-4 shrink-0"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 3.5 10.5 8 6 12.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Блог</span>
        </nav>

        <div class="flex flex-col gap-3">
          <h1 class="text-4xl font-bold text-content-blog">Блог</h1>
          <div
            class="flex flex-col tablet:flex-row tablet:justify-between gap-3"
          >
            <p class="text-base text-content-muted tablet:max-w-2xl">
              Логистические услуги позволяют сократить время доставки грузов и
              минимизировать риски потерь и повреждений.
            </p>
            <div
              v-if="isPost"
              class="hidden tablet:flex flex-col items-end gap-0.5 font-bold"
            >
              <span class="text-content-muted">Всего в блоге:</span>
              <span class="text-content-blog">{{ totalLabel }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col desktop:flex-row gap-8">
        <!-- Категории (по системным тегам Prismic) — только если теги есть -->
        <template v-if="hasTags">
          <aside class="desktop:w-64 shrink-0">
            <div class="relative desktop:hidden">
              <select
                v-model="activeTag"
                class="w-full appearance-none bg-surface-blue rounded-input py-4 pl-3 pr-10 font-bold text-content-muted"
              >
                <option value="">Все категории</option>
                <option v-for="tag in tags" :key="tag" :value="tag">
                  {{ tag }}
                </option>
              </select>
              <svg
                class="w-6 h-6 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-content-muted"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m6 9 6 6 6-6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <ul class="hidden desktop:flex flex-col gap-1">
              <li v-for="tag in ['', ...tags]" :key="tag">
                <button
                  type="button"
                  class="w-full flex items-center justify-between rounded-card px-3 py-2.5 text-left font-bold text-content-blog hover:bg-surface-blue"
                  :class="{ 'bg-surface-blue': activeTag === tag }"
                  @click="activeTag = tag"
                >
                  {{ tag || "Все категории" }}
                  <svg
                    class="w-6 h-6 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m9 6 6 6-6 6"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </aside>
          <div class="hidden desktop:block border-l border-border-light"></div>
        </template>

        <div class="flex-1 min-w-0">
          <div
            v-if="visiblePosts.length"
            class="grid grid-cols-1 tablet:grid-cols-2 gap-8"
          >
            <BlogPost
              v-for="post in visiblePosts"
              :key="post.uid"
              :id="post.uid"
              :img="post.data.img"
              :date="post.data.date"
              :title="post.data.title"
              :content="post.data.content"
            />
          </div>
          <h2 v-else class="text-4xl text-center text-content-blog">
            К сожалению, новостей сейчас нет, но они скоро появятся
          </h2>

          <div v-if="hasMore" class="flex justify-center mt-8">
            <button
              type="button"
              class="bg-bg-main border border-border rounded-input px-5 py-2.5 text-lg text-content-main hover:bg-bg-subtle"
              @click="loadMore"
            >
              Загрузить больше публикаций
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const PAGE_SIZE = 6;

const { client } = usePrismic();

const posts = ref([]);
const isPost = ref(false);
const isLoading = ref(true);
const activeTag = ref("");
const visibleCount = ref(PAGE_SIZE);

const tags = computed(() => [
  ...new Set(posts.value.flatMap((post) => post.tags || [])),
]);
const hasTags = computed(() => tags.value.length > 0);
const filteredPosts = computed(() =>
  activeTag.value
    ? posts.value.filter((post) => (post.tags || []).includes(activeTag.value))
    : posts.value,
);
const visiblePosts = computed(() =>
  filteredPosts.value.slice(0, visibleCount.value),
);
const hasMore = computed(() => visibleCount.value < filteredPosts.value.length);
const totalLabel = computed(() => {
  const n = posts.value.length;
  const mod10 = n % 10;
  const mod100 = n % 100;
  const word =
    mod10 === 1 && mod100 !== 11
      ? "публикация"
      : mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)
        ? "публикации"
        : "публикаций";
  return `${n} ${word}`;
});

onBeforeMount(async () => {
  const data = await client.getAllByType("post");

  posts.value = data;
  isPost.value = posts.value.length > 0;
  isLoading.value = false;
});

watch(activeTag, () => {
  visibleCount.value = PAGE_SIZE;
});

function loadMore() {
  visibleCount.value += PAGE_SIZE;
}
</script>
