<script setup lang="ts">
import {
  Command,
  // LayoutDashboard, // Removed as it's now passed as a prop
  // SquareTerminal, // Removed as it's now passed as a prop
} from 'lucide-vue-next'
import type { SidebarProps } from '../ui/sidebar';
import { LayoutSidebarUser } from '#components';

// Define a type for the nav data prop
interface NavItem {
  groupLabel: string;
  menus: Array<{
    title: string;
    url: string;
    icon: any; // Or a more specific type if available
  }>;
}

interface NavData extends Array<NavItem> {}

const props = withDefaults(defineProps<SidebarProps & { navData: NavData }>(), {
  // 侧边栏位置，可选值：left（左侧）或 right（右侧）
  side: 'left',
  // 侧边栏变体，可选值：sidebar（标准侧边栏）、floating（浮动侧边栏）或 inset（内嵌侧边栏）
  variant: 'inset',
  // 侧边栏折叠方式，可选值：offcanvas（抽屉式）、icon（仅图标）或 none（不可折叠）
  collapsible: 'icon',
})

// const data = { // Removed as nav data is now a prop
//   nav: [
//     {
//       groupLabel: '',
//       menus: [
//         {
//           title: 'Dashboard',
//           url: '/dashboard',
//           icon: LayoutDashboard,
//         }
//       ]
//     },
//     {
//       groupLabel: 'Platform',
//       menus: [
//         {
//           title: 'Playground',
//           url: '/playground',
//           icon: SquareTerminal,
//         }
//       ]
//     }
//   ],
// }
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" as-child>
            <NuxtLinkLocale to="/">
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Command class="size-4" />
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">NuxtPlus</span>
                <span class="truncate text-xs">Dashboard</span>
              </div>
            </NuxtLinkLocale>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <NavMain :menu-data="props.navData" />
    </SidebarContent>
    <SidebarFooter>
      <LayoutSidebarUser />
    </SidebarFooter>
  </Sidebar>
</template>
