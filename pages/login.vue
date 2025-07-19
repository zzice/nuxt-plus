<template>
  <div class="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-background to-background/90">
    <div class="w-full sm:min-w-md space-y-8 backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-800">
      <!-- 网站名称和标题 -->
      <div class="text-center space-y-2">
        <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-primary">{{ projectName }}</h1>
        <h2 class="mt-1 text-lg sm:text-xl font-semibold tracking-tight">{{ $t('auth.signIn') }}</h2>
        <p class="text-sm text-muted-foreground">{{ $t('auth.signInModal.description') }}</p>
      </div>

      <!-- 登录表单 -->
      <div class="mt-8 space-y-6">
        <!-- 社交登录按钮 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button variant="outline" class="w-full text-sm py-5 transition-all hover:scale-[1.02] hover:shadow-md" @click="handleSignIn('google')">
            <Icon name="logos:google-icon" size="18" class="mr-2" />
            {{ $t('auth.signInModal.google') }}
          </Button>
          <Button variant="outline" class="w-full text-sm py-5 transition-all hover:scale-[1.02] hover:shadow-md" @click="handleSignIn('github')">
            <Icon name="logos:github-icon" size="18" class="mr-2" />
            {{ $t('auth.signInModal.github') }}
          </Button>
        </div>

        <!-- 分隔线 -->
        <div class="relative my-4">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-white/50 dark:bg-gray-950/50 px-3 text-muted-foreground">{{ $t('auth.or') }}</span>
          </div>
        </div>

        <form @submit="onSubmit" class="space-y-4">
          <!-- 邮箱输入框 -->
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel class="text-foreground/90 font-medium">{{ $t('auth.email') }}</FormLabel>
              <FormControl>
                <Input type="email" :placeholder="$t('auth.emailPlaceholder')" autocomplete="email"
                  class="py-4 transition-all focus:ring-2 focus:ring-primary/20" v-bind="componentField" />
              </FormControl>
              <FormMessage class="text-destructive text-sm" />
            </FormItem>
          </FormField>

          <!-- 密码输入框 -->
          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel class="text-foreground/90 font-medium">{{ $t('auth.password') }}</FormLabel>
              <FormControl>
                <Input type="password" :placeholder="$t('auth.passwordPlaceholder')" autocomplete="current-password"
                  class="py-4 transition-all focus:ring-2 focus:ring-primary/20" v-bind="componentField" />
              </FormControl>
              <FormMessage class="text-destructive text-sm" />
            </FormItem>
          </FormField>
          <!-- 登录按钮 -->
          <Button type="submit" class="w-full py-5 text-base font-medium mt-2 transition-all hover:scale-[1.02] hover:shadow-md">
            {{ $t('auth.signIn') }}
          </Button>
        </form>

        <!-- 注册链接 -->
        <div class="text-center mt-4">
          <p>
            {{ $t('auth.noAccount') }}
            <NuxtLinkLocale to="/register" class="font-medium text-primary hover:text-primary/90 transition-colors">
              {{ $t('auth.signUp') }}
            </NuxtLinkLocale>
          </p>
        </div>

        <!-- 服务条款 -->
        <div class="text-center text-xs text-muted-foreground mt-4">
          <p>
            {{ $t('auth.continueAgreeing') }}
            <NuxtLink to="/privacy" class="underline hover:text-foreground transition-colors">
              {{ $t('auth.termsOfService') }}
            </NuxtLink>
            {{ $t('auth.and') }}
            <NuxtLink to="/privacy" class="underline hover:text-foreground transition-colors">
              {{ $t('auth.privacyPolicy') }}
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { toast } from 'vue-sonner'
const { t } = useI18n()

const localePath = useLocalePath()
const supabase = useSupabaseClient()
const user = useSupabaseUser()

definePageMeta({
  layout: 'simple',
});

useHead({
  title: t('auth.signIn'),
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

watchEffect(() => {
  if (user.value) {
    return navigateTo(localePath('dashboard'))
  }
})

/**
 * 定义表单验证规则
 */
const formSchema = toTypedSchema(z.object({
  email: z.string({
    required_error: '请输入邮箱地址',
    invalid_type_error: '邮箱地址格式不正确',
  }).email({ message: '请输入有效的邮箱地址' }),
  password: z.string({
    required_error: '请输入密码',
  }).min(6, { message: '密码至少需要6个字符' }),
}))

/**
 * 初始化表单
 */
const form = useForm({
  validationSchema: formSchema,
})

/**
 * 处理邮箱登录提交（添加防抖功能）
 */
const loginSubmit = async (values: any) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    })
    if (error) throw error
    // 登录成功后跳转到首页
    navigateTo('/')
  } catch (error: unknown) {
    console.error('Login error:', error)
    toast.error('' + error)
  }
}

// 使用防抖包装登录函数，1000ms内的重复调用将被忽略
const debouncedLogin = useDebounceFn(loginSubmit, 1000)

const onSubmit = form.handleSubmit((values) => {
  debouncedLogin(values)
})

const projectName = useRuntimeConfig().public.projectName

/**
 * 处理社交登录
 * @param provider - 登录提供商（例如 'google' 或 'github'）
 */
const handleSignIn = useDebounceFn(async (provider: 'google' | 'github') => {
  // 实现社交登录逻辑
  console.log(`Sign in with ${provider}`)
  const { error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: useRuntimeConfig().public.webUrl as string || 'http://localhost:3000',
    },
  })
  if (error) {
    console.error(error)
    toast.error('' + error)
  }
}, 1000)
</script>

<style></style>