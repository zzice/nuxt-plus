import type { RouterConfig } from '@nuxt/schema'

// Fix scrolling issue when navigating to #pricing anchor from other pages
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          })
        }, 300) // A small delay to allow the page to render
      })
    }

    return { top: 0, left: 0 }
  },
} 