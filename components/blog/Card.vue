<script setup lang="ts">
// Assuming a Post type/interface is defined elsewhere or implicitly through data
// For example:
// interface Post {
//   _path: string;
//   title: string;
//   description: string;
//   category: string;
//   date: string;
//   author: {
//     name: string;
//     avatar: string;
//   };
//   image: {
//     src: string;
//     alt: string;
//   };
//   short_description: string;
// }

defineProps<{
  post: any // TODO: Replace with a proper Post type
}>()
</script>

<template>
  <NuxtLink :to="post.path" class="group block blog-card h-full">
    <div class="overflow-hidden rounded-2xl bg-white dark:bg-gray-800/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      <!-- Image section -->
      <div class="relative h-60 overflow-hidden flex-shrink-0">
        <img
          v-if="post.meta.image"
          :src="post.meta.image.src"
          :alt="post.meta.image.alt"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
        >
        <div class="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30" />
        <div
          class="absolute inset-0 bg-[url('~/assets/images/grid.svg')] bg-repeat"
          style="opacity: 0.05;"
        />
        <div class="absolute top-4 left-4">
          <span class="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gray-900 shadow-sm">
            {{ post.meta.category }}
          </span>
        </div>
      </div>

      <!-- Content section -->
      <div class="p-6 flex-grow flex flex-col">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-50 line-clamp-2 min-h-[3.5rem]">
          {{ post.title }}
        </h3>
        <p class="mt-3 text-base text-gray-600 dark:text-gray-300 line-clamp-2 flex-grow">
          {{ post.description }}
        </p>
        <div class="mt-6 flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
          <div v-if="post.meta.author" class="flex items-center space-x-3">
            <img :src="post.meta.author.avatar" alt="" class="h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-800">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-200">{{ post.meta.author.name }}</span>
          </div>
          <time :datetime="post.date" class="text-sm font-medium text-gray-500">
            {{ post.meta.date }}
          </time>
        </div>
      </div>
    </div>
  </NuxtLink>
</template> 