export default defineNuxtPlugin(() => {
  const head = useHead({
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-C15VJ6E3FF',
        async: true
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C15VJ6E3FF');
        `
      }
    ]
  })
}) 