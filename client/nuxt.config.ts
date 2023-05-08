import { RuntimeConfig } from "nuxt/schema";
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass"],
  modules: [],

  app: {
    head: {
      title: "Nuxt.js by DevKya",
      meta: [{ name: "description", content: "Everything about Nuxt 3" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,900;1,300;1,500&display=swap",
        },
      ],
    },
  },
  runtimeConfig: {
    kakaoKey: process.env.KAKAO_API_KEY,
  },

  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
