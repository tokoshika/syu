// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          // TODO: ここに先ほど控えたhrefの中身を記載
          href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
          crossorigin: "",
        },
      ],
    },
  },
});
