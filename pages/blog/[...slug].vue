<template>
  <main v-if="page" class="py-16 bg-background">
    <div class="container mx-auto max-w-6xl py-8 px-4 sm:px-6 lg:px-8">
      <!-- 左右布局开始 -->
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- 左侧：图片、标题、内容的垂直布局 -->
        <div class="w-full lg:w-2/3">
          <!-- 特色图片 -->
          <div v-if="page.meta?.image?.src" class="mb-8">
            <img
              :src="page.meta.image.src"
              :alt="page.meta.image.alt || page.title"
              class="w-full rounded-2xl object-cover shadow-md"
              style="max-height: 450px;"
            >
          </div>

          <!-- 文章标题区域 -->
          <header class="mb-10">
            <h1 class="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl mb-4">
              {{ page.title }}
            </h1>
            <div v-if="page.description" class="mt-4 text-xl text-muted-foreground font-light">
              {{ page.description }}
            </div>
          </header>

          <!-- 文章内容 -->
          <div class="mt-8">
            <article>
              <div class="w-full overflow-x-hidden">
                <ContentRenderer
                  :value="page"
                  :prose="true"
                  class="prose-lg dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-primary dark:prose-a:text-primary prose-code:text-primary dark:prose-code:text-primary prose-pre:bg-muted dark:prose-pre:bg-muted/80 prose-pre-code:text-foreground dark:prose-pre-code:text-foreground prose-img:rounded-lg prose-img:shadow-sm prose-pre:overflow-x-auto"
                />
              </div>
            </article>
          </div>

          <!-- 上一篇/下一篇导航 -->
          <footer v-if="surround && (surround[0] || surround[1])" class="mt-16">
            <div class="flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:justify-between">
              <NuxtLink
                v-if="surround[0]"
                :to="surround[0].path"
                class="group block w-full transition-colors"
              >
                <span class="text-sm text-muted-foreground font-medium">{{ $t('blog.prevPost') }}</span>
                <p class="mt-1 text-lg font-medium text-foreground group-hover:text-primary">{{ surround[0].title }}</p>
              </NuxtLink>
              <NuxtLink
                v-if="surround[1]"
                :to="surround[1].path"
                class="group block w-full text-right transition-colors"
              >
                <span class="text-sm text-muted-foreground font-medium">{{ $t('blog.nextPost') }}</span>
                <p class="mt-1 text-lg font-medium text-foreground group-hover:text-primary">{{ surround[1].title }}</p>
              </NuxtLink>
            </div>
          </footer>
        </div>

        <!-- 右侧：作者信息、分类和TOC目录 -->
        <div class="w-full lg:w-1/3">
          <div class="sticky top-24 space-y-10">
            <!-- 作者信息卡片 -->
            <div v-if="page.meta?.author" class="px-6 py-6 rounded-2xl bg-card backdrop-blur-sm shadow-sm">
              <div class="flex items-center space-x-4 mb-3">
                <img v-if="page.meta.author.avatar" :src="page.meta.author.avatar" alt="author avatar" class="h-14 w-14 rounded-full ring-2 ring-white dark:ring-gray-800">
                <div class="min-w-0">
                  <h3 class="font-medium text-lg text-foreground truncate">{{ page.meta.author.name }}</h3>
                  <p v-if="page.meta.date" class="text-sm text-muted-foreground whitespace-nowrap">
                    {{ $t('blog.publishedOn') }} {{ formatDate(page.meta.date) }}
                  </p>
                </div>
              </div>
              <p v-if="page.meta.author.bio" class="text-card-foreground text-sm mt-2">{{ page.meta.author.bio }}</p>
            </div>

            <!-- 文章分类 -->
            <div v-if="page.meta?.category" class="px-6 py-6 rounded-2xl bg-card backdrop-blur-sm shadow-sm">
              <h3 class="font-medium text-lg mb-4 text-foreground">{{ $t('blog.category') }}</h3>
              <div class="inline-block px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium rounded-full">
                {{ page.meta.category }}
              </div>
            </div>

            <!-- 文章目录 TOC -->
            <div v-if="page.body?.toc?.links?.length" class="px-6 py-6 rounded-2xl bg-card backdrop-blur-sm shadow-sm">
              <h3 class="font-medium text-lg mb-4 text-foreground">{{ $t('blog.tableOfContents') }}</h3>
              <nav>
                <ul class="space-y-3">
                  <li v-for="link in page.body.toc.links" :key="link.id">
                    <a 
                      :href="`#${link.id}`" 
                      class="text-muted-foreground hover:text-primary block transition-colors"
                      @click.prevent="scrollToHeading(link.id)"
                    >
                      {{ link.text }}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <div v-else class="py-16 text-center">
    <p class="text-lg">
      {{ $t('blog.notFound') }}
    </p>
    <NuxtLink to="/blog" class="mt-4 inline-block text-primary hover:underline">
      {{ $t('blog.backToBlog') }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()

// 定义正确的类型接口，解决类型错误
interface BlogMeta {
  date?: string;
  image?: {
    src?: string;
    alt?: string;
  };
  author?: {
    name?: string;
    avatar?: string;
    bio?: string;
  };
  category?: string;
}

interface BlogPage {
  title: string;
  description?: string;
  meta: BlogMeta;
  body?: {
    toc?: {
      links?: Array<{
        id: string;
        text: string;
      }>;
    };
  };
}

// 修改查询路径，处理语言前缀问题
const contentPath = computed(() => {
  // 从当前路径中移除语言前缀 (如 /zh/blog/slug -> /blog/slug)
  const path = route.path
  const localePrefix = locale.value !== 'en' ? `/${locale.value}` : ''
  return path.startsWith(localePrefix) ? path.substring(localePrefix.length) : path
})

const { data: page } = await useAsyncData<BlogPage | null>(route.path, () => queryCollection('blog').path(contentPath.value).first())

// Fetch previous and next post using the new queryCollectionItemSurroundings API
const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings(
    'blog',
    contentPath.value, // 使用处理后的路径
    {
      fields: ['path', 'title', 'description'],
    },
  ),
)

if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

// Set SEO meta
useSeoMeta({
  title: () => page.value?.title || 'Blog Post',
  description: () => page.value?.description || 'A post from our blog',
  ogImage: () => page.value?.meta?.image?.src,
  twitterCard: 'summary_large_image',
})

// 格式化日期辅助函数，避免直接在模板中处理
const formatDate = (dateString?: string) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString(locale.value, { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

// 处理锚点平滑滚动并考虑header高度
const scrollToHeading = (id: string) => {
  // 延迟执行，确保DOM已更新
  setTimeout(() => {
    const element = document.getElementById(id)
    if (element) {
      // 获取header的高度，假设固定是64px，根据实际情况调整
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, 100)
}
</script>

<style>
/* 为标题元素添加滚动边距，避免被固定header遮挡 */
.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  scroll-margin-top: 80px; /* 与headerOffset保持一致 */
  font-weight: 500;
  color: hsl(var(--foreground));
  margin-top: 1.5em;
  margin-bottom: 0.75em;
}

.dark .prose h1,
.dark .prose h2,
.dark .prose h3,
.dark .prose h4,
.dark .prose h5,
.dark .prose h6 {
  color: hsl(var(--foreground));
}

/* 苹果风格的排版优化 */
.prose {
  line-height: 1.7;
  font-feature-settings: "liga" 1, "kern" 1;
  text-rendering: optimizeLegibility;
  font-weight: 400;
}

/* Apple Design 风格的段落间距 */
.prose p {
  margin-bottom: 1.2em;
  font-size: 1.1rem;
  letter-spacing: -0.011em;
}

/* Apple Design 风格的链接样式 */
.prose a {
  font-weight: 500;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  transition: color 0.2s ease;
}

/* 优化代码块 */
.prose pre {
  border-radius: 12px;
  padding: 1.25rem;
  margin: 1.5rem 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* 优化引用块 */
.prose blockquote {
  font-style: normal;
  border-left-width: 2px;
  border-radius: 0.125rem;
  padding: 0.75rem 1rem;
  color: hsl(var(--muted-foreground));
  background-color: hsl(var(--muted)/30%);
}

.dark .prose blockquote {
  border-left-color: hsl(var(--primary));
  background-color: hsl(var(--muted)/20%);
  color: hsl(var(--muted-foreground));
}

.prose .shiki {
  -webkit-overflow-scrolling: touch;
  padding: 1.25rem;
  background-color: hsl(var(--muted)); 
}

/* 确保 shiki 代码块在暗黑模式下有正确的背景色 */
.dark .prose .shiki {
  background-color: hsl(var(--muted)/80%) !important;
}
</style> 