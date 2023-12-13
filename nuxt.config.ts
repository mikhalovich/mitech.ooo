// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],

  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "@zadigetvoltaire/nuxt-gtm"],

  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-M62Z5K4M',
        enabled: true,
      }
    }
  }
});
