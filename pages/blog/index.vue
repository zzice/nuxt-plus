<template>
    <main class="container mx-auto px-6 py-24 max-w-6xl">
        <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Blog
            </h1>
            <p class="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
                Latest news and updates from our team
            </p>
        </div>
        
        <!-- 桌面版分类切换 -->
        <div class="mt-16 hidden md:block">
            <div class="flex items-center justify-center">
                <ToggleGroup type="single" v-model="activeCategory" class="flex-wrap justify-center bg-muted/50 rounded-xl p-1">
                    <ToggleGroupItem 
                        v-for="category in categories"
                        :key="category"
                        :value="category"
                        @click="currentPage = 1"
                        class="m-1 rounded-lg px-6 py-2 text-sm font-medium transition-all duration-200 hover:bg-primary/10 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm border border-border hover:border-primary/50 data-[state=on]:border-primary"
                    >
                        {{ category }}
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
        </div>
        
        <!-- 移动版分类切换 -->
        <div class="block md:hidden w-full mt-8">
            <button 
                type="button" 
                class="flex items-center w-full p-4 border-y text-foreground/90 cursor-pointer"
                @click="isMobileCategoriesVisible = !isMobileCategoriesVisible"
            >
                <div class="flex items-center justify-between w-full gap-4">
                    <div class="flex items-center gap-2">
                        <Icon name="lucide:layout-list" class="size-5" />
                        <span class="text-sm">分类</span>
                    </div>
                    <span class="text-sm">{{ activeCategory }}</span>
                </div>
            </button>
            <div v-if="isMobileCategoriesVisible" class="p-4 border-b">
                <ToggleGroup type="single" v-model="activeCategory" class="flex flex-col w-full space-y-2">
                    <ToggleGroupItem
                        v-for="category in categories"
                        :key="category"
                        :value="category"
                        class="justify-start text-left"
                        @click="currentPage = 1; isMobileCategoriesVisible = false"
                    >
                        {{ category }}
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
        </div>

        <div class="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            <template v-if="paginatedPosts.length > 0">
                <BlogCard v-for="post in paginatedPosts" :key="post.path" :post="post" />
            </template>
            <div v-else class="col-span-full text-center py-16">
                <p class="text-xl text-muted-foreground">No posts found in this category.</p>
            </div>
        </div>

        <div v-if="totalPages > 1" class="mt-20 flex justify-center">
            <div class="flex items-center space-x-4">
                <Button 
                    variant="outline" 
                    size="lg"
                    class="rounded-full px-6" 
                    :disabled="currentPage === 1" 
                    @click="changePage(currentPage - 1)"
                >
                    <Icon name="lucide:arrow-left" class="h-4 w-4" />
                    <span class="ml-2">Previous</span>
                </Button>
                <div class="flex items-center space-x-3">
                    <template v-for="page in totalPages" :key="page">
                        <Button 
                            :variant="currentPage === page ? 'default' : 'outline'" 
                            size="sm"
                            class="rounded-full w-10 h-10 flex items-center justify-center"
                            @click="changePage(page)"
                        >
                            {{ page }}
                        </Button>
                    </template>
                </div>
                <Button 
                    variant="outline" 
                    size="lg"
                    class="rounded-full px-6" 
                    :disabled="currentPage === totalPages" 
                    @click="changePage(currentPage + 1)"
                >
                    <span class="mr-2">Next</span>
                    <Icon name="lucide:arrow-right" class="h-4 w-4" />
                </Button>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

useSeoMeta({
    title: 'Blog',
    description: 'Latest news and updates from our team',
})

// Fetch all blog posts from the /blog directory
const { data: allPosts } = await useAsyncData('blog-posts', () =>
    queryCollection('blog').all(),
)

// 使用any类型暂时解决类型问题
const categories = computed(() => {
    if (!allPosts.value) return ['All']
    
    const uniqueCategories = [...new Set(allPosts.value.map((post: any) => post.meta.category))]
    return ['All', ...uniqueCategories]
})

const activeCategory = ref('All')
const isMobileCategoriesVisible = ref(false)

const filteredPosts = computed(() => {
    if (!allPosts.value)
        return []

    if (activeCategory.value === 'All')
        return allPosts.value

    return allPosts.value.filter((post: any) => post.meta.category === activeCategory.value)
})

// A simple pagination logic
const currentPage = ref(1)
const postsPerPage = 6
const totalPages = computed(() => Math.ceil(filteredPosts.value.length / postsPerPage))

const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * postsPerPage
    const end = start + postsPerPage
    return filteredPosts.value.slice(start, end)
})

function changePage(page: number) {
    if (page >= 1 && page <= totalPages.value)
        currentPage.value = page
}
</script>

<style scoped>
/* Apple Design inspired styling */
:deep(.blog-card) {
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
}

:deep(.blog-card:hover) {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

:deep(.blog-card img) {
    object-fit: cover;
    aspect-ratio: 16/10;
}
</style>