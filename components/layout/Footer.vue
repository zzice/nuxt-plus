<template>
  <footer class="relative border-t border-border/20 bg-gradient-to-b from-background to-background/80 overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>
    <div class="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
    <div class="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>

    <div class="container mx-auto px-6 py-16 relative z-10">
      <div class="grid gap-12 md:grid-cols-5">
        <!-- Logo and Introduction Section -->
        <div class="md:col-span-2 space-y-6">
          <div class="group flex items-center space-x-3">
            <div class="relative">
              <div
                class="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img src="/logo.png" alt="Logo" class="size-8 rounded-md" />
              </div>
              <div
                class="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10">
              </div>
            </div>
          </div>
          <p class="text-base text-muted-foreground leading-relaxed">{{ $t('footer.introduction') }}</p>
        </div>

        <!-- Navigation Links Section -->
        <div class="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
          <!-- Product Navigation -->
          <div class="space-y-6">
            <h3 class="font-bold text-lg text-foreground relative">
              {{ $t('footer.product.title') }}
              <div class="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full">
              </div>
            </h3>
            <div class="space-y-3">
              <NuxtLink to="/#features"
                class="text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-primary/10 block">
                <span>{{ $t('landing.features.title') }}</span>
              </NuxtLink>
              <NuxtLink to="/#pricing"
                class="text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-primary/10 block">
                <span>{{ $t('landing.pricing.title') }}</span>
              </NuxtLink>
              <NuxtLink to="/blog"
                class="text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-primary/10 block">
                <span>{{ $t('footer.company.blog') }}</span>
              </NuxtLink>
              <NuxtLink to="/showcase"
                class="text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-primary/10 block">
                <span>{{ $t('showcase.title') }}</span>
              </NuxtLink>
              <NuxtLink to="/#testimonials"
                class="text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-primary/10 block">
                <span>{{ $t('landing.testimonials.title') }}</span>
              </NuxtLink>
              <NuxtLink to="/#faq"
                class="text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-primary/10 block">
                <span>{{ $t('landing.faq.title') }}</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Resources Navigation -->
          <div class="space-y-6">
            <h3 class="font-bold text-lg text-foreground relative">
              {{ $t('footer.resources.title') }}
              <div class="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-secondary to-primary rounded-full">
              </div>
            </h3>
            <div class="space-y-3">
              <NuxtLink to="/blog"
                class="text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-secondary/10 block">
                <span>{{ $t('footer.company.blog') }}</span>
              </NuxtLink>
              <NuxtLink to="/#docs"
                class="text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-secondary/10 block">
                <span>{{ $t('footer.resources.documentation') }}</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Company Information -->
          <div class="space-y-6">
            <h3 class="font-bold text-lg text-foreground relative">
              {{ $t('footer.company.title') }}
              <div class="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full">
              </div>
            </h3>
            <div class="space-y-3">
              <NuxtLink to="/about"
                class="text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-primary/10 block">
                <span>{{ $t('footer.company.about') }}</span>
              </NuxtLink>
              <NuxtLink to="/contact"
                class="text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-primary/10 block">
                <span>{{ $t('footer.company.contact') }}</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Legal Information -->
          <div class="space-y-6">
            <h3 class="font-bold text-lg text-foreground relative">
              {{ $t('footer.legal.title') }}
              <div class="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-secondary to-primary rounded-full">
              </div>
            </h3>
            <div class="space-y-3">
              <NuxtLink to="/privacy"
                class="text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-secondary/10 block">
                <span>{{ $t('footer.legal.privacy') }}</span>
              </NuxtLink>
              <NuxtLink to="/terms"
                class="text-muted-foreground hover:text-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-secondary/10 block">
                <span>{{ $t('footer.legal.terms') }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Copyright and Social Media -->
      <div class="mt-16 pt-8 border-t border-border/20">
        <div class="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div class="flex flex-col items-center md:items-start space-y-2">
            <span class="text-muted-foreground font-medium">
              © {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
            </span>
            <p class="text-sm text-muted-foreground/80">
              {{ $t('footer.builtWith') }}
            </p>
          </div>
          <div class="flex items-center space-x-8">
            <div class="flex space-x-6">
              <a href="https://x.com/zice0503" target="_blank" aria-label="X/Twitter"
                class="group p-3 rounded-xl bg-background/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Icon name="mingcute:social-x-fill" size="20" />
              </a>
              <a href="#" target="_blank" aria-label="GitHub"
                class="group p-3 rounded-xl bg-background/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Icon name="mingcute:github-2-fill" size="20" />
              </a>
              <a href="#" target="_blank" aria-label="Discord"
                class="group p-3 rounded-xl bg-background/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Icon name="mingcute:discord-fill" size="20" />
              </a>
            </div>
            <div class="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="lucide:heart" class="h-4 w-4 text-red-500" />
              <span>{{ $t('footer.madeIn') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
</script>

<style scoped></style>