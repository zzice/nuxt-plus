<template>
  <section id="features" class="py-32">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-foreground mb-4">{{ $t('landing.features.title') }}</h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">{{ $t('landing.features.description') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features" :key="index"
          class="bg-background rounded-xl p-6 shadow-sm border border-border transition-all hover:shadow-md hover:translate-y-[-4px]">
          <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
            <component :is="feature.icon" class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-semibold text-foreground mb-3">{{ $t(`landing.features.items.${feature.key}.title`) }}
          </h3>
          <p class="text-muted-foreground">{{ $t(`landing.features.items.${feature.key}.description`) }}</p>
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