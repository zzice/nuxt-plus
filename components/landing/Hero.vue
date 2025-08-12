<template>
  <section class="relative overflow-hidden min-h-screen flex items-start pt-16 ">
    <!-- 现代化渐变背景 -->
    <div class="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/20"></div>
    <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>

    <!-- 装饰性几何图形 -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000">
    </div>
    <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/15 rounded-full blur-2xl animate-bounce"></div>

    <div class="container mx-auto relative z-10">
      <div class="flex flex-col gap-10 items-center justify-start pt-4 pb-12 md:pb-16 lg:pb-20">
        <!-- 顶部标签按钮 - 重新设计 -->
        <div class="animate-fade-in-up">
          <button
            class="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 px-6 py-3 text-sm font-medium text-foreground hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {{ $t('landing.hero.newRelease') }}
            <Icon name="lucide:move-right"
              class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        <!-- 主标题区域 - 优化视觉层次 -->
        <div class="flex gap-8 flex-col items-center animate-fade-in-up delay-200">
          <h1 class="text-5xl md:text-7xl lg:text-8xl max-w-5xl text-center font-bold leading-tight">
            <span
              class="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent animate-gradient-x">
              {{ $t('landing.hero.title') }}
            </span>
            <span class="relative flex w-full justify-center text-center md:pb-6 md:pt-2 min-h-[1.5em] px-4">
              <br />
              <Transition name="title-transition" mode="out-in">
                <span :key="titleNumber"
                  class="font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent text-center max-w-full break-words">
                  {{ currentTitle }}
                </span>
              </Transition>
            </span>
          </h1>

          <p
            class="text-xl md:text-2xl leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-center font-medium">
            {{ $t('landing.hero.description') }}
          </p>
        </div>

        <!-- 按钮区域 - 现代化设计 -->
        <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
          <NuxtLink to="/#pricing">
            <button
              class="group relative inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-primary/90 px-10 py-4 text-base font-semibold text-primary-foreground shadow-2xl shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden">
              <span
                class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span class="relative flex items-center gap-3">
                {{ $t('landing.hero.getStarted') }}
                <Icon name="lucide:move-right"
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </NuxtLink>

          <a href="https://github.com/zzice/nuxt-plus" target="_blank" rel="noopener noreferrer">
            <button
              class="group inline-flex h-14 items-center justify-center rounded-2xl bg-background/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 px-10 py-4 text-base font-semibold text-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              <span class="flex items-center gap-3">
                <Icon name="lucide:github" class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                {{ $t('landing.hero.github') }}
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
/**
 * Hero组件
 * 
 * 展示网站的主要价值主张和号召性用语，包含：
 * - 主标题和副标题，带有动态切换效果
 * - 行动按钮
 * - 背景装饰元素
 */

import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

// 动态标题键名数组
const titleKeys = ['amazing', 'powerful', 'elegant', 'modern', 'smart']
const titleNumber = ref(0)
let timeoutId: number | undefined

// 获取国际化实例
const { t } = useI18n()

/**
 * 计算当前显示的标题
 * 根据当前序号与国际化键返回展示的文案
 */
const currentTitle = computed<string>(() => {
  const key = titleKeys[titleNumber.value]
  return t(`landing.hero.dynamicTitles.${key}`)
})

/**
 * 启动标题轮播定时器
 * 每 2 秒切换一次标题
 */
const startTitleRotation = (): void => {
  timeoutId = window.setInterval(() => {
    if (titleNumber.value === titleKeys.length - 1) {
      titleNumber.value = 0
    } else {
      titleNumber.value++
    }
  }, 2000)
}

onMounted(() => {
  startTitleRotation()
})

onBeforeUnmount(() => {
  if (timeoutId) {
    clearInterval(timeoutId)
  }
})
</script>

<style scoped>
/* 标题切换动画 */
.title-transition-enter-active,
.title-transition-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.title-transition-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
}

.title-transition-leave-to {
  opacity: 0;
  transform: translateY(-40px) scale(1.05);
}

/* 网格背景图案 */
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(var(--color-primary), 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(var(--color-primary), 0.08) 1px, transparent 1px);
  background-size: 32px 32px;
  animation: grid-move 20s linear infinite;
}

/* 渐变文字动画 */
@keyframes gradient-x {

  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }

  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

/* 网格移动动画 */
@keyframes grid-move {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(32px, 32px);
  }
}

/* 淡入上升动画 */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

.delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
}

.delay-1000 {
  animation-delay: 1s;
  opacity: 0;
}
</style>