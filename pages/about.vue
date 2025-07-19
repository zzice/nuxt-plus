<template>
  <div class="max-w-screen-md mx-auto px-6 py-20 sm:py-32">
    <!-- About Content -->
    <div class="max-w-2xl mx-auto">
      <h1 class="text-5xl font-light tracking-tight text-center mb-16">{{ $t('about.title') }}</h1>
      
      <div class="space-y-12 text-lg text-center">
        <p class="text-muted-foreground leading-relaxed">{{ $t('about.introduction') }}</p>
      </div>
        
      <div class="flex justify-center gap-10 mt-24 opacity-70">
        <a href="https://x.com/zice0503" target="_blank" aria-label="Twitter" class="text-foreground hover:opacity-100 transition-opacity">
          <Icon name="mingcute:social-x-fill" size="24" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/**
 * About Page
 * 
 * Provides information about the company, mission, and technology stack
 */
const { t } = useI18n()

useHead({
  title: t('about.meta.title'),
  meta: [
    { name: 'description', content: t('about.meta.description') }
  ]
})
</script>

<style scoped>
</style> 