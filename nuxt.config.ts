// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  },
  plugins: [
    // 客户端插件会自动仅在客户端加载
  ],
  runtimeConfig: {
    // 私有配置，只能在服务器端使用
    authSecret: process.env.AUTH_SECRET,
    // Github OAuth配置
    githubClientId: process.env.AUTH_GITHUB_CLIENT_ID,
    githubClientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET,
    // Google OAuth配置
    googleClientId: process.env.AUTH_GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,

    // public 中的键暴露给客户端，可以在客户端使用的配置
    public: {
      webUrl: "", // 被 NUXT_PUBLIC_WEB_URL 环境变量覆盖
      projectName: "", // 被 NUXT_PUBLIC_PROJECT_NAME 环境变量覆盖
    },
  },
  modules: [
    "@nuxt/eslint",
    "shadcn-nuxt",
    "@nuxtjs/i18n",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    ["@pinia/nuxt", { autoImports: ['defineStore'] }],
    "@nuxtjs/supabase",
    // Due to current Nuxt Content v3 limitations, you must load the sitemap module before the content module.
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@nuxtjs/robots",
  ],
  site: {
    url: process.env.NUXT_PUBLIC_WEB_URL || 'https://nuxtplus.com',
    name: process.env.NUXT_PUBLIC_PROJECT_NAME || 'NuxtPlus'
  },
  supabase: {
    // https://supabase.nuxtjs.org/getting-started/introduction
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    serviceKey: process.env.SUPABASE_SERVICE_KEY,
    // 自行实现重定向 中间件
    redirect: false
  },
  components: [
    // https://nuxt.com/docs/guide/directory-structure/components
    // ~/components/modules/blog/Title.vue => <BlogTitle />
    {
      path: "~/components/modules",
    },
    // 其他目录保留默认规则（自动添加目录名前缀）
    "~/components",
  ],
  css: ["~/assets/css/global.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  i18n: {
    defaultLocale: "en",
    langDir: "locales",
    lazy: true,
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "zh",
        name: "中文",
        file: "zh.json",
      },
    ],
  },
  colorMode: {
    classSuffix: "",
  },
});
