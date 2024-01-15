// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],

  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "@zadigetvoltaire/nuxt-gtm", "@nuxtjs/robots"],

  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-M62Z5K4M',
        enabled: true,
      },
      robots: {
        UserAgent: '*',
        Disallow: '/assets/svg/arrow.svg'
      }
    }
  }
});
