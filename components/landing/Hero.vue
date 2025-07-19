<template>
  <section class="relative overflow-hidden bg-background">

    <div class="container mx-auto">
      <div class="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <!-- 顶部标签按钮 -->
        <div>
          <button class="inline-flex items-center gap-4 rounded-md bg-secondary px-4 py-2 text-sm font-medium">
            {{ $t('landing.hero.newRelease') }}
            <Icon name="lucide:move-right" class="w-4 h-4" />
          </button>
        </div>

        <!-- 主标题区域 - 居中 -->
        <div class="flex gap-4 flex-col">
          <h1 class="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
            <span class="text-primary font-bold">{{ $t('landing.hero.title') }}</span>
            <span class="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
              <br />
              <Transition v-for="(title, index) in titles" :key="index" name="title-transition" mode="out-in">
                <span v-if="titleNumber === index" class="absolute font-semibold">
                  {{ title }}
                </span>
              </Transition>
            </span>
          </h1>

          <p class="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            {{ $t('landing.hero.description') }}
          </p>
        </div>

        <!-- 按钮区域 - 居中 -->
        <div class="flex flex-row gap-3">
          <NuxtLink to="/#pricing">
            <button
            class="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-4">
            {{ $t('landing.hero.getStarted') }}
            <Icon name="lucide:move-right" class="w-4 h-4" />
          </button>
          </NuxtLink>
          
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

import { ref, onMounted, onBeforeUnmount } from 'vue'

// 动态标题数组
const titles = ['amazing', 'new', 'wonderful', 'beautiful', 'smart']
const titleNumber = ref(0)
let timeoutId: number | undefined

// 设置标题切换定时器
const startTitleRotation = () => {
  timeoutId = window.setInterval(() => {
    if (titleNumber.value === titles.length - 1) {
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
.title-transition-enter-active,
.title-transition-leave-active {
  transition: all 0.5s ease;
}

.title-transition-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.title-transition-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  background-size: 24px 24px;
}
</style>