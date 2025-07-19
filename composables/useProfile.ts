import { toast } from 'vue-sonner'
import type { User } from '~/types/user'

export const useProfile = () => {
  const { t } = useI18n()
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)
  const supabase = useSupabaseClient()

  const name = ref('')
  const isUpdatingName = ref(false)
  const isUploadingAvatar = ref(false)

  // 初始化姓名
  watch(user, (newUser) => {
    if (newUser)
      name.value = newUser.name || ''
  }, { immediate: true })

  // 更新用户姓名
  async function updateName() {
    if (!user.value || !name.value || name.value === user.value.name)
      return
    
    if (name.value.length < 3 || name.value.length > 30) {
      toast.error(t('profile.name.validation.length'))
      return
    }
    
    isUpdatingName.value = true
    try {
      const { error } = await supabase.auth.updateUser({
        data: { name: name.value, displayName: name.value },
      })
      
      if (error)
        throw error
        
      await supabase.auth.refreshSession()
      toast.success(t('profile.name.success'))
    }
    catch (error) {
      toast.error(t('profile.name.error'))
      console.error('Error updating name:', error)
    }
    finally {
      isUpdatingName.value = false
    }
  }

  // 上传头像
  async function uploadAvatar(file: File) {
    if (!user.value || !file)
      return

    const fileName = `${user.value.id}-${Date.now()}`

    isUploadingAvatar.value = true
    try {
      // 1. Upload to storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(fileName, file)

      if (uploadError)
        throw uploadError

      // 2. Get public URL
      const { data: urlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(uploadData.path)

      // 3. Update user metadata
      const { error: updateError } = await supabase.auth.updateUser({
        data: { avatar: urlData.publicUrl },
      })

      if (updateError)
        throw updateError

      // Refresh user session to get the latest user data
      await supabase.auth.refreshSession()
      toast.success(t('profile.avatar.success'))
    }
    catch (error) {
      toast.error(t('profile.avatar.error'))
      console.error('Error uploading avatar:', error)
    }
    finally {
      isUploadingAvatar.value = false
    }
  }

  return {
    name,
    isUpdatingName,
    isUploadingAvatar,
    updateName,
    uploadAvatar
  }
} 