<template>
  <footer class="border-t border-border bg-background pt-20">
    <div class="container mx-auto px-6">
      <div class="grid gap-12 md:grid-cols-5">
        <!-- Logo and Introduction Section -->
        <div class="md:col-span-2 space-y-4">
          <NuxtLink to="/" aria-label="Return to Home" class="block size-fit">
            <img src="/logo.png" alt="Logo" class="size-8 rounded-md" />
          </NuxtLink>
          <p class="text-base text-muted-foreground">{{ $t('footer.introduction') }}</p>
        </div>

        <!-- Navigation Links Section -->
        <div class="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
          <!-- Product Navigation -->
          <div class="space-y-4 text-sm">
            <span class="font-medium mb-4 block">{{ $t('footer.product.title') }}</span>
            <NuxtLink to="/#features" class="text-muted-foreground block hover:text-primary transition-colors">
              <span>{{ $t('landing.features.title') }}</span>
            </NuxtLink>
            <NuxtLink to="/#pricing" class="text-muted-foreground block hover:text-primary transition-colors">
              <span>{{ $t('landing.pricing.title') }}</span>
            </NuxtLink>
            <NuxtLink to="/blog" class="text-muted-foreground block hover:text-primary transition-colors">
              <span>{{ $t('footer.company.blog') }}</span>
            </NuxtLink>
            <NuxtLink to="/showcase" class="text-muted-foreground block hover:text-primary transition-colors">
              <span>{{ $t('showcase.title') }}</span>
            </NuxtLink>
            <NuxtLink to="/#testimonials" class="text-muted-foreground block hover:text-primary transition-colors">
              <span>{{ $t('landing.testimonials.title') }}</span>
            </NuxtLink>
            <NuxtLink to="/#faq" class="text-muted-foreground block hover:text-primary transition-colors">
              <span>{{ $t('landing.faq.title') }}</span>
            </NuxtLink>
          </div>

          <!-- Resources Navigation -->
          <div class="space-y-4 text-sm">
            <span class="font-medium mb-4 block">{{ $t('footer.resources.title') }}</span>
            <NuxtLink to="/blog" class="text-muted-foreground block hover:text-primary transition-colors">
              <span>{{ $t('footer.company.blog') }}</span>
            </NuxtLink>
            <NuxtLink to="/#docs" class="text-muted-foreground block hover:text-primary transition-colors">
              <span>{{ $t('footer.resources.documentation') }}</span>
            </NuxtLink>
          </div>

          <!-- Company Information -->
          <div class="space-y-4 text-sm">
            <span class="font-medium mb-4 block">{{ $t('footer.company.title') }}</span>
            <NuxtLink to="/about" class="text-muted-foreground block hover:text-primary transition-colors">
              <span>{{ $t('footer.company.about') }}</span>
            </NuxtLink>
          
            <NuxtLink to="/contact" class="text-muted-foreground block hover:text-primary transition-colors">
              <span>{{ $t('footer.company.contact') }}</span>
            </NuxtLink>
          </div>

          <!-- Legal Information -->
          <div class="space-y-4 text-sm">
            <span class="font-medium mb-4 block">{{ $t('footer.legal.title') }}</span>
            <NuxtLink to="/privacy" class="text-muted-foreground block hover:text-primary transition-colors">
              <span>{{ $t('footer.legal.privacy') }}</span>
            </NuxtLink>
            <NuxtLink to="/terms" class="text-muted-foreground block hover:text-primary transition-colors">
              <span>{{ $t('footer.legal.terms') }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Footer Copyright and Social Media -->
      <div class="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-border py-6">
        <span class="text-caption order-last block text-center text-sm text-muted-foreground md:order-first">
          © {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
        </span>
        <div class="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
          <a href="https://x.com/zice0503" target="_blank" aria-label="X/Twitter" class="text-muted-foreground hover:text-primary">
            <Icon name="mingcute:social-x-fill" size="24" />
          </a>
          <a href="#" target="_blank" aria-label="GitHub" class="text-muted-foreground hover:text-primary">
            <Icon name="mingcute:github-2-fill" size="24" />
          </a>
          <a href="#" target="_blank" aria-label="Discord" class="text-muted-foreground hover:text-primary">
            <Icon name="mingcute:discord-fill" size="24" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>