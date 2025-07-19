<template>
  <div class="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-background to-background/90">
    <div class="w-full sm:min-w-md space-y-8 backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-800">
      <!-- 网站名称和标题 -->
      <div class="text-center space-y-2">
        <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-primary">{{ projectName }}</h1>
        <h2 class="mt-1 text-lg sm:text-xl font-semibold tracking-tight">{{ $t('auth.signUp') }}</h2>
        <p class="text-sm text-muted-foreground">{{ $t('auth.signUpModal.description') }}</p>
      </div>

      <!-- 注册表单 -->
      <div class="mt-8 space-y-6">
        <form @submit="onSubmit" class="space-y-4">
          <!-- 用户名输入框 -->
          <FormField v-slot="{ componentField }" name="username">
            <FormItem>
              <FormLabel class="text-foreground/90 font-medium">{{ $t('auth.username') }}</FormLabel>
              <FormControl>
                <Input type="text" :placeholder="$t('auth.usernamePlaceholder')" autocomplete="username"
                  class="py-4 transition-all focus:ring-2 focus:ring-primary/20" v-bind="componentField" />
              </FormControl>
              <FormMessage class="text-destructive text-sm" />
            </FormItem>
          </FormField>

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
                <Input type="password" :placeholder="$t('auth.passwordPlaceholder')"
                  autocomplete="new-password" class="py-4 transition-all focus:ring-2 focus:ring-primary/20" v-bind="componentField" />
              </FormControl>
              <FormMessage class="text-destructive text-sm" />
            </FormItem>
          </FormField>

          <!-- 确认密码输入框 -->
          <FormField v-slot="{ componentField }" name="confirmPassword">
            <FormItem>
              <FormLabel class="text-foreground/90 font-medium">{{ $t('auth.confirmPassword') }}</FormLabel>
              <FormControl>
                <Input type="password" :placeholder="$t('auth.confirmPasswordPlaceholder')"
                  autocomplete="new-password" class="py-4 transition-all focus:ring-2 focus:ring-primary/20" v-bind="componentField" />
              </FormControl>
              <FormMessage class="text-destructive text-sm" />
            </FormItem>
          </FormField>

          <!-- 注册按钮 -->
          <Button type="submit" class="w-full py-5 text-base font-medium mt-4 transition-all hover:scale-[1.02] hover:shadow-md">{{ $t('auth.signUp') }}</Button>
        </form>

        <!-- 登录链接 -->
        <div class="text-center mt-4">
          <p>
            {{ $t('auth.haveAccount') }}
            <NuxtLinkLocale to="/login" class="font-medium text-primary hover:text-primary/90 transition-colors">
              {{ $t('auth.signIn') }}
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
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const { t } = useI18n()

definePageMeta({
  layout: 'simple'
});

useHead({
  title: t('auth.signUp'),
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

watchEffect(() => {
  if (user.value) {
    return navigateTo('/')
  }
})

/**
 * 定义表单验证规则
 */
const formSchema = toTypedSchema(z.object({
  username: z.string({
    required_error: t('auth.validation.username.required'),
  }).min(2, { message: t('auth.validation.username.min') }),
  email: z.string({
    required_error: t('auth.validation.email.required'),
    invalid_type_error: t('auth.validation.email.invalid'),
  }).email({ message: t('auth.validation.email.format') }),
  password: z.string({
    required_error: t('auth.validation.password.required'),
  }).min(6, { message: t('auth.validation.password.min') }),
  confirmPassword: z.string({
    required_error: t('auth.validation.confirmPassword.required'),
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: t('auth.validation.confirmPassword.match'),
  path: ['confirmPassword'],
}))

/**
 * 初始化表单
 */
const form = useForm({
  validationSchema: formSchema,
})

/**
 * 处理邮箱注册提交
 */
const registerSubmit = async (values: any) => {
  try {
    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          displayName: values.username,
        },
      },
    })
    if (error) throw error
    toast.success(t('auth.registerSuccess'))
    // 注册成功后跳转到登录页面
    navigateTo('/login')
  } catch (error) {
    console.error('Registration error:', error)
    toast.error('' + error)
  }
}

// 使用防抖包装注册函数，1000ms内的重复调用将被忽略
const debouncedRegister = useDebounceFn(registerSubmit, 1000)

const onSubmit = form.handleSubmit((values) => {
  debouncedRegister(values)
})

const projectName = useRuntimeConfig().public.projectName

</script>

<style></style> 