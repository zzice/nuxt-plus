<template>
  <div class="container mx-auto px-4 py-8">
    <!-- 统计卡片区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <!-- 总收入卡片 -->
      <Card class="bg-white p-6">
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="text-muted-foreground text-sm">总收入</span>
            <span class="text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              +12.5%
            </span>
          </div>
          <div class="text-4xl font-bold">$1,250.00</div>
          <div class="flex items-center text-xs text-muted-foreground mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            <span>本月呈上升趋势</span>
          </div>
          <div class="text-xs text-muted-foreground">过去6个月的访问量</div>
        </div>
      </Card>

      <!-- 新客户卡片 -->
      <Card class="bg-white p-6">
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="text-muted-foreground text-sm">新客户</span>
            <span class="text-red-600 text-xs font-medium bg-red-50 px-2 py-1 rounded-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              -20%
            </span>
          </div>
          <div class="text-4xl font-bold">1,234</div>
          <div class="flex items-center text-xs text-muted-foreground mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
              <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
              <polyline points="17 18 23 18 23 12"></polyline>
            </svg>
            <span>本期下降20%</span>
          </div>
          <div class="text-xs text-muted-foreground">获客需要关注</div>
        </div>
      </Card>

      <!-- 活跃账户卡片 -->
      <Card class="bg-white p-6">
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="text-muted-foreground text-sm">活跃账户</span>
            <span class="text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              +12.5%
            </span>
          </div>
          <div class="text-4xl font-bold">45,678</div>
          <div class="flex items-center text-xs text-muted-foreground mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            <span>用户留存强劲</span>
          </div>
          <div class="text-xs text-muted-foreground">参与度超过目标</div>
        </div>
      </Card>

      <!-- 增长率卡片 -->
      <Card class="bg-white p-6">
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="text-muted-foreground text-sm">增长率</span>
            <span class="text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              +4.5%
            </span>
          </div>
          <div class="text-4xl font-bold">4.5%</div>
          <div class="flex items-center text-xs text-muted-foreground mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
            <span>稳定表现</span>
          </div>
          <div class="text-xs text-muted-foreground">符合增长预期</div>
        </div>
      </Card>
    </div>

  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

useHead({
  title: t('common.dashboard'),
})

</script>

<style>

</style>