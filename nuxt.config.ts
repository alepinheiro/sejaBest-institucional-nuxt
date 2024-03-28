// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  srcDir: "src/",

  css: ["@/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // routeRules: {
  //   '/': { redirect: '/homeView' }
  // },

  modules: ["@nuxt/image", "nuxt-swiper", "@vesp/nuxt-fontawesome"],

});