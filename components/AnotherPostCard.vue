<template>
  <div class="another-post text-white" :class="{'col-start-2 col-end-3': isNext}">
    <div class="relative">
      <img
        v-if="img"
        class="w-full h-[314px] border border-primary rounded object-cover"
        :src="img.url"
        :alt="img.alternativeText"
      />
      <div class="absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] z-[2]">
        <p class="text-center text-sm tablet:text-base w-full">{{ date }}</p>
        <p class="w-full tablet:w-60% tablet:text-2xl font-bold text-center">{{ title }}</p>
      </div>
      <div class="w-full h-full bg-black opacity-40 rounded absolute top-0 z-[1]"></div>
    </div>
    <div v-if="!isNext" class="w-fit flex items-center gap-2 mt-8">
      <NuxtLink :to="{ name: 'blog-id', params: { id } }">
        <PaginationButton
          class="w-9 h-9"
          :disabled="false"
          :prev="!isNext"
        >
        </PaginationButton>
      </NuxtLink>
      <div class="flex flex-col text-primary">
        <p v-if="isNext" class="tablet:text-2xl font-light">СЛЕДУЮЩАЯ</p>
        <p v-else class="tablet:text-2xl font-light">ПРЕДЫДУЩАЯ</p>
        <p class="tablet:text-2xl fontextrabold">НОВОСТЬ</p>
      </div>
    </div>
    <div
      v-else
      class="w-fit flex items-center gap-2 mt-8"
      :class="{ 'ml-auto text-right': isNext }"
    >
      <div class="flex flex-col text-primary">
        <p v-if="isNext" class="tablet:text-2xl font-light">СЛЕДУЮЩАЯ</p>
        <p v-else class="tablet:text-2xl font-light">ПРЕДЫДУЩАЯ</p>
        <p class="tablet:text-2xl fontextrabold">НОВОСТЬ</p>
      </div>
      <NuxtLink :to="{ name: 'blog-id', params: { id } }">
        <PaginationButton
          class="w-9 h-9"
          :disabled="false"
          :prev="!isNext"
        >
        </PaginationButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isNext: Boolean,
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
    default: ''
  },
  content: {
    type: Object,
    default() {
      return {}
    }
  },
  date: {
    type: String,
    default: ''
  }
});
</script>