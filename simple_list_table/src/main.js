import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { createBootstrap } from 'bootstrap-vue-next';
import axios from 'axios';
import Cookies from 'vue-cookies'; // Import vue-cookies

const axiosInstance = axios.create({
    baseURL: 'https://api.escuelajs.co.api/v1/',
    timeout: 180000,
    headers: {
        Authosization: 'Bearer',
        'Content-type': 'application/JSON'
    }
})
if(cookie.getJSON('userData') !== undefined){
    let auth = Cookies.getJSON('userData')
    store.commit('SET_LOGIN', auth)
    axiosInstance.interceptors.request.use(
        (config) => {
            config.headers['Authorization'] = `Bearer ${auth.access_token}`;
            return config
        },
        (error) => Promise.reject(error)
    )
}

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import './assets/css/style.css';
import './assets/scss/_style.scss';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueCookies);
app.use(createBootstrap({components: true, directives: true}));
app.config.globalProperties.$axios = {...axiosInstance}; // Change this line
app.mount('#app');