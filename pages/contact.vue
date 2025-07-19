<template>
  <main class="container mx-auto px-4 py-16 sm:py-24">
    <div class="max-w-2xl mx-auto space-y-8">
      <div class="space-y-4">
        <h1 class="text-center text-3xl font-bold tracking-tight">
          Contact Us
        </h1>
        <p class="text-center text-lg text-muted-foreground">
          Have a question or want to work with us? Fill out the form below.
        </p>
      </div>
      <div class="bg-card text-card-foreground rounded-xl border p-6 sm:p-8 shadow-sm">
        <form class="space-y-6" @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="name">
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Your Name" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="message">
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us a little bit about your request" class="resize-none" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button type="submit" class="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'vue-sonner'

useHead({
  title: 'Contact Us',
  meta: [
    { name: 'description', content: 'Get in touch with us for support or inquiries.' },
  ],
})

const formSchema = toTypedSchema(z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted:', values)
  toast.success('Message Sent!', {
    description: 'We have received your message and will get back to you shortly.',
  })
})
</script> 