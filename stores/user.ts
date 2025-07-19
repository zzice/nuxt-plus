import { ref, watchEffect } from 'vue'
import { useSupabaseClient } from '#imports'


// 定义我们自己应用中的用户类型
export type AppUser = {
  id: string
  email?: string
  // 如果您的 Supabase 用户表中有 `user_metadata` 包含 name 和 avatar
  name?: string
  avatar?: string
  // 根据您的具体需求添加更多字段
}

export const useUserStore = defineStore('user', () => {
  const supabaseUser = useSupabaseUser()
  const user = ref<AppUser | null>(null)
  const supabase = useSupabaseClient()

  watchEffect(async () => {
    const currentSupabaseUser = supabaseUser.value
    if (currentSupabaseUser) {
      const metadata = currentSupabaseUser.user_metadata as { name?: string; avatar?: string; avatar_url?: string } | undefined

      // 如果存在来自社交媒体的 avatar_url 但不存在自定义的 avatar，则进行统一
      if (metadata?.avatar_url && !metadata.avatar) {
        const { error } = await supabase.auth.updateUser({
          data: { avatar: metadata.avatar_url },
        })

        if (error) {
          console.error('Error unifying avatar from social provider:', error)
        }
        // updateUser 会触发 supabaseUser 的更新, watchEffect 会重新运行
        // 届时 metadata.avatar 将存在，此 if 条件为 false，不会造成无限循环
      }

      // 假设 SupabaseUser 有 email 和 id
      // 并假设 user_metadata (如果存在) 是一个对象
      user.value = {
        id: currentSupabaseUser.id,
        email: currentSupabaseUser.email,
        name: metadata?.name,
        // 优先使用自定义头像，否则回退到社交头像
        avatar: metadata?.avatar || metadata?.avatar_url,
      }
    }
    else {
      user.value = null
    }
  })

  return {
    user,
  }
}) 