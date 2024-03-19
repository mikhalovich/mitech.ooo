<template>
  <div class="max-w-container w-full h-full px-4 mx-auto mt-20 text-primary">
    <div v-if="isLoading" class="loader"></div>
    <div v-else>
      <h1 class="text-4xlg font-medium mb-2">Блог</h1>
      <h2 class="text-3xl font-medium mb-6">{{ post.title }}</h2>
      <div>
        <img
          class="tablet:w-[60%] border border-primary rounded float-left tablet:mr-14 mb-4 tablet:mb-0"
          :src="post.img?.url"
          :alt="post.img?.alt"
        />
        <p class="opacity-80 mb-6">{{ post.date }}</p>
        <prismic-rich-text class="mb-20 o-80 flex flex-col gap-3 indent-4" :field="post.content"></prismic-rich-text>
      </div>
      <div class="w-full h-full grid items-center grid-cols-2 gap-4 pt-20 mb-16">
        <AnotherPostCard
          v-if="prevPost"
          :is-next="false"
          :id="prevPost.uid"
          :img="prevPost.data?.img"
          :title="prevPost.data?.title"
          :date="prevPost.data?.date"
        />
        <AnotherPostCard
          v-if="nextPost"
          :is-next="true"
          :id="nextPost.uid"
          :img="nextPost.data?.img"
          :title="nextPost.data?.title"
          :date="nextPost.data?.date"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { client } = usePrismic();

const post = ref({});
const prevPost = ref(null);
const nextPost = ref(null);
const isLoading = ref(true);

onBeforeMount(async () => {
  const postResult = await client.getByUID('post', route.params.id);
  post.value = postResult.data;
  try {
    const prevPostResult = await client.getSingle('post', { after: `${postResult.id}`, orderings: 'my.post.date' });
    prevPost.value = prevPostResult;
  } catch (error) {
    throw error;
  }
  try {
    const nextPostResult = await client.getSingle('post', { after: `${postResult.id}` });
    nextPost.value = nextPostResult;
  } catch (error) {
    throw error;
  }
  isLoading.value = false;
})
</script>

<style>

</style>