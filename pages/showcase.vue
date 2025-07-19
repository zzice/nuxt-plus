<template>
  <div class="container mx-auto px-6 py-12 max-w-6xl">
    <!-- Page Header -->
    <section class="py-12 px-6">
      <div class="mx-auto max-w-6xl text-center">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          {{ $t('showcase.title') }}
        </h1>
        <p class="text-xl text-muted-foreground mb-8">
          {{ $t('showcase.description') }}
        </p>

        <!-- Submit Project Button -->
        <div class="mb-12">
          <Button disabled class="px-8 py-3 text-lg" variant="outline">
            {{ $t('showcase.submit.button') }}
            <span class="ml-2 text-sm text-muted-foreground">
              ({{ $t('showcase.submit.comingSoon') }})
            </span>
          </Button>
        </div>
      </div>
    </section>

    <!-- Showcase Grid -->
    <section class="pb-16 px-6">
      <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="showcase in showcases" :key="showcase.id" class="group cursor-pointer"
            @click="openWebsite(showcase.url)">
            <Card
              class="py-0 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-2xl border border-gray-200/50 bg-white shadow-sm">
              <div class="flex flex-col">
                <!-- Website Screenshot -->
                <div class="aspect-[4/3] overflow-hidden bg-gray-50 relative">
                  <img :src="showcase.image" :alt="showcase.title"
                    class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy" />
                  <!-- Dark Overlay -->
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  </div>
                  <!-- Hover Visit Prompt -->
                  <div
                    class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100">
                    <div
                      class="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2 shadow-lg">
                      <ExternalLink class="w-4 h-4 text-gray-700" />
                      <span class="text-sm font-medium text-gray-700">{{ $t('showcase.visitWebsite') }}</span>
                    </div>
                  </div>
                </div>

                <!-- Card Content -->
                <CardContent class="p-6">
                  <div class="space-y-3">
                    <h3
                      class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {{ showcase.title }}
                    </h3>
                    <p class="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {{ showcase.description }}
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="showcases.length === 0" class="text-center py-16">
          <div class="text-muted-foreground">
            <p class="text-lg mb-4">{{ $t('showcase.empty', 'No showcases available yet') }}</p>
            <p class="text-sm">{{ $t('showcase.emptyDescription', 'Check back soon for amazing projects!') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'

// Page Metadata
useHead({
  title: 'Showcase',
  meta: [
    {
      name: 'description',
      content: 'Explore amazing projects built with NuxtPlus platform'
    }
  ]
})

// Showcase Item Interface Definition
interface ShowcaseItem {
  id: number
  title: string
  description: string
  url: string
  image: string
}

/**
 * Showcase items array
 * Easily add new showcase items
 */
const showcases = ref<ShowcaseItem[]>([
  {
    id: 1,
    title: 'LabubuFace',
    description: 'An innovative AI-powered face recognition platform that brings creativity and technology together. Experience the future of digital interaction with advanced facial analysis capabilities.',
    url: 'https://labubuface.com',
    image: '/showcase/labubuface.png'
  },
  {
    id: 2,
    title: 'ThetaTide White Noise',
    description: 'Free online white noise player to help you relax, focus and sleep better',
    url: 'https://www.thetatide.com/',
    image: '/showcase/thetatide.png'
  },
  {
    id: 3,
    title: 'BioAITools',
    description: '生物信息学和AI工具导航站，集合各种实用的生物信息学资源',
    url: 'https://thetatide.com/#google_vignette',
    image: '/showcase/bioaitools.png'
  },
  {
    id: 4,
    title: 'ImgurUploader',
    description: 'A simple and efficient image uploader for Imgur. Upload, share and manage your images with ease.',
    url: 'https://imguruploader.com',
    image: '/showcase/imguruploader.png'
  }
  // Add more showcase items here, default screenshot is screenshot.svg
])

/**
 * Open external website
 * @param url - Website URL to open
 */
const openWebsite = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped></style>