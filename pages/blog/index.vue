<template>
  <div class="max-w-container w-full mx-auto px-5 tablet:px-8 desktop:px-4 font-primary">
    <div v-if="isLoading" class="loader"></div>
    <div v-else class="flex flex-col gap-5 desktop:gap-9 py-5 tablet:py-10">
      <div class="flex flex-col gap-3 tablet:gap-4">
        <nav aria-label="breadcrumb">
          <ol
            class="flex items-center gap-2 text-sm leading-[1.4] tracking-[0.01em] text-content-muted desktop:text-base"
          >
            <li class="flex items-center gap-1">
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
            </li>
            <li aria-current="page">Блог</li>
          </ol>
        </nav>

        <div class="flex flex-col gap-3">
          <h1
            class="text-xl font-bold leading-tight text-content-blog tablet:text-[32px] tablet:leading-[1.1] tablet:text-content-main desktop:text-[40px]"
          >
            Блог
          </h1>
          <div
            class="flex flex-col gap-3 tablet:flex-row tablet:items-center tablet:justify-between tablet:gap-16 desktop:gap-3"
          >
            <p
              class="text-base leading-[1.2] text-content-muted tablet:max-w-[528px] tablet:leading-[1.4] desktop:max-w-[645px] desktop:text-lg"
            >
              Логистические услуги позволяют сократить время доставки грузов и
              минимизировать риски потерь и повреждений.
            </p>
            <div
              v-if="isPost"
              class="hidden shrink-0 tablet:flex flex-col items-end gap-0.5 text-sm font-bold leading-[1.4] desktop:text-base"
            >
              <span class="text-content-muted">Всего в блоге:</span>
              <span class="text-content-blog">{{ totalLabel }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-5 desktop:flex-row desktop:gap-8">
        <!-- Категории (по системным тегам Prismic) — только если теги есть -->
        <template v-if="hasTags">
          <aside class="desktop:w-[260px] shrink-0">
            <div ref="dropdownRef" class="relative desktop:hidden">
              <button
                ref="dropdownTriggerRef"
                type="button"
                class="w-full h-12 flex items-center justify-between gap-2 bg-surface-blue rounded-input py-3 pl-4 pr-3 text-left text-base font-bold leading-5 tracking-[0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                :class="activeTag ? 'text-content-blog' : 'text-content-muted'"
                aria-haspopup="listbox"
                :aria-expanded="isDropdownOpen"
                aria-controls="blog-category-listbox"
                @click="toggleDropdown"
                @keydown.escape="closeDropdown(true)"
              >
                <span class="truncate">{{ activeTag || "Все категории" }}</span>
                <svg
                  class="w-6 h-6 shrink-0 text-content-muted transition-transform duration-200"
                  :class="{ 'rotate-180': isDropdownOpen }"
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
              </button>

              <Transition
                enter-active-class="transition duration-150 ease-out"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <ul
                  v-if="isDropdownOpen"
                  id="blog-category-listbox"
                  role="listbox"
                  aria-label="Категории блога"
                  class="absolute inset-x-0 top-full z-20 mt-2 max-h-64 overflow-y-auto rounded-card border border-border-light bg-bg-main p-1.5 shadow-lg flex flex-col gap-0.5"
                  @keydown.escape="closeDropdown(true)"
                >
                  <li
                    v-for="tag in ['', ...tags]"
                    :key="tag"
                    role="option"
                    :aria-selected="activeTag === tag"
                  >
                    <button
                      type="button"
                      class="w-full flex items-center justify-between gap-3 rounded-input px-3 py-2.5 text-left text-base font-bold leading-[1.4] transition-colors"
                      :class="
                        activeTag === tag
                          ? 'bg-surface-blue text-content-main'
                          : 'text-content-blog hover:bg-surface-blue/60'
                      "
                      @click="selectTag(tag)"
                    >
                      <span class="truncate">{{ tag || "Все категории" }}</span>
                      <svg
                        v-if="activeTag === tag"
                        class="w-5 h-5 shrink-0 text-amber"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="m4.5 10.5 3.5 3.5 7.5-8"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </Transition>
            </div>
            <ul class="hidden desktop:flex flex-col">
              <li v-for="tag in ['', ...tags]" :key="tag">
                <button
                  type="button"
                  class="w-full flex items-center justify-between gap-3 rounded-xl px-2 py-3 text-left text-base font-bold leading-[1.4] text-content-blog hover:bg-surface-blue"
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
            class="grid grid-cols-1 gap-5 tablet:grid-cols-2 tablet:gap-4 desktop:gap-x-8 desktop:gap-y-4"
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
          <div
            v-else
            class="flex flex-col items-center justify-center gap-4 py-16 text-center tablet:gap-5 tablet:py-5 desktop:gap-4 desktop:py-16"
          >
            <h2
              class="max-w-[316px] text-sm font-normal leading-[1.4] text-content-muted"
            >
              К сожалению, новостей сейчас нет, но они скоро появятся
            </h2>
          </div>

          <div v-if="hasMore" class="flex justify-center mt-5 desktop:mt-10">
            <button
              type="button"
              class="bg-bg-main border border-border rounded-input px-3 py-2.5 text-sm leading-[1.4] tracking-[0.01em] text-content-main hover:bg-bg-subtle tablet:tracking-normal desktop:px-5 desktop:text-lg"
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
const isDropdownOpen = ref(false);
const dropdownRef = ref(null);
const dropdownTriggerRef = ref(null);

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function closeDropdown(returnFocus = false) {
  isDropdownOpen.value = false;
  if (returnFocus) {
    dropdownTriggerRef.value?.focus();
  }
}

function selectTag(tag) {
  activeTag.value = tag;
  closeDropdown(true);
}

function handleOutsideClick(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick);
});

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
