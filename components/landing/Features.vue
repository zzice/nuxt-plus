<template>
  <section id="features" class="py-32 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
    <div class="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-20">
        <div
          class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          核心特性
        </div>
        <h2
          class="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          {{ $t('landing.features.title') }}
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {{ $t('landing.features.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div v-for="(feature, index) in features" :key="index"
          class="group relative bg-gradient-to-br from-background to-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden">

          <!-- 卡片背景光效 -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          </div>
          <div
            class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left">
          </div>

          <div class="relative z-10">
            <!-- 图标区域 -->
            <div class="relative mb-6">
              <div
                class="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <component :is="feature.icon" class="w-8 h-8" />
              </div>
              <!-- 装饰性圆点 -->
              <div class="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full animate-pulse"></div>
            </div>

            <!-- 内容区域 -->
            <div class="space-y-4">
              <h3 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {{ $t(`landing.features.items.${feature.key}.title`) }}
              </h3>
              <p
                class="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {{ $t(`landing.features.items.${feature.key}.description`) }}
              </p>
            </div>

            <!-- 底部装饰箭头 -->
            <div
              class="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
              <span class="text-sm font-medium mr-2">了解更多</span>
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
/**
 * Features组件
 * 
 * 展示NuxtPlus的核心特性和优势，包含：
 * - 特性卡片网格布局
 * - 响应式设计（移动端、平板、桌面端）
 * - 主题颜色适配
 * - 悬停动画效果
 */
import { h } from 'vue'

// 图标组件
const IconSpeed = (props: Record<string, any>) => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  ...props
}, [
  h('path', { d: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' })
])

const IconComponents = (props: Record<string, any>) => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  ...props
}, [
  h('path', { d: 'M4 4h16v16H4z' }),
  h('path', { d: 'M4 12h16' }),
  h('path', { d: 'M12 4v16' })
])

const IconTheme = (props: Record<string, any>) => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  ...props
}, [
  h('circle', { cx: '12', cy: '12', r: '5' }),
  h('path', { d: 'M12 1v2' }),
  h('path', { d: 'M12 21v2' }),
  h('path', { d: 'M4.22 4.22l1.42 1.42' }),
  h('path', { d: 'M18.36 18.36l1.42 1.42' }),
  h('path', { d: 'M1 12h2' }),
  h('path', { d: 'M21 12h2' }),
  h('path', { d: 'M4.22 19.78l1.42-1.42' }),
  h('path', { d: 'M18.36 5.64l1.42-1.42' })
])

const IconTypescript = (props: Record<string, any>) => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  ...props
}, [
  h('path', { d: 'M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' }),
  h('path', { d: 'M3.27 6.96L12 12.01l8.73-5.05' }),
  h('path', { d: 'M12 22.08V12' })
])

const IconSEO = (props: Record<string, any>) => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  ...props
}, [
  h('circle', { cx: '11', cy: '11', r: '8' }),
  h('path', { d: 'M21 21l-4.35-4.35' })
])

const IconAPI = (props: Record<string, any>) => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  ...props
}, [
  h('path', { d: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' }),
  h('circle', { cx: '12', cy: '7', r: '4' })
])

// 特性数据
const features = [
  {
    key: 'performance',
    icon: IconSpeed
  },
  {
    key: 'components',
    icon: IconComponents
  },
  {
    key: 'theme',
    icon: IconTheme
  },
  {
    key: 'typescript',
    icon: IconTypescript
  },
  {
    key: 'seo',
    icon: IconSEO
  },
  {
    key: 'api',
    icon: IconAPI
  }
]
</script>