<template>
  <section id="testimonials" class="py-32 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-primary/5"></div>
    <div class="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-500"></div>
    <div class="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
    
    <div class="mx-auto max-w-7xl px-6 relative z-10">
      <div class="mx-auto max-w-3xl space-y-8 text-center mb-20">
        <div class="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary mb-6">
          <Icon name="lucide:heart" class="w-4 h-4" />
          用户评价
        </div>
        <h2 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-secondary to-foreground bg-clip-text text-transparent">
          {{ $t('landing.testimonials.title') }}
        </h2>
        <p class="text-xl text-muted-foreground leading-relaxed">
          {{ $t('landing.testimonials.description') }}
        </p>
      </div>

      <div class="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        <!-- 用户评价卡片 1 -->
        <div class="group relative bg-gradient-to-br from-background to-background/80 backdrop-blur-sm rounded-3xl border border-border/50 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/30">
          
          <!-- 背景光效 -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          <!-- 引用装饰 -->
          <div class="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <Icon name="lucide:quote" class="w-12 h-12 text-primary" />
          </div>
          
          <div class="relative z-10 space-y-6">
            <!-- 评价内容 -->
            <div class="space-y-4">
              <div class="flex items-center gap-1 mb-4">
                <Icon v-for="i in 5" :key="i" name="lucide:star" class="w-4 h-4 fill-current text-yellow-400" />
              </div>
              <blockquote class="text-foreground leading-relaxed text-lg font-medium italic relative">
                "{{ $t('landing.testimonials.cards.card1.content') }}"
              </blockquote>
            </div>
            
            <!-- 分隔线 -->
            <div class="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            
            <!-- 用户信息 -->
            <div class="flex items-center gap-4">
              <div class="relative">
                <div class="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-offset-2 ring-offset-background ring-primary/30 group-hover:ring-4 group-hover:ring-primary/50 transition-all duration-300">
                  <img src="https://randomuser.me/api/portraits/women/32.jpg" :alt="$t('landing.testimonials.cards.card1.name')" class="w-full h-full object-cover" />
                </div>
                <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Icon name="lucide:check" class="w-3 h-3 text-white" />
                </div>
              </div>
              
              <div class="flex-1">
                <h3 class="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                  {{ $t('landing.testimonials.cards.card1.name') }}
                </h3>
                <p class="text-muted-foreground font-medium">{{ $t('landing.testimonials.cards.card1.position') }}</p>
                <div class="flex items-center gap-2 mt-1">
                  <div class="w-2 h-2 rounded-full bg-primary"></div>
                  <span class="text-xs text-muted-foreground">认证用户</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 用户评价卡片 2 -->
        <div class="group relative bg-gradient-to-br from-background to-background/80 backdrop-blur-sm rounded-3xl border border-border/50 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/30 md:scale-105 border-primary/30 shadow-xl">
          
          <!-- 背景光效 -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          <!-- 引用装饰 -->
          <div class="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <Icon name="lucide:quote" class="w-12 h-12 text-primary" />
          </div>
          
          <div class="relative z-10 space-y-6">
            <!-- 评价内容 -->
            <div class="space-y-4">
              <div class="flex items-center gap-1 mb-4">
                <Icon v-for="i in 5" :key="i" name="lucide:star" class="w-4 h-4 fill-current text-yellow-400" />
              </div>
              <blockquote class="text-foreground leading-relaxed text-lg font-medium italic relative">
                "{{ $t('landing.testimonials.cards.card2.content') }}"
              </blockquote>
            </div>
            
            <!-- 分隔线 -->
            <div class="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            
            <!-- 用户信息 -->
            <div class="flex items-center gap-4">
              <div class="relative">
                <div class="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-offset-2 ring-offset-background ring-primary/30 group-hover:ring-4 group-hover:ring-primary/50 transition-all duration-300">
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" :alt="$t('landing.testimonials.cards.card2.name')" class="w-full h-full object-cover" />
                </div>
                <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Icon name="lucide:check" class="w-3 h-3 text-white" />
                </div>
              </div>
              
              <div class="flex-1">
                <h3 class="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                  {{ $t('landing.testimonials.cards.card2.name') }}
                </h3>
                <p class="text-muted-foreground font-medium">{{ $t('landing.testimonials.cards.card2.position') }}</p>
                <div class="flex items-center gap-2 mt-1">
                  <div class="w-2 h-2 rounded-full bg-primary"></div>
                  <span class="text-xs text-muted-foreground">认证用户</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 用户评价卡片 3 -->
        <div class="group relative bg-gradient-to-br from-background to-background/80 backdrop-blur-sm rounded-3xl border border-border/50 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2 hover:border-secondary/30">
          
          <!-- 背景光效 -->
          <div class="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          <!-- 引用装饰 -->
          <div class="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <Icon name="lucide:quote" class="w-12 h-12 text-secondary" />
          </div>
          
          <div class="relative z-10 space-y-6">
            <!-- 评价内容 -->
            <div class="space-y-4">
              <div class="flex items-center gap-1 mb-4">
                <Icon v-for="i in 5" :key="i" name="lucide:star" class="w-4 h-4 fill-current text-yellow-400" />
              </div>
              <blockquote class="text-foreground leading-relaxed text-lg font-medium italic relative">
                "{{ $t('landing.testimonials.cards.card3.content') }}"
              </blockquote>
            </div>
            
            <!-- 分隔线 -->
            <div class="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            
            <!-- 用户信息 -->
            <div class="flex items-center gap-4">
              <div class="relative">
                <div class="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-offset-2 ring-offset-background ring-secondary/30 group-hover:ring-4 group-hover:ring-secondary/50 transition-all duration-300">
                  <img src="https://randomuser.me/api/portraits/men/22.jpg" :alt="$t('landing.testimonials.cards.card3.name')" class="w-full h-full object-cover" />
                </div>
                <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                  <Icon name="lucide:check" class="w-3 h-3 text-white" />
                </div>
              </div>
              
              <div class="flex-1">
                <h3 class="font-bold text-foreground text-lg group-hover:text-secondary transition-colors duration-300">
                  {{ $t('landing.testimonials.cards.card3.name') }}
                </h3>
                <p class="text-muted-foreground font-medium">{{ $t('landing.testimonials.cards.card3.position') }}</p>
                <div class="flex items-center gap-2 mt-1">
                  <div class="w-2 h-2 rounded-full bg-secondary"></div>
                  <span class="text-xs text-muted-foreground">认证用户</span>
                </div>
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
