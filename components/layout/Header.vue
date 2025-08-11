<template>
  <header class="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
    <!-- 顶部装饰线 -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    
    <nav :data-state="isMobileMenuOpen && 'active'" class="group">
      <div class="mx-auto max-w-6xl px-6 transition-all duration-300">
        <div class="relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0 lg:py-5">
          <!-- Logo和移动端菜单按钮区域 -->
          <div class="flex w-full items-center justify-between gap-12 lg:w-auto">
            <!-- Logo区域 -->
            <NuxtLinkLocale to="/" aria-label="home" class="group flex items-center space-x-3 transition-all duration-300 hover:scale-105">
              <div class="relative">
                <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img src="/logo.png" alt="Logo" class="size-6 rounded-md" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </div>
              <span class="font-bold text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">NuxtPlus</span>
            </NuxtLinkLocale>

            <!-- 移动端菜单按钮 -->
            <button 
              @click="toggleMobileMenu" 
              :aria-label="isMobileMenuOpen ? 'Close Menu' : 'Open Menu'"
              class="group relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden rounded-xl hover:bg-primary/10 transition-all duration-300">
              <Icon 
                name="lucide:menu" 
                size="24" 
                class="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 group-hover:scale-110" 
                v-if="!isMobileMenuOpen" 
              />
              <Icon 
                name="lucide:x" 
                size="24" 
                class="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" 
                v-if="isMobileMenuOpen" 
              />
            </button>

            <!-- 桌面端导航菜单 -->
            <div class="hidden lg:block">
              <ul class="flex gap-2 text-sm">
                <li v-for="link in navLinks" :key="link.href">
                  <NuxtLinkLocale 
                    :to="link.href" 
                    class="relative px-4 py-2 rounded-xl font-medium transition-all duration-300 text-foreground/70 hover:text-foreground hover:bg-primary/10 hover:shadow-sm group block">
                    <span class="relative z-10">{{ $t(link.name) }}</span>
                    <div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </NuxtLinkLocale>
                </li>
              </ul>
            </div>
          </div>

          <!-- 右侧功能区和移动端菜单 -->
          <div class="bg-background/95 backdrop-blur-xl group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-border/20 p-6 shadow-2xl shadow-primary/10 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
            <!-- 移动端导航菜单 -->
            <div class="lg:hidden">
              <ul class="space-y-4 text-base">
                <li v-for="link in navLinks" :key="link.href">
                  <NuxtLinkLocale 
                    :to="link.href" 
                    class="group flex items-center px-4 py-3 text-foreground/70 hover:text-foreground transition-all duration-300 rounded-xl hover:bg-primary/10 block"
                    @click="isMobileMenuOpen = false">
                    <span class="relative z-10">{{ $t(link.name) }}</span>
                    <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </NuxtLinkLocale>
                </li>
              </ul>
            </div>

            <!-- 登录/注册按钮或用户信息 -->
            <div class="flex w-full flex-col space-y-4 sm:flex-row sm:gap-4 sm:space-y-0 md:w-fit">
              <!-- 语言和主题切换 -->
              <div class="flex items-center space-x-3">
                <div class="p-2 rounded-xl hover:bg-primary/10 transition-all duration-300">
                  <LocaleToggle />
                </div>
                <div class="p-2 rounded-xl hover:bg-primary/10 transition-all duration-300">
                  <ModeToggle />
                </div>
              </div>

              <!-- 未登录状态 -->
              <div v-if="!user" class="flex flex-col sm:flex-row gap-3">
                <NuxtLinkLocale to="/login">
                  <Button class="group relative overflow-hidden transition-all duration-300 hover:scale-105">
                    <span class="relative z-10">{{ $t('auth.signIn') }}</span>
                    <div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </NuxtLinkLocale>
              </div>

              <!-- 已登录状态 -->
              <div v-if="user" class="flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger class="focus:outline-none group">
                    <div class="flex items-center p-1 rounded-xl hover:bg-primary/10 transition-all duration-300">
                      <div v-if="defaultAvatar.type === 'image'" class="h-10 w-10 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-primary/50 transition-all duration-300">
                        <img :src="defaultAvatar.content" :alt="user.email"
                          class="h-full w-full object-cover cursor-pointer" />
                      </div>
                      <div v-else
                        class="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-medium text-lg ring-2 ring-transparent group-hover:ring-primary/50 cursor-pointer transition-all duration-300 group-hover:scale-105">
                        <User class="w-5 h-5" />
                      </div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent class="w-64 p-2 bg-background/95 backdrop-blur-xl border-border/20">
                    <DropdownMenuLabel>
                      <div class="flex flex-col py-2">
                        <p class="text-base font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">{{ user.name || user.email }}</p>
                        <p class="text-sm text-muted-foreground mt-1">{{ user.email }}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator class="bg-border/20" />
                    <NuxtLinkLocale to="/dashboard">
                      <DropdownMenuItem class="py-3 cursor-pointer rounded-lg hover:bg-primary/10 transition-all duration-300 group">
                        <LayoutDashboard class="w-4 h-4 mr-3 group-hover:text-primary transition-colors duration-300" />
                        <span class="text-sm font-medium">{{ $t('common.dashboard') }}</span>
                      </DropdownMenuItem>
                    </NuxtLinkLocale>
                    <DropdownMenuSeparator class="bg-border/20" />
                    <DropdownMenuItem @click="handleSignOut" class="py-3 cursor-pointer rounded-lg hover:bg-destructive/10 transition-all duration-300 group">
                      <LogOut class="w-4 h-4 mr-3 group-hover:text-destructive transition-colors duration-300" />
                      <span class="text-sm font-medium group-hover:text-destructive transition-colors duration-300">{{ $t('auth.signOut') }}</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {
  LayoutDashboard,
  LogOut,
  User
} from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/stores/user'

const supabase = useSupabaseClient()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)

// 计算默认头像显示
const defaultAvatar = computed(() => {
  if (user.value?.avatar) {
    return {
      type: 'image',
      content: user.value.avatar
    }
  }
  // 使用Lucide的User图标
  return {
    type: 'icon'
  }
})

const navLinks = [
  { name: 'landing.features.title', href: '/#features' },
  { name: 'landing.pricing.title', href: '/#pricing' },
  { name: 'footer.company.blog', href: '/blog' },
  { name: 'showcase.title', href: '/showcase' },
  { name: 'landing.testimonials.title', href: '/#testimonials' },
  { name: 'landing.faq.title', href: '/#faq' },
]

/**
 * 控制移动端菜单的显示状态
 */
const isMobileMenuOpen = ref(false)

/**
 * 切换移动端菜单的显示状态
 */
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

/**
 * 处理用户登出
 */
const handleSignOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    // 刷新页面
    window.location.reload()
  } catch (error) {
    console.error('Error signing out:', error)
    // 处理错误，例如显示通知
  }
}
</script>