import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
       {
      path: '/',
      name: 'some',
      component: () => import('../views/main/Index.vue')
    },
      /*{
          path: '/else',
          name: 'else',
          component: () => import('../views/Else.vue')
      }*/
  ]
})

export default router
