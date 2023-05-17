import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: 'layer01p01',
          name: 'layer01p01',
          component: () => import('../views/layer-01-p1.vue'),
          children: [
            {
              path: 'layer02p01',
              name: 'layer02p01',
              component: () => import('../views/layer-02-p1.vue')
            },
            {
              path: 'layer02p02',
              name: 'layer02p02',
              component: () => import('../views/layer-02-p2.vue'),
              children: [
                {
                  path: 'layer03p01',
                  name: 'layer03p01',
                  component: () => import('../views/layer-03-p1.vue')
                },
                {
                  path: 'layer03p02',
                  name: 'layer03p02',
                  component: () => import('../views/layer-03-p2.vue')
                },
                {
                  path: 'layer03p03',
                  name: 'layer03p03',
                  component: () => import('../views/layer-03-p3.vue')
                }
              ]
            },
            {
              path: 'layer02p03',
              name: 'layer02p03',
              component: () => import('../views/layer-02-p3.vue')
            }
          ]
        },
        {
          path: 'layer01p02',
          name: 'layer01p02',
          component: () => import('../views/layer-01-p2.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
