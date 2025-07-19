<template>
  <SidebarGroup v-for="(group, index) in menuData" :key="index">
    <SidebarGroupLabel v-if="group.groupLabel">{{ group.groupLabel }}</SidebarGroupLabel>
    <SidebarMenu>
        <SidebarMenuItem  v-for="(menu, index) in group.menus" :key="index">
          <NuxtLinkLocale :to="menu.url" class="flex items-center gap-2">
            <SidebarMenuButton :tooltip="menu.title" :is-active="localePath(menu.url) === route.path">
                <component :is="menu.icon" v-if="menu.icon" />
                <span>{{ menu.title }}</span>
              </SidebarMenuButton>
            </NuxtLinkLocale>
        </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
<script setup lang="ts">
import { ChevronRight, type LucideIcon } from 'lucide-vue-next'

const route = useRoute()
const localePath = useLocalePath()

defineProps<{
  menuData: {
    groupLabel: string,
    menus: {
      title: string
      url: string
      icon?: LucideIcon
    }[]
  }[]
}>()

</script>