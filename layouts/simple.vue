<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-background to-background/90">
        <div class="container mx-auto px-4 sm:px-6 py-4">
            <button
                class="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors rounded-full px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800/60"
                @click="navigateBack">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                        clip-rule="evenodd" />
                </svg>
                返回
            </button>
        </div>
        <main class="flex-grow container mx-auto px-4 sm:px-6 py-4 flex items-center justify-center">
            <slot />
        </main>
    </div>
</template>

<script lang="ts" setup>
/**
 * 简洁布局组件
 * 只包含返回按钮和主内容区域，适用于隐私政策等需要简洁界面的页面
 */
const router = useRouter()

/**
 * 导航返回上一页
 */
const navigateBack = () => {
    router.back()
}
</script>

<style scoped></style>