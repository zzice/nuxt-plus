<template>
  <section id="pricing" class="py-32">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mx-auto max-w-2xl space-y-6 text-center">
        <h2 class="text-4xl font-semibold">{{ $t('landing.pricing.title') }}</h2>
        <p class="text-xl text-muted-foreground">{{ $t('landing.pricing.subtitle') }}</p>
      </div>

      <div class="mt-20 grid gap-6 md:grid-cols-3">
        <!-- 免费方案 -->
        <div class="card bg-background flex flex-col justify-between space-y-8 rounded-xl border border-border p-8 shadow-sm transition-all hover:shadow-md">
          <div class="space-y-4">
            <div>
              <h2 class="text-2xl font-semibold text-foreground">{{ $t('landing.pricing.plans.free.title') }}</h2>
              <span class="my-3 block text-4xl font-bold text-foreground">{{ $t('landing.pricing.plans.free.price') }}</span>
              <p class="text-sm text-muted-foreground">{{ $t('landing.pricing.plans.free.period') }}</p>
            </div>
            <hr class="border-dashed border-border" />
            <ul class="space-y-3 text-sm text-muted-foreground">
              <li class="flex items-start">
                <Icon name="lucide:check" class="mr-2 h-5 w-5 text-primary" />
                <span>{{ $t('landing.pricing.plans.free.features.basic_components') }}</span>
              </li>
              <li class="flex items-start">
                <Icon name="lucide:check" class="mr-2 h-5 w-5 text-primary" />
                <span>{{ $t('landing.pricing.plans.free.features.community_support') }}</span>
              </li>
              <li class="flex items-start">
                <Icon name="lucide:check" class="mr-2 h-5 w-5 text-primary" />
                <span>{{ $t('landing.pricing.plans.free.features.projects') }}</span>
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <hr class="border-dashed border-border" />
            <button class="w-full py-3 px-6 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors text-lg">
              {{ $t('landing.pricing.plans.free.cta') }}
            </button>
          </div>
        </div>

        <!-- 专业方案 -->
        <div class="card bg-background relative rounded-xl border border-primary p-8 shadow-md transition-all hover:shadow-lg">
          <span class="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-md">
            {{ $t('landing.pricing.plans.pro.recommended') }}
          </span>
          <div class="flex flex-col justify-between space-y-8">
            <div class="space-y-4">
              <div>
                <h2 class="text-2xl font-semibold text-foreground">{{ $t('landing.pricing.plans.pro.title') }}</h2>
                <span class="my-3 block text-4xl font-bold text-foreground">{{ $t('landing.pricing.plans.pro.price') }}</span>
                <p class="text-sm text-muted-foreground">{{ $t('landing.pricing.plans.pro.period') }}</p>
              </div>
              <hr class="border-dashed border-border" />
              <ul class="space-y-3 text-sm text-muted-foreground">
                <li class="flex items-start">
                  <Icon name="lucide:check" class="mr-2 h-5 w-5 text-primary" />
                  <span>{{ $t('landing.pricing.plans.pro.features.all_free_features') }}</span>
                </li>
                <li class="flex items-start">
                  <Icon name="lucide:check" class="mr-2 h-5 w-5 text-primary" />
                  <span>{{ $t('landing.pricing.plans.pro.features.advanced_components') }}</span>
                </li>
                <li class="flex items-start">
                  <Icon name="lucide:check" class="mr-2 h-5 w-5 text-primary" />
                  <span>{{ $t('landing.pricing.plans.pro.features.priority_support') }}</span>
                </li>
                <li class="flex items-start">
                  <Icon name="lucide:check" class="mr-2 h-5 w-5 text-primary" />
                  <span>{{ $t('landing.pricing.plans.pro.features.projects') }}</span>
                </li>
              </ul>
            </div>
            <div class="space-y-4">
              <hr class="border-dashed border-border" />
              <button class="w-full py-3 px-6 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors text-lg">
                {{ $t('landing.pricing.plans.pro.cta') }}
              </button>
            </div>
          </div>
        </div>

        <!-- 企业方案 -->
        <div class="card bg-background flex flex-col justify-between space-y-8 rounded-xl border border-border p-8 shadow-sm transition-all hover:shadow-md">
          <div class="space-y-4">
            <div>
              <h2 class="text-2xl font-semibold text-foreground">{{ $t('landing.pricing.plans.enterprise.title') }}</h2>
              <span class="my-3 block text-4xl font-bold text-foreground">{{ $t('landing.pricing.plans.enterprise.price') }}</span>
              <p class="text-sm text-muted-foreground">{{ $t('landing.pricing.plans.enterprise.period') }}</p>
            </div>
            <hr class="border-dashed border-border" />
            <ul class="space-y-3 text-sm text-muted-foreground">
              <li class="flex items-start">
                <Icon name="lucide:check" class="mr-2 h-5 w-5 text-primary" />
                <span>{{ $t('landing.pricing.plans.enterprise.features.all_pro_features') }}</span>
              </li>
              <li class="flex items-start">
                <Icon name="lucide:check" class="mr-2 h-5 w-5 text-primary" />
                <span>{{ $t('landing.pricing.plans.enterprise.features.custom_components') }}</span>
              </li>
              <li class="flex items-start">
                <Icon name="lucide:check" class="mr-2 h-5 w-5 text-primary" />
                <span>{{ $t('landing.pricing.plans.enterprise.features.dedicated_support') }}</span>
              </li>
              <li class="flex items-start">
                <Icon name="lucide:check" class="mr-2 h-5 w-5 text-primary" />
                <span>{{ $t('landing.pricing.plans.enterprise.features.projects') }}</span>
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <hr class="border-dashed border-border" />
            <button class="w-full py-3 px-6 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors text-lg">
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