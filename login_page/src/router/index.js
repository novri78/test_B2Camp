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
    meta:{
      guest: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
    meta:{
      requireAuth: true
    }
  },

  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta:{
      requireAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// kondisi disaat login
router.beforeEach((to, from, next)=>{
  if(to.matched.some(record => record.meta.requireAuth)){
    if(store.state.userdata == null){
      next('/')
    }
  }
  if(to.matched.some(record => record.meta.guest)){
    if(store.state.userdata !== null){
      next('/home')
    }
  }
  next();
})


export default router