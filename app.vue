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

<style>
.loader {
  width: 98px;
  height: 98px;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite
}
.loader::before , .loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  border-radius: 50%;
  border: 5px solid #3e7ec5;
  animation: prixClipFix 2s linear infinite ;
}
.loader::after{
  transform: rotate3d(90, 90, 0, 180deg );
  border-color: #fee500;
}

@keyframes rotate {
  0%   {transform: rotate(0deg)}
  100%   {transform: rotate(360deg)}
}

@keyframes prixClipFix {
  0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
  50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
  75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
}
</style>
