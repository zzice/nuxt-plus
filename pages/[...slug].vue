<template>
  <div class="min-h-screen bg-background flex items-center justify-center px-4 pt-20 pb-8">
    <div class="max-w-lg w-full text-center space-y-8">
      <!-- 404动画图标 -->
      <div class="flex justify-center">
        <div class="relative animate-float">
          <!-- 主要图标容器 -->
          <div
            class="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center relative overflow-hidden">
            <!-- 背景装饰 -->
            <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <Icon name="lucide:compass" class="w-16 h-16 text-primary z-10" />
          </div>
          <!-- 装饰性元素 -->
          <div class="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-ping"></div>
          <div class="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
        </div>
      </div>

      <!-- 404标题 -->
      <div class="space-y-4">
        <div class="flex items-center justify-center space-x-2">
          <span class="text-7xl font-bold text-primary tracking-tight">4</span>
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-spin-slow">
            <Icon name="lucide:search" class="w-8 h-8 text-primary" />
          </div>
          <span class="text-7xl font-bold text-primary tracking-tight">4</span>
        </div>

        <h1 class="text-3xl font-bold text-foreground">
          {{ $t('error.404.title') }}
        </h1>
      </div>

      <!-- 描述文本 -->
      <div class="space-y-4">
        <p class="text-lg text-muted-foreground leading-relaxed">
          {{ $t('error.404.description') }}
        </p>

        <!-- 当前路径显示 -->
        <div class="bg-muted/50 rounded-lg p-4 border border-border">
          <p class="text-sm text-muted-foreground mb-2">{{ $t('error.404.currentPath', { path: route.path }) || `当前路径:
            ${route.path}` }}</p>
          <code class="text-xs bg-background px-2 py-1 rounded border font-mono text-primary">
            {{ route.fullPath }}
          </code>
        </div>
      </div>

      <!-- 操作按钮组 -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/">
          <UiButton
            class="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-all duration-200 gap-2 group">
            <Icon name="lucide:home" class="w-4 h-4 group-hover:scale-110 transition-transform" />
            {{ $t('error.404.backHome') }}
          </UiButton>
        </NuxtLink>

        <UiButton @click="goBack" variant="outline"
          class="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-all duration-200 gap-2 group">
          <Icon name="lucide:arrow-left" class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {{ $t('error.404.goBack', { text: '返回上页' }) || '返回上页' }}
        </UiButton>
      </div>

      <!-- 推荐链接 -->
      <div class="pt-8 border-t border-border">
        <h3 class="text-sm font-medium text-foreground mb-4">
          {{ $t('error.404.suggestions', { text: '您可能在寻找:' }) || '您可能在寻找:' }}
        </h3>
        <div class="flex flex-wrap gap-2 justify-center">
          <NuxtLink v-for="link in suggestedLinks" :key="link.path" :to="link.path"
            class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors gap-1">
            <Icon :name="link.icon" class="w-3 h-3" />
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 404页面组件 - 处理所有未匹配的路由
 * 提供友好的用户体验和导航选项
 */

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

/**
 * 推荐链接配置
 * @type {Array<{path: string, name: string, icon: string}>}
 */
const suggestedLinks = [
  { path: '/', name: t('common.home', { text: '首页' }) || '首页', icon: 'lucide:home' },
  { path: '/blog', name: t('common.blog', { text: '博客' }) || '博客', icon: 'lucide:book-open' },
  { path: '/about', name: t('common.about', { text: '关于' }) || '关于', icon: 'lucide:info' },
  { path: '/contact', name: t('common.contact', { text: '联系' }) || '联系', icon: 'lucide:mail' },
  { path: '/showcase', name: t('showcase.title') || '案例展示', icon: 'lucide:star' }
]

/**
 * 返回上一页
 * 如果没有历史记录则跳转到首页
 */
const goBack = (): void => {
  if (process.client && window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}

// 设置页面元数据
useHead({
  title: () => `${t('error.404.title')} - ${t('common.meta.title')}`,
  meta: [
    {
      name: 'description',
      content: () => t('error.404.description')
    },
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})

// 设置页面状态码
setResponseStatus(404)
</script>

<style scoped>
/* 自定义动画 */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-15px) rotate(5deg);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

/* 网格背景图案 */
.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(0, 220, 130, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 220, 130, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* 响应式调整 */
@media (max-width: 640px) {
  .text-7xl {
    font-size: 4rem;
  }
}
</style>