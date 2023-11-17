// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css"],

  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
});
