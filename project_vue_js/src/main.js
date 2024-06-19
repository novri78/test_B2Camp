import { createApp } from 'vue'
import App from './App.vue'
//import './registerServiceWorker'
import router from './router'
import store from './store'
import {createBootstrap} from 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './assets/css/style.css'
import './assets/scss/main.scss'

const app = createApp(App).use(store).use(router)
app.use(createBootstrap({components: true, directives: true})) // Change this line
app.mount('#app')