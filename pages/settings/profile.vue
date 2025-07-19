<template>
  <div class="container mx-auto max-w-6xl px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>{{ $t('profile.avatar.title') }}</CardTitle>
          <CardDescription>{{ $t('profile.avatar.description') }}</CardDescription>
        </CardHeader>
        <CardContent class="flex items-center space-x-4">
          <Avatar size="lg">
            <AvatarImage v-if="user?.avatar" :src="user.avatar" alt="Avatar" />
            <AvatarFallback class="bg-teal-500 text-white">
              <Icon name="lucide:user" class="w-6 h-6" />
            </AvatarFallback>
          </Avatar>
          <Button variant="outline" :disabled="isUploadingAvatar" @click="triggerFileInput">
            <Icon name="lucide:upload" class="w-4 h-4 mr-2" />
            <span v-if="isUploadingAvatar">{{ $t('profile.avatar.uploading') }}</span>
            <span v-else>{{ $t('profile.avatar.upload') }}</span>
          </Button>
          <input ref="fileInput" type="file" accept="image/*" class="hidden" @change="handleFileChange">
        </CardContent>
        <CardFooter>
          <p class="text-sm text-muted-foreground">{{ $t('profile.avatar.note') }}</p>
        </CardFooter>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>{{ $t('profile.name.title') }}</CardTitle>
          <CardDescription>{{ $t('profile.name.description') }}</CardDescription>
        </CardHeader>
        <CardContent>
          <Input v-model="name" />
        </CardContent>
        <CardFooter class="flex justify-between items-center">
          <p class="text-sm text-muted-foreground">{{ $t('profile.name.note') }}</p>
          <Button :disabled="isUpdatingName" @click="updateName">
            <span v-if="isUpdatingName">{{ $t('profile.name.saving') }}</span>
            <span v-else>{{ $t('profile.name.save') }}</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>

const { t } = useI18n()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const fileInput = ref<HTMLInputElement | null>(null)

// 使用抽离的个人资料composable
const { 
  name, 
  isUpdatingName, 
  isUploadingAvatar, 
  updateName, 
  uploadAvatar 
} = useProfile()

// 触发文件上传输入框
function triggerFileInput() {
  fileInput.value?.click()
}

// 处理文件选择
function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  if (!input.files || input.files.length === 0)
    return

  const file = input.files[0]
  uploadAvatar(file)
}

// 页面元数据
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

// 页面标题
useHead({
  title: t('common.profile'),
})
</script>

<style>

</style>