<template>
  <section id="pricing" class="py-32 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5"></div>
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    
    <div class="mx-auto max-w-7xl px-6 relative z-10">
      <div class="mx-auto max-w-3xl space-y-8 text-center mb-20">
        <div class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
          <Icon name="lucide:zap" class="w-4 h-4" />
          定价方案
        </div>
        <h2 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          {{ $t('landing.pricing.title') }}
        </h2>
        <p class="text-xl text-muted-foreground leading-relaxed">
          {{ $t('landing.pricing.subtitle') }}
        </p>
      </div>

      <div class="mt-20 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        <!-- 免费方案 -->
        <div class="group relative bg-gradient-to-br from-background to-background/80 backdrop-blur-sm flex flex-col justify-between space-y-8 rounded-3xl border border-border/50 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/30">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          <div class="relative z-10 space-y-6">
            <div class="text-center">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
                <Icon name="lucide:gift" class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-2xl font-bold text-foreground mb-2">{{ $t('landing.pricing.plans.free.title') }}</h3>
              <div class="flex items-baseline justify-center gap-2">
                <span class="text-5xl font-bold text-foreground">{{ $t('landing.pricing.plans.free.price') }}</span>
              </div>
              <p class="text-muted-foreground mt-2">{{ $t('landing.pricing.plans.free.period') }}</p>
            </div>
            
            <div class="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Icon name="lucide:check" class="w-4 h-4 text-primary" />
                </div>
                <span class="text-foreground">{{ $t('landing.pricing.plans.free.features.basic_components') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Icon name="lucide:check" class="w-4 h-4 text-primary" />
                </div>
                <span class="text-foreground">{{ $t('landing.pricing.plans.free.features.community_support') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Icon name="lucide:check" class="w-4 h-4 text-primary" />
                </div>
                <span class="text-foreground">{{ $t('landing.pricing.plans.free.features.projects') }}</span>
              </li>
            </ul>
          </div>
          
          <div class="relative z-10">
            <div class="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6"></div>
            <button class="w-full py-4 px-6 border-2 border-primary/50 text-primary font-semibold rounded-2xl hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 text-lg group-hover:shadow-lg">
              {{ $t('landing.pricing.plans.free.cta') }}
            </button>
          </div>
        </div>

        <!-- 专业方案 -->
        <div class="group relative bg-gradient-to-br from-background to-background/80 backdrop-blur-sm flex flex-col justify-between space-y-8 rounded-3xl border-2 border-primary/50 p-8 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:shadow-primary/20 hover:-translate-y-3 hover:border-primary scale-105 hover:scale-110">
          <!-- 推荐标签 -->
          <div class="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
            <div class="relative">
              <div class="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg">
                <div class="flex items-center gap-2">
                  <Icon name="lucide:star" class="w-4 h-4" />
                  {{ $t('landing.pricing.plans.pro.recommended') }}
                </div>
              </div>
              <div class="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-md opacity-50 -z-10"></div>
            </div>
          </div>
          
          <!-- 背景光效 -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-t-3xl"></div>
          
          <div class="relative z-10 space-y-6 pt-4">
            <div class="text-center">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-4 shadow-lg">
                <Icon name="lucide:crown" class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-foreground mb-2">{{ $t('landing.pricing.plans.pro.title') }}</h3>
              <div class="flex items-baseline justify-center gap-2">
                <span class="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{{ $t('landing.pricing.plans.pro.price') }}</span>
              </div>
              <p class="text-muted-foreground mt-2">{{ $t('landing.pricing.plans.pro.period') }}</p>
            </div>
            
            <div class="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mt-0.5">
                  <Icon name="lucide:check" class="w-4 h-4 text-white" />
                </div>
                <span class="text-foreground font-medium">{{ $t('landing.pricing.plans.pro.features.all_free_features') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mt-0.5">
                  <Icon name="lucide:check" class="w-4 h-4 text-white" />
                </div>
                <span class="text-foreground font-medium">{{ $t('landing.pricing.plans.pro.features.advanced_components') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mt-0.5">
                  <Icon name="lucide:check" class="w-4 h-4 text-white" />
                </div>
                <span class="text-foreground font-medium">{{ $t('landing.pricing.plans.pro.features.priority_support') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mt-0.5">
                  <Icon name="lucide:check" class="w-4 h-4 text-white" />
                </div>
                <span class="text-foreground font-medium">{{ $t('landing.pricing.plans.pro.features.projects') }}</span>
              </li>
            </ul>
          </div>
          
          <div class="relative z-10">
            <div class="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6"></div>
            <button class="w-full py-4 px-6 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:scale-105 text-lg shadow-lg hover:shadow-xl group-hover:shadow-2xl">
              {{ $t('landing.pricing.plans.pro.cta') }}
            </button>
          </div>
        </div>

        <!-- 企业方案 -->
        <div class="group relative bg-gradient-to-br from-background to-background/80 backdrop-blur-sm flex flex-col justify-between space-y-8 rounded-3xl border border-border/50 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2 hover:border-secondary/30">
          <div class="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          <div class="relative z-10 space-y-6">
            <div class="text-center">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 mb-4">
                <Icon name="lucide:building" class="w-8 h-8 text-secondary" />
              </div>
              <h3 class="text-2xl font-bold text-foreground mb-2">{{ $t('landing.pricing.plans.enterprise.title') }}</h3>
              <div class="flex items-baseline justify-center gap-2">
                <span class="text-5xl font-bold text-foreground">{{ $t('landing.pricing.plans.enterprise.price') }}</span>
              </div>
              <p class="text-muted-foreground mt-2">{{ $t('landing.pricing.plans.enterprise.period') }}</p>
            </div>
            
            <div class="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                  <Icon name="lucide:check" class="w-4 h-4 text-secondary" />
                </div>
                <span class="text-foreground">{{ $t('landing.pricing.plans.enterprise.features.all_pro_features') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                  <Icon name="lucide:check" class="w-4 h-4 text-secondary" />
                </div>
                <span class="text-foreground">{{ $t('landing.pricing.plans.enterprise.features.custom_components') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                  <Icon name="lucide:check" class="w-4 h-4 text-secondary" />
                </div>
                <span class="text-foreground">{{ $t('landing.pricing.plans.enterprise.features.dedicated_support') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                  <Icon name="lucide:check" class="w-4 h-4 text-secondary" />
                </div>
                <span class="text-foreground">{{ $t('landing.pricing.plans.enterprise.features.projects') }}</span>
              </li>
            </ul>
          </div>
          
          <div class="relative z-10">
            <div class="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6"></div>
            <button class="w-full py-4 px-6 border-2 border-secondary/50 text-secondary font-semibold rounded-2xl hover:bg-secondary/10 hover:border-secondary transition-all duration-300 hover:scale-105 text-lg group-hover:shadow-lg">
              {{ $t('landing.pricing.plans.enterprise.cta') }}
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts" setup>
/**
 * Pricing组件
 * 
 * 展示NuxtPlus的价格方案，包含：
 * - 三种不同的价格套餐（免费版、专业版、企业版）
 * - 每个套餐的特性列表
 * - 响应式设计（移动端、平板、桌面端）
 * - 突出显示推荐方案
 * - 主题颜色适配
 * - 悬停动画效果
 * - 国际化支持
 */
</script>