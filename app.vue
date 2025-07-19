<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css' 
const { t } = useI18n()

const title = computed(() => t('common.meta.title'))
const description = computed(() => t('common.meta.description'))

// Get current route and website URL
const route = useRoute()
const siteUrl = useRuntimeConfig().public.webUrl || 'https://nuxtplus.com'
const { locale, defaultLocale } = useI18n()

// Compute canonical URL
const canonicalUrl = computed(() => {
  // Construct full URL based on language and current path
  if (locale.value === defaultLocale) {
    return `${siteUrl}${route.path}`
  } else {
    // Remove language prefix to get standard path
    const pathWithoutLocale = route.path.replace(new RegExp(`^/${locale.value}`), '')
    return `${siteUrl}${pathWithoutLocale}`
  }
})

useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${title.value}` : title.value;
  },
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: 'https://avatars.githubusercontent.com/u/17754767?v=4',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl
    }
  ]
})

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Toaster position="top-right" richColors/>
</template>
