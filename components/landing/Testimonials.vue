<template>
  <section id="testimonials" class="py-32">
    <div class="container mx-auto px-6">
      <div class="text-center mb-20">
        <h2 class="text-4xl font-bold text-foreground mb-6">{{ $t('landing.testimonials.title') }}</h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          {{ $t('landing.testimonials.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        <!-- 用户评价卡片 1 -->
        <div class="rounded-xl border border-border p-8 shadow-sm transition-all hover:shadow-md">
          <div class="flex flex-col h-full">
            <div class="mb-8">
              <p class="text-lg text-foreground italic">
                "{{ $t('landing.testimonials.cards.card1.content') }}"
              </p>
            </div>
            <div class="mt-auto flex items-center">
              <div class="w-16 h-16 rounded-full overflow-hidden mr-5">
                <img src="https://randomuser.me/api/portraits/women/32.jpg" :alt="$t('landing.testimonials.cards.card1.name')"
                  class="w-full h-full object-cover" />
              </div>
              <div>
                <h4 class="text-lg font-medium text-foreground">{{ $t('landing.testimonials.cards.card1.name') }}</h4>
                <p class="text-base text-muted-foreground">
                  {{ $t('landing.testimonials.cards.card1.position') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 用户评价卡片 2 -->
        <div class="rounded-xl border border-border p-8 shadow-sm transition-all hover:shadow-md">
          <div class="flex flex-col h-full">
            <div class="mb-8">
              <p class="text-lg text-foreground italic">
                "{{ $t('landing.testimonials.cards.card2.content') }}"
              </p>
            </div>
            <div class="mt-auto flex items-center">
              <div class="w-16 h-16 rounded-full overflow-hidden mr-5">
                <img src="https://randomuser.me/api/portraits/men/45.jpg" :alt="$t('landing.testimonials.cards.card2.name')"
                  class="w-full h-full object-cover" />
              </div>
              <div>
                <h4 class="text-lg font-medium text-foreground">{{ $t('landing.testimonials.cards.card2.name') }}</h4>
                <p class="text-base text-muted-foreground">
                  {{ $t('landing.testimonials.cards.card2.position') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 用户评价卡片 3 -->
        <div class="rounded-xl border border-border p-8 shadow-sm transition-all hover:shadow-md">
          <div class="flex flex-col h-full">
            <div class="mb-8">
              <p class="text-lg text-foreground italic">
                "{{ $t('landing.testimonials.cards.card3.content') }}"
              </p>
            </div>
            <div class="mt-auto flex items-center">
              <div class="w-16 h-16 rounded-full overflow-hidden mr-5">
                <img src="https://randomuser.me/api/portraits/men/22.jpg" :alt="$t('landing.testimonials.cards.card3.name')"
                  class="w-full h-full object-cover" />
              </div>
              <div>
                <h4 class="text-lg font-medium text-foreground">{{ $t('landing.testimonials.cards.card3.name') }}</h4>
                <p class="text-base text-muted-foreground">
                  {{ $t('landing.testimonials.cards.card3.position') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts" setup>
/**
 * Testimonials组件
 *
 * 展示NuxtPlus的用户评价和推荐，包含：
 * - 用户头像、姓名和职位信息
 * - 用户真实评价内容
 * - 响应式设计（移动端单列，平板双列，桌面三列）
 * - 卡片式布局，带有轻微的悬停效果
 * - 主题颜色适配（使用主题变量）
 * - 无背景色设计，继承父级背景
 * - 国际化支持
 * - 优化的间距和文字大小
 */
</script>
