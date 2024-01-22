<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useRecaptchaProvider } from 'vue-recaptcha';

useRecaptchaProvider();

useHead({
  title: 'MITech',
  meta: [
  { name: 'google-site-verification', content: 'a0_Z6alQ3eFmrUyx_DhTcxX2UOrrdtEsbfvQ-jXKKnE' },
  { name: 'yandex-verification', content: 'f5491f05b32e59f1' }
  ]
});
</script>
