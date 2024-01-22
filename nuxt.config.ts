// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],

  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "@zadigetvoltaire/nuxt-gtm", "@nuxtjs/robots", "vue-recaptcha/nuxt"],

  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-M62Z5K4M',
        enabled: true,
      },
      robots: {
        UserAgent: '*',
        Disallow: '/assets/svg/arrow.svg'
      },
      recaptcha: {
        v2SiteKey: '6LfTr1gpAAAAAFkdO2iq5hzwjjlBez9UtwLR1CM5',
        v3SiteKey: '6Lcdix8pAAAAAGtU7J-k9JnnWyYg-plgJBrK4Sk7',
      }
    }
  }
});
