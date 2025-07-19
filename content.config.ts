import { defineContentConfig, defineCollection } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

const blog = defineCollection(
  asSitemapCollection({
    type: 'page',
    source: 'blog/*.md'
  })
)

export default defineContentConfig({
  collections: {
    blog
  }
})
