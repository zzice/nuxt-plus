<template>
  <section id="faq" class="py-32">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-20">
        <h2 class="text-4xl font-bold text-foreground mb-6">{{ $t('landing.faq.title') }}</h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">{{ $t('landing.faq.description') }}</p>
      </div>

      <div class="mx-auto max-w-4xl">
        <Accordion type="single" class="w-full space-y-4" collapsible :default-value="defaultValue">
          <AccordionItem 
            v-for="(item, key) in faqItems" 
            :key="key" 
            :value="key"
            class="border-border rounded-lg px-6 py-2"
          >
            <AccordionTrigger class="text-left text-lg font-medium">
              {{ $t(`landing.faq.items.${key}.question`) }}
            </AccordionTrigger>
            <AccordionContent class="text-lg text-muted-foreground pt-2">
              {{ $t(`landing.faq.items.${key}.answer`) }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

/**
 * FAQ组件
 * 
 * 展示网站的常见问题和解答，包含：
 * - 使用 Shadcn Vue 的 Accordion 组件
 * - 响应式设计
 * - 国际化支持
 * - 优化的间距和文字大小
 */

// 默认展开第一个问题
const defaultValue = 'what'

// FAQ 项目键名列表
const faqItems = {
  what: {},
}
</script>