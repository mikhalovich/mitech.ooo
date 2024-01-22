import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: '6Lcdix8pAAAAAGtU7J-k9JnnWyYg-plgJBrK4Sk7',
    loaderOptions: {
      autoHideBadge: false,
      explicitRenderParameters: {
        badge: 'bottomright',
      },
    },
  });
});