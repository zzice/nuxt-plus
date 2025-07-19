<template>
   <SidebarProvider>
    <LayoutSidebar :nav-data="data.nav" />
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <template v-if="currentMenu?.groupLabel">
                <BreadcrumbItem class="hidden md:block">
                  {{ currentMenu.groupLabel }}
                </BreadcrumbItem>
                <BreadcrumbSeparator class="hidden md:block" />
              </template>
              <BreadcrumbItem>
                <BreadcrumbPage>{{ currentMenu?.menu?.title }}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <slot/>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>

<script lang="ts" setup>
import {
  LayoutDashboard,
  User,
} from 'lucide-vue-next'

const route = useRoute()
const localePath = useLocalePath()

// 添加 noindex meta 标记，防止搜索引擎索引 dashboard 页面
useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

const data = {
  nav: [
    {
      groupLabel: '',
      menus: [
        {
          title: 'Dashboard',
          url: '/dashboard',
          icon: LayoutDashboard,
        }
      ]
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          title: 'Profile',
          url: '/settings/profile',
          icon: User,
        }
      ]
    }
  ],
}

const currentMenu = computed(() => {
  const currentPath = route.path
  return data.nav.map(group => ({
    groupLabel: group.groupLabel,
    menu: group.menus.find(menu => localePath(menu.url) === currentPath)
  })).find(item => item.menu)
})

</script>

<style>

</style>