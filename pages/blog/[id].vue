<template>
  <div class="w-full font-primary text-content-main">
    <article v-if="post" class="max-w-container w-full mx-auto tablet:px-8 desktop:px-4">
      <!-- Hero: обложка + хлебные крошки + заголовок + описание + дата -->
      <header
        class="relative isolate overflow-hidden rounded-b-card-lg flex flex-col justify-center p-5 tablet:px-8 tablet:py-10 desktop:py-10 desktop:pl-20 desktop:pr-60 text-bg-main"
      >
        <img
          v-if="post.img?.url"
          class="absolute inset-0 -z-20 w-full h-full object-cover bg-content-main"
          :src="post.img.url"
          :alt="post.img.alt || post.title"
          fetchpriority="high"
        />
        <div
          class="absolute inset-0 -z-10 bg-gradient-to-l from-transparent to-black/70 desktop:to-black/50"
          aria-hidden="true"
        ></div>

        <div class="flex flex-col gap-[52px] desktop:max-w-[697px]">
          <div class="flex flex-col gap-8">
            <nav aria-label="breadcrumb">
              <ol
                class="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-[1.4] tracking-[0.01em] desktop:text-base"
              >
                <li
                  v-for="(crumb, i) in crumbs"
                  :key="crumb.label"
                  class="flex items-center gap-1"
                  :aria-current="i === crumbs.length - 1 ? 'page' : undefined"
                >
                  <NuxtLink v-if="crumb.to" :to="crumb.to" class="hover:underline">{{
                    crumb.label
                  }}</NuxtLink>
                  <span v-else>{{ crumb.label }}</span>
                  <svg
                    v-if="i < crumbs.length - 1"
                    class="w-4 h-4 shrink-0 opacity-50"
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
                </li>
              </ol>
            </nav>

            <div class="flex flex-col gap-3">
              <h1
                class="text-xl leading-[1.1] tablet:text-[32px] desktop:text-[40px] font-bold"
              >
                {{ post.title }}
              </h1>
              <p
                v-if="lead"
                class="text-sm leading-[1.4] tracking-[0.01em] text-bg-main/85 tablet:text-base desktop:text-lg line-clamp-3 tablet:line-clamp-2"
              >
                {{ lead }}
              </p>
            </div>
          </div>

          <time
            v-if="formattedDate"
            :datetime="post.date"
            class="text-sm font-bold leading-[1.4] uppercase tracking-[0.03em] text-bg-main/85"
          >
            {{ formattedDate }}
          </time>
        </div>
      </header>

      <!-- Контент статьи -->
      <section class="px-5 pt-5 pb-10 tablet:px-8 tablet:py-5 desktop:px-20 desktop:py-10">
        <div
          class="bg-surface-cream/50 rounded-card px-5 py-4 tablet:px-10 tablet:py-8 desktop:px-[52px] desktop:py-10"
        >
          <PrismicRichText :field="post.content" class="article-content" />
        </div>
      </section>

      <!-- Читайте также -->
      <section
        v-if="prevPost || nextPost"
        class="px-5 pb-10 tablet:px-0 tablet:pt-5 tablet:pb-10 desktop:pt-4 desktop:pb-14"
      >
        <h2
          class="text-xl leading-[1.1] tablet:text-2xl desktop:text-[32px] font-bold text-content-blog mb-5 tablet:mb-6"
        >
          Читайте также
        </h2>
        <!-- Предыдущая / следующая новость -->
        <nav
          class="grid grid-cols-1 tablet:grid-cols-2 gap-4 tablet:gap-8"
          aria-label="Навигация по новостям"
        >
          <template
            v-for="item in [
              { p: prevPost, next: false },
              { p: nextPost, next: true },
            ]"
            :key="item.next"
          >
            <div v-if="item.p" class="flex flex-col gap-3">
              <!-- Мобильная версия: компактная карточка -->
              <NuxtLink
                :to="{ name: 'blog-id', params: { id: item.p.uid } }"
                class="tablet:hidden flex items-center gap-4 bg-surface-cream rounded-card p-3 transition-shadow hover:shadow-md"
                :class="item.next ? 'flex-row-reverse text-right' : ''"
              >
                <img
                  v-if="item.p.data?.img?.url"
                  class="w-24 h-24 shrink-0 rounded-input object-cover"
                  :src="item.p.data.img.url"
                  :alt="item.p.data.img.alt || item.p.data.title"
                  loading="lazy"
                />
                <div class="flex flex-col gap-1 min-w-0">
                  <span
                    class="flex items-center gap-1 text-sm font-semibold text-content-muted"
                    :class="item.next ? 'flex-row-reverse' : ''"
                  >
                    <svg
                      class="w-4 h-4 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        :d="
                          item.next
                            ? 'M5 12h14m-6-6 6 6-6 6'
                            : 'M19 12H5m6-6-6 6 6 6'
                        "
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {{ item.next ? "Следующая" : "Предыдущая" }}
                  </span>
                  <span class="text-sm text-content-light">{{
                    shortDate(item.p.data?.date)
                  }}</span>
                  <span
                    class="text-base font-bold text-content-blog line-clamp-3"
                    >{{ item.p.data?.title }}</span
                  >
                </div>
              </NuxtLink>
              <NuxtLink
                v-if="item.p"
                :to="{ name: 'blog-id', params: { id: item.p.uid } }"
                class="group relative isolate hidden tablet:flex items-center justify-center h-64 tablet:h-72 overflow-hidden rounded-card text-center text-white px-6"
              >
                <img
                  v-if="item.p.data?.img?.url"
                  class="absolute inset-0 -z-20 w-full h-full object-cover transition-transform group-hover:scale-105"
                  :src="item.p.data.img.url"
                  :alt="item.p.data.img.alt || item.p.data.title"
                  loading="lazy"
                />
                <div class="absolute inset-0 -z-10 bg-content-main/60"></div>
                <div class="flex flex-col gap-2">
                  <span class="text-sm">{{
                    shortDate(item.p.data?.date)
                  }}</span>
                  <span class="text-xl font-bold">{{
                    item.p.data?.title
                  }}</span>
                </div>
              </NuxtLink>
              <NuxtLink
                v-if="item.p"
                :to="{ name: 'blog-id', params: { id: item.p.uid } }"
                class="group hidden tablet:inline-flex items-center gap-2 self-start bg-bg-main border border-border rounded-input px-5 py-2.5 text-lg font-semibold text-content-main transition-colors hover:bg-primary hover:border-primary"
                :class="item.next ? 'flex-row-reverse self-end' : ''"
              >
                <svg
                  class="w-5 h-5 shrink-0 transition-transform"
                  :class="
                    item.next
                      ? 'group-hover:translate-x-0.5'
                      : 'group-hover:-translate-x-0.5'
                  "
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    :d="
                      item.next
                        ? 'M5 12h14m-6-6 6 6-6 6'
                        : 'M19 12H5m6-6-6 6 6 6'
                    "
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>{{
                  item.next ? "Следующая новость" : "Предыдущая новость"
                }}</span>
              </NuxtLink>
            </div>
          </template>
        </nav>
      </section>
    </article>
  </div>
</template>

<script setup>
const route = useRoute();
const { client, asText } = usePrismic();

// Документ из Prismic; при отсутствии — 404
const { data: page } = await useAsyncData(
  `post-${route.params.id}`,
  async () => {
    try {
      return await client.getByUID("post", route.params.id);
    } catch (error) {
      return null;
    }
  },
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Статья не найдена",
    fatal: true,
  });
}

// Похожие статьи (две другие публикации)
const { data: relatedPosts } = await useAsyncData(
  `post-related-${route.params.id}`,
  async () => {
    try {
      const res = await client.getByType("post", {
        pageSize: 3,
        orderings: { field: "my.post.date", direction: "desc" },
      });
      return res.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
);

// Предыдущая / следующая новости (логика как в старой версии сайта)
const { data: neighbours } = await useAsyncData(
  `post-neighbours-${route.params.id}`,
  async () => {
    const load = async (params) => {
      try {
        const res = await client.getByType("post", {
          pageSize: 1,
          after: page.value.id,
          ...params,
        });
        return res.results[0] || null;
      } catch (error) {
        console.error(error);
        return null;
      }
    };
    const [prev, next] = await Promise.all([
      load({ orderings: "my.post.date" }),
      load({}),
    ]);
    return { prev, next };
  },
);

const prevPost = computed(() => neighbours.value?.prev);
const nextPost = computed(() => neighbours.value?.next);

const post = computed(() => page.value?.data);
const related = computed(() =>
  (relatedPosts.value || [])
    .filter(
      (p) =>
        p.uid !== route.params.id &&
        p.uid !== prevPost.value?.uid &&
        p.uid !== nextPost.value?.uid,
    )
    .slice(0, 2),
);

const shortDate = (raw) => {
  const parsed = new Date(raw);
  if (!raw || Number.isNaN(parsed.getTime())) return raw || "";
  return parsed.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const lead = computed(() => {
  const text = post.value?.content?.length ? asText(post.value.content) : "";
  return text.length > 160 ? `${text.slice(0, 160).trim()}…` : text;
});

const formattedDate = computed(() => {
  const raw = post.value?.date;
  const parsed = new Date(raw);
  if (!raw || Number.isNaN(parsed.getTime())) return raw || "";
  return parsed.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
});

const crumbs = computed(() => [
  { label: "Главная", to: "/" },
  { label: "Блог", to: "/blog" },
  { label: "Статья" },
  { label: post.value?.title },
]);

// Динамические SEO-метатеги
useHead(() => {
  const title = post.value?.title
    ? `${post.value.title} | MiTech`
    : "Блог | MiTech";
  const description = lead.value || post.value?.title || "";
  const image = post.value?.img?.url;
  return {
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      ...(image ? [{ property: "og:image", content: image }] : []),
      ...(post.value?.date
        ? [{ property: "article:published_time", content: post.value.date }]
        : []),
    ],
  };
});
</script>

<style scoped>
.article-content {
  @apply text-sm leading-[1.4] text-content-main;
}
.article-content :deep(> * + *) {
  @apply mt-4;
}
.article-content :deep(h2) {
  @apply text-base tablet:text-lg desktop:text-xl font-bold leading-[1.3] tracking-[0.01em] text-content-main mt-6;
}
.article-content :deep(h2 + *) {
  @apply mt-5;
}
.article-content :deep(h3) {
  @apply text-sm tablet:text-base desktop:text-lg font-bold leading-[1.3] tracking-[0.01em] text-content-main mt-5;
}
.article-content :deep(h3 + *) {
  @apply mt-3;
}
.article-content :deep(> :first-child) {
  @apply mt-0;
}
.article-content :deep(p) {
  @apply text-sm leading-[1.4];
}
.article-content :deep(strong) {
  @apply font-bold;
}
.article-content :deep(a) {
  @apply text-accent-blue underline hover:text-accent-blue-hover;
}
.article-content :deep(ul) {
  @apply list-disc pl-5 flex flex-col gap-2 text-sm leading-[1.4];
}
.article-content :deep(ol) {
  @apply list-decimal pl-5 flex flex-col gap-2 text-sm leading-[1.4];
}
.article-content :deep(blockquote) {
  @apply border-l-4 border-primary pl-4 italic text-content-muted text-sm leading-[1.4];
}
.article-content :deep(img) {
  @apply w-full h-auto rounded-card my-6;
}
.article-content :deep(.block-img) {
  @apply my-6;
}
</style>
