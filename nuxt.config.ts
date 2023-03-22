// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ["nuxt-vuefire", "@nuxtjs/tailwindcss"],
  css: ["~/assets/style.css"],
  vuefire: {
    auth: true,
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
  },
  buildModules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Roboto: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },
});
