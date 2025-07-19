<template>
  <!-- 主题切换 -->
  <button @click="toggleMode"
    class="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer">
    <Icon name="lucide:moon" size="16" class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Icon name="lucide:sun" size="16" class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span class="sr-only">切换主题</span>
  </button>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

/**
 * 切换主题模式
 * 在light和dark模式之间切换
 */
const toggleMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<style></style>