<template>
  <header>
    <nav :data-state="isMobileMenuOpen && 'active'" class="group bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl">
      <div class="mx-auto max-w-6xl px-6 transition-all duration-300">
        <div class="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
          <!-- Logo和移动端菜单按钮区域 -->
          <div class="flex w-full items-center justify-between gap-12 lg:w-auto">
            <!-- Logo区域 -->
            <NuxtLinkLocale to="/" aria-label="home" class="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" class="size-8 rounded-md" />
              <span class="font-bold text-base sm:text-lg">NuxtPlus</span>
            </NuxtLinkLocale>

            <!-- 移动端菜单按钮 -->
            <button 
              @click="toggleMobileMenu" 
              :aria-label="isMobileMenuOpen ? 'Close Menu' : 'Open Menu'"
              class="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
              <Icon 
                name="lucide:menu" 
                size="24" 
                class="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" 
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
              <ul class="flex gap-8 text-sm">
                <li v-for="link in navLinks" :key="link.href">
                  <NuxtLinkLocale 
                    :to="link.href" 
                    class="text-muted-foreground hover:text-accent-foreground block duration-150">
                    {{ $t(link.name) }}
                  </NuxtLinkLocale>
                </li>
              </ul>
            </div>
          </div>

          <!-- 右侧功能区和移动端菜单 -->
          <div class="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
            <!-- 移动端导航菜单 -->
            <div class="lg:hidden">
              <ul class="space-y-6 text-base">
                <li v-for="link in navLinks" :key="link.href">
                  <NuxtLinkLocale 
                    :to="link.href" 
                    class="text-muted-foreground hover:text-accent-foreground block duration-150"
                    @click="isMobileMenuOpen = false">
                    {{ $t(link.name) }}
                  </NuxtLinkLocale>
                </li>
              </ul>
            </div>

            <!-- 登录/注册按钮或用户信息 -->
            <div class="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
              <!-- 语言切换 -->
              <LocaleToggle />
              <!-- 主题切换 -->
              <ModeToggle />

              <!-- 未登录状态 -->
              <div v-if="!user" class="flex flex-col sm:flex-row gap-3">
                <NuxtLinkLocale to="/login">
                  <Button >
                    {{ $t('auth.signIn') }}
                  </Button>
                </NuxtLinkLocale>
              </div>

              <!-- 已登录状态 -->
              <div v-if="user" class="flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger class="focus:outline-none">
                    <div class="flex items-center">
                      <div v-if="defaultAvatar.type === 'image'" class="h-10 w-10 rounded-full overflow-hidden">
                        <img :src="defaultAvatar.content" :alt="user.email"
                          class="h-full w-full object-cover hover:ring-2 hover:ring-primary cursor-pointer" />
                      </div>
                      <div v-else
                        class="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-lg hover:ring-2 hover:ring-primary cursor-pointer">
                        <User class="w-5 h-5" />
                      </div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent class="w-64 p-2">
                    <DropdownMenuLabel>
                      <div class="flex flex-col py-1">
                        <p class="text-base font-medium">{{ user.name || user.email }}</p>
                        <p class="text-sm text-muted-foreground mt-1">{{ user.email }}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <NuxtLinkLocale to="/dashboard">
                      <DropdownMenuItem class="py-2 cursor-pointer">
                        <LayoutDashboard class="w-4 h-4 mr-3" />
                        <span class="text-sm">{{ $t('common.dashboard') }}</span>
                      </DropdownMenuItem>
                    </NuxtLinkLocale>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem @click="handleSignOut" class="py-2 cursor-pointer">
                      <LogOut class="w-4 h-4 mr-3" />
                      <span class="text-sm">{{ $t('auth.signOut') }}</span>
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