<template>
  <Dialog :open="isOpen" @update:open="setIsOpen">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{{ $t('auth.signInModal.title') }}</DialogTitle>
        <DialogDescription>
          {{ $t('auth.signInModal.description') }}
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <Button variant="outline" @click="handleSignIn('google')">
          <Icon name="logos:google-icon" class="mr-2 h-4 w-4" />
          {{ $t('auth.signInModal.google') }}
        </Button>
        <Button variant="outline" @click="handleSignIn('github')">
          <Icon name="logos:github-icon" class="mr-2 h-4 w-4" />
          {{ $t('auth.signInModal.github') }}
        </Button>
      </div>
      <DialogFooter>
        <Button type="button" variant="ghost" @click="setIsOpen(false)">
          {{ $t('common.cancel') }}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script lang="ts" setup>

/**
 * SignInModal组件
 *
 * 提供一个模态对话框，允许用户通过 Google 或 GitHub 登录。
 * @props isOpen - 控制对话框的显示状态
 * @emits update:isOpen - 更新对话框显示状态的事件
 */
const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'update:isOpen', value: boolean): void
}>()

/**
 * 设置对话框的打开状态。
 * @param value - 布尔值，true 表示打开，false 表示关闭。
 */
const setIsOpen = (value: boolean) => {
  emit('update:isOpen', value)
}

/**
 * 处理登录操作。
 * @param provider - 登录提供商（例如 'google' 或 'github'）。
 */
const handleSignIn = (provider: 'google' | 'github') => {
  // TODO: 实现实际的登录逻辑
  console.log(`Sign in with ${provider}`)
  // signIn(provider) // 调用 signIn 函数进行登录
  setIsOpen(false) // 登录后关闭弹窗
}

// 确保 $t 函数可用，通常由 i18n 插件提供
// const { t } = useI18n() // 如果项目配置了 vue-i18n
</script>