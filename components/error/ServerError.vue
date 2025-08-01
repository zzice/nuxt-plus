<template>
  <div class="min-h-screen bg-background flex items-center justify-center px-4 pt-20 pb-8">
    <div class="max-w-md w-full text-center space-y-8">
      <!-- 服务器错误动画图标 -->
      <div class="flex justify-center">
        <div class="relative">
          <!-- 主要图标容器 -->
          <div class="w-28 h-28 bg-gradient-to-br from-destructive/20 to-destructive/5 rounded-full flex items-center justify-center relative overflow-hidden animate-pulse">
            <!-- 故障效果背景 -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-destructive/10 to-transparent animate-shimmer"></div>
            <Icon name="lucide:server-crash" class="w-14 h-14 text-destructive z-10" />
          </div>
          
          <!-- 装饰性警告元素 -->
          <div class="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full animate-ping"></div>
          <div class="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
        </div>
      </div>

      <!-- 500错误标题 -->
      <div class="space-y-3">
        <h1 class="text-6xl font-bold text-destructive tracking-tight animate-pulse">
          500
        </h1>
        <h2 class="text-2xl font-semibold text-foreground">
          {{ $t('error.500.title') }}
        </h2>
      </div>

      <!-- 错误描述 -->
      <div class="space-y-4">
        <p class="text-lg text-muted-foreground leading-relaxed">
          {{ $t('error.500.description') }}
        </p>
        
        <!-- 错误详情卡片 -->
        <div class="bg-destructive/5 border border-destructive/20 rounded-lg p-4 text-left">
          <div class="flex items-center gap-2 mb-2">
            <Icon name="lucide:alert-triangle" class="w-4 h-4 text-destructive" />
            <span class="text-sm font-medium text-destructive">{{ $t('error.500.details', { text: '错误详情' }) || '错误详情' }}</span>
          </div>
          <p class="text-xs text-muted-foreground font-mono">
            {{ errorDetails }}
          </p>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <UiButton 
          @click="handleRetry" 
          class="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors gap-2 group"
        >
          <Icon name="lucide:refresh-cw" class="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
          {{ $t('error.500.tryAgain') }}
        </UiButton>
        
        <NuxtLink to="/">
          <UiButton 
            variant="outline"
            class="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors gap-2"
          >
            <Icon name="lucide:home" class="w-4 h-4" />
            {{ $t('error.500.backHome') }}
          </UiButton>
        </NuxtLink>
      </div>

      <!-- 联系支持 -->
      <div class="pt-6 border-t border-border">
        <p class="text-sm text-muted-foreground mb-3">
          {{ $t('error.500.persistentIssue', { text: '如果问题持续存在，请联系技术支持' }) || '如果问题持续存在，请联系技术支持' }}
        </p>
        <NuxtLink 
          to="/contact"
          class="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors gap-1"
        >
          <Icon name="lucide:mail" class="w-4 h-4" />
          {{ $t('error.500.contactSupport', { text: '联系支持' }) || '联系支持' }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 服务器错误页面组件 (500错误)
 * 提供友好的错误信息和恢复选项
 */

interface Props {
  error?: {
    statusCode?: number
    statusMessage?: string
    message?: string
    stack?: string
  }
}

const props = defineProps<Props>()
const { t } = useI18n()

/**
 * 生成错误详情信息
 * @returns {string} 格式化的错误详情
 */
const errorDetails = computed(() => {
  const timestamp = new Date().toLocaleString()
  const errorId = Math.random().toString(36).substr(2, 9).toUpperCase()
  
  return `Error ID: ${errorId} | Time: ${timestamp} | Status: ${props.error?.statusCode || 500}`
})

/**
 * 处理重试操作
 * 刷新当前页面
 */
const handleRetry = (): void => {
  if (process.client) {
    // 添加延迟以提供视觉反馈
    setTimeout(() => {
      window.location.reload()
    }, 300)
  }
}

// 设置页面元数据
useHead({
  title: () => `${t('error.500.title')} - ${t('common.meta.title')}`,
  meta: [
    {
      name: 'description',
      content: () => t('error.500.description')
    },
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})
</script>

<style scoped>
/* 闪烁动画 */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

/* 故障效果 */
@keyframes glitch {
  0%, 100% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
}

.animate-glitch {
  animation: glitch 0.3s infinite;
}

/* 响应式调整 */
@media (max-width: 640px) {
  .text-6xl {
    font-size: 3.5rem;
  }
}
</style>