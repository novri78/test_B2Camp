import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/LoginPage.vue'
import HomeView from '@/views/HomeView.vue'
import Profile from '@/views/ProfileView.vue'
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
    path: '/profile',
    name: 'profile',
    component: Profile,
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
  // Jika memerlukan autentikasi dan pengguna tidak masuk
  if (to.matched.some(record => record.meta.requireAuth) && !store.state.isLoggedIn) {
    next({ path: '/' });
  }
  // Jika tamu dan pengguna sudah masuk
  else if (to.matched.some(record => record.meta.guest) && store.state.isLoggedIn) {
    next({ path: '/home' });
  } else {
    next();
  }
});


export default router