// https://nuxt.com/docs/api/configuration/nuxt-config
import eslint from "vite-plugin-eslint";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: ["@/assets/scss/style.scss", "mdi/css/materialdesignicons.min.css"],
  build: {
    // transpile 选项中可以配置需要转译的文件或模块的名称，这些文件或模块会在编译过程中被转译，以保证其兼容性。
    transpile: ["vuetify"],
  },
  typescript: {
    typeCheck: true,
  },
  vite: {
    plugins: [eslint()],
    server: {
      proxy: {
        "/VsWeb/api": {
          target: "https://www.vscinemas.com.tw/",
          changeOrigin: true,
        },
      },
    },
  },
  ssr: true,
  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
  },
});
