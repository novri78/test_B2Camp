import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/LoginPage.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import store from '@/store'


const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      requireAuth: true,
    }
  },

  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: true,
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// kondisi disaat login
router.beforeEach((to, from, next) => {
  //1st condition
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (store.state.userdata == null) {
      ({ path: '/' })
    }
  }
  if (to.matched.some(record => record.meta.guest)) {
    if (store.state.userdata !== null) {
      ({ path: '/home' })
    }

  }
  next();
});


export default router