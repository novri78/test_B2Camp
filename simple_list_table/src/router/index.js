import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/home',
    name: HomeView,
    component: () => import(/* webpackChunkName: "login" */ '../views/HomeView.vue'),
    meta: { requireAuth: true}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { requireAuth: true}
  },
  {
    path: '/',
    name: Login,
    component: Login,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuth)) {
    if(store.state.userdata !== null) {
      next('/')
    }
  }
  if(to.matched.some(record.meta.guest)) {
    if(store.state.userdata !== null) {
      next('/home')
    }
  }
})

export default router
