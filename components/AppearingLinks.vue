<template>
  <ul>
    <li>
      <NuxtLink
        @click="closeLinks"
        class="w-fit"
        to="/services/transportation"
      >
        Международные автомобильные грузоперевозки
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        @click="closeLinks"
        class="w-fit"
        to="/services/freight-forwarding"
      >
        Экспедирование грузов
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        @click="closeLinks"
        class="w-fit"
        to="/services/software-development"
      >
        Разработка ПО для транспортных компаний
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const emit = defineEmits(['toggle-menu']);

const closeLinks = () => emit("toggle-menu");
</script>