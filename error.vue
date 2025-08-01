<template>
  <!-- 根据错误类型显示不同的错误页面组件 -->
  <ErrorServerError v-if="error?.statusCode === 500" :error="error" />

  <!-- 通用错误页面 -->
  <div v-else class="min-h-screen bg-background flex items-center justify-center px-4 pt-20 pb-8">
    <div class="max-w-md w-full text-center space-y-8">
      <!-- 错误图标 -->
      <div class="flex justify-center">
        <div class="relative">
          <div class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <Icon :name="getErrorIcon(error?.statusCode)" class="w-12 h-12 text-primary" />
          </div>
          <!-- 装饰性圆环 -->
          <div class="absolute inset-0 w-24 h-24 border-2 border-primary/20 rounded-full animate-pulse"></div>
        </div>
      </div>

      <!-- 错误代码 -->
      <div class="space-y-2">
        <h1 class="text-6xl font-bold text-primary tracking-tight">
          {{ error?.statusCode || '500' }}
        </h1>
        <h2 class="text-2xl font-semibold text-foreground">
          {{ getErrorTitle(error?.statusCode) }}
        </h2>
      </div>

      <!-- 错误描述 -->
      <div class="space-y-4">
        <p class="text-lg text-muted-foreground leading-relaxed">
          {{ getErrorDescription(error?.statusCode) }}
        </p>

        <!-- 错误消息显示 -->
        <div v-if="error?.statusMessage" class="bg-muted/50 rounded-lg p-4 border border-border">
          <p class="text-sm text-muted-foreground mb-1">{{ $t('error.default.message', { text: '错误信息' }) || '错误信息' }}:
          </p>
          <code class="text-xs bg-background px-2 py-1 rounded border font-mono text-destructive">
            {{ error.statusMessage }}
          </code>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <UiButton @click="handleError"
          class="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors gap-2 group">
          <Icon name="lucide:home" class="w-4 h-4 group-hover:scale-110 transition-transform" />
          {{ getBackHomeText(error?.statusCode) }}
        </UiButton>

        <UiButton @click="refresh" variant="outline"
          class="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors gap-2 group">
          <Icon name="lucide:refresh-cw" class="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
          {{ getTryAgainText(error?.statusCode) }}
        </UiButton>
      </div>

      <!-- 额外信息 -->
      <div class="pt-8 border-t border-border">
        <p class="text-sm text-muted-foreground">
          {{ $t('common.meta.description') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

/**
 * 定义错误页面的属性
 * @interface Props
 * @property {NuxtError} error - Nuxt错误对象，包含状态码、消息等信息
 */
interface Props {
  error: NuxtError
}

const props = defineProps<Props>()
const { t } = useI18n()

/**
 * 根据错误状态码获取对应的图标
 * @param {number} statusCode - HTTP状态码
 * @returns {string} 图标名称
 */
const getErrorIcon = (statusCode?: number): string => {
  switch (statusCode) {
    case 404:
      return 'lucide:search-x'
    case 500:
      return 'lucide:server-crash'
    case 403:
      return 'lucide:shield-x'
    case 401:
      return 'lucide:lock'
    default:
      return 'lucide:alert-triangle'
  }
}

/**
 * 根据错误状态码获取对应的标题
 * @param {number} statusCode - HTTP状态码
 * @returns {string} 错误标题
 */
const getErrorTitle = (statusCode?: number): string => {
  switch (statusCode) {
    case 404:
      return t('error.404.title')
    case 500:
      return t('error.500.title')
    default:
      return t('error.default.title')
  }
}

/**
 * 根据错误状态码获取对应的描述
 * @param {number} statusCode - HTTP状态码
 * @returns {string} 错误描述
 */
const getErrorDescription = (statusCode?: number): string => {
  switch (statusCode) {
    case 404:
      return t('error.404.description')
    case 500:
      return t('error.500.description')
    default:
      return t('error.default.description')
  }
}

/**
 * 根据错误状态码获取返回首页按钮文本
 * @param {number} statusCode - HTTP状态码
 * @returns {string} 按钮文本
 */
const getBackHomeText = (statusCode?: number): string => {
  switch (statusCode) {
    case 404:
      return t('error.404.backHome')
    case 500:
      return t('error.500.backHome')
    default:
      return t('error.default.backHome')
  }
}

/**
 * 根据错误状态码获取重试按钮文本
 * @param {number} statusCode - HTTP状态码
 * @returns {string} 按钮文本
 */
const getTryAgainText = (statusCode?: number): string => {
  switch (statusCode) {
    case 404:
      return t('error.404.tryAgain')
    case 500:
      return t('error.500.tryAgain')
    default:
      return t('error.default.tryAgain')
  }
}

/**
 * 处理错误，清除错误状态并重定向到首页
 */
const handleError = (): void => {
  clearError({ redirect: '/' })
}

/**
 * 刷新页面
 */
const refresh = (): void => {
  if (process.client) {
    window.location.reload()
  }
}

// 设置页面元数据
useHead({
  title: () => `${getErrorTitle(props.error?.statusCode)} - ${t('common.meta.title')}`,
  meta: [
    {
      name: 'description',
      content: () => getErrorDescription(props.error?.statusCode)
    }
  ]
})
</script>

<style scoped>
/* 自定义动画 */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>