<template>
  <div class="max-w-container w-full px-4 mx-auto mt-20">
    <div v-if="isLoading" class="loader"></div>
    <div v-else>
      <div v-if="isPost" class="text-primary mb-20">
        <h1 class="text-4xlg font-medium mb-6">Блог</h1>
        <div
          class="w-full grid grid-cols-2 gap-14 mb-24 hidden tablet:grid"
        >
          <div class="relative h-0 pb-[70%]">
            <img
              class="w-[60%] h-full absolute top-0 left-0 border border-white roundex-2xl object-cover"
              :src="posts[0].data.img.url"
              :alt="posts[0].data.img.alt"
            />
          </div>
          <div class="flex flex-col">
            <p class="opacity-80 mb-4">{{ posts[0].data.date }}</p>
            <p class="text-5xl font-semibold mb-4">{{ posts[0].data.title }}</p>
            <prismic-rich-text class="text-2xl font-light opacity-80 description" :field="posts[0].data.content" />
            <NuxtLink
              class="w-fit ml-auto mt-3"
              :to="{ name: 'blog-id', params: { id: posts[0].uid } }"
            >
              <img
                class="w-20"
                src="@/assets/svg/arrow.svg"
                alt="pagination-arrow"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="grid grid-cols-2 laptop:grid-cols-3 gap-x-4 gap-y-24 mb-18">
          <BlogPost
            class="news__posts-item tablet:hidden"
            :id="posts[0].uid"
            :img="posts[0].data.img"
            :date="posts[0].data.date"
            :title="posts[0].data.title"
            :content="posts[0].data.content"
          />
          <BlogPost
            v-for="post, index in posts.splice(1, 7)"
            :key="index"
            class="news__posts-item"
            :id="post.uid"
            :img="post.data.img"
            :date="post.data.date"
            :title="post.data.title"
            :content="post.data.content"
          />
        </div>
      </div>
      <h2 v-else class="text-4xlg text-center text-primary">К сожалению, новостей сейчас нет, но они скоро появятся</h2>
      <Pagination
        :page-count="totalPages"
        :current-page="currentPage"
        @page-clicked="loadMore"
      />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const { client } = usePrismic();

const posts = ref([]);
const isPost = ref(false);
const currentPage = ref(route.query.page || 1);
const totalPages = ref(1);
const isLoading = ref(true);

onBeforeMount(async () => {
  const data = await client.getAllByType('post');

  posts.value = data;
  isPost.value = posts.value.length;
  totalPages.value = Math.ceil(data.length / 7);
  isLoading.value = false;
});

async function loadMore(page) {
  const { data } = await client.getAllByType('post', { pageSize: 7, page });
  posts.value = data.value;
  currentPage.value = page;
  router.push({ query: { page: currentPage.value } });
}
</script>

<style>
.description {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 4;
}
</style>