---
title: 'Best Practices for Using Pinia in Nuxt 3'
description: 'An in-depth look at the core practices for using Pinia efficiently in Nuxt 3 projects, including store organization, state management, and component integration.'
category: 'Best Practices'
date: '2024-07-27'
author:
  name: 'Fox'
  avatar: 'https://avatars.githubusercontent.com/u/22138491?v=4'
image:
  src: 'https://placehold.co/600x400/0f172a/94a3b8?text=Pinia+In+Nuxt3'
  alt: 'Nuxt 3 Pinia'
short_description: 'Learn how to use Pinia efficiently in your Nuxt 3 projects.'
---

Pinia is the officially recommended state management library for Vue. In Nuxt 3, it can be easily integrated via the `@pinia/nuxt` module. This article will focus on the core best practices for using Pinia in your projects.

It is assumed that you have already installed and configured Pinia correctly in your project.

## 1. Creating and Organizing Stores

To take advantage of Nuxt 3's auto-import feature, all Pinia store files should be placed in the `stores/` folder in the project root directory.

- **Naming Convention**: The store filename should clearly reflect its responsibility, for example, `user.ts` for managing user state, and `cart.ts` for the shopping cart.
- **Setup Store Syntax**: It is recommended to use the Setup Store syntax as it is consistent with Vue 3's Composition API style, providing better type inference and code organization.

#### Example: `stores/counter.ts`

```typescript
import { defineStore } from 'pinia'

// The first argument to defineStore is a unique ID for the store
export const useCounterStore = defineStore('counter', () => {
  // a. State: Use ref() to define reactive state properties
  const count = ref(0)
  const name = ref('Eduardo')

  // b. Getters: Use computed() to define computed properties
  const doubleCount = computed(() => count.value * 2)

  // c. Actions: Use function to define methods, supporting async operations
  function increment() {
    count.value++
  }

  // You must return all state, getters, and actions that need to be exposed
  return {
    count,
    name,
    doubleCount,
    increment,
  }
})
```

## 2. Using the Store in Components

Thanks to Nuxt's auto-import, you can directly call your store hook in the `<script setup>` of any component.

#### Example: `components/MyCounter.vue`

```vue
<template>
  <div>
    <h1>Counter</h1>
    <!-- Directly access properties of the store instance -->
    <p>Current count: {{ counter.count }}</p>
    <p>Double count: {{ counter.doubleCount }}</p>

    <!-- Call actions -->
    <button @click="counter.increment()">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'

// Get the store instance in the component setup
const counter = useCounterStore()
</script>
```

**Key point**: It is completely safe to use `counter.count` directly in the template; Pinia ensures its reactivity.

### Destructuring with Reactivity

If you want to destructure properties from the store while maintaining their reactivity, use the `storeToRefs` utility provided by Pinia.

```typescript
import { useCounterStore } from '~/stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()

// `count` and `doubleCount` are reactive refs
const { count, doubleCount } = storeToRefs(counterStore)
// `increment` is just a function and can be destructured directly
const { increment } = counterStore

// Now you can use `count` directly in the template instead of `counterStore.count`
```

## 3. Core Best Practices Summary

1.  **`stores/` Directory**: Always place store files in the `stores/` directory for a seamless auto-import experience.
2.  **Setup Stores**: Prefer the Setup Store paradigm for better type safety and code readability.
3.  **Modularity**: Divide stores by functional areas. For example, `useUserStore`, `useProductStore`, `useCartStore`, instead of putting all state in one giant store.
4.  **Direct Access vs. `storeToRefs`**:
    - In templates or `computed`, direct access via `store.property` is the simple and recommended way.
    - Use `storeToRefs()` when you need to pass a store's state or getter as a reactive property to a composable function.
5.  **Server-Side Rendering (SSR) Compatibility**: `@pinia/nuxt` automatically handles SSR state synchronization (serialization and hydration), so you don't need to intervene manually.

--- 