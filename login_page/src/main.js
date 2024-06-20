import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import store from './store';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/',
    timeout: 180000, // 3 menit
    headers: {
        Authorization: 'Bearer',
        'Content-Type': 'application/json',
    }
})

const userdata = Cookies.get('userdata');
if (userdata !== undefined) {
    try {
        let auth = JSON.parse(userdata)
        store.commit('SET_LOGIN', auth)
        axiosInstance.interceptors.request.use(
            (config) => {
                config.headers['Authorization'] = `Bearer ${auth.access_token}`;
                return config;
            },
            (error) => Promise.reject(error)
        );
    } catch (error) {
        console.error('Error parsing userdata from cookie:', error);
        // Handle error or remove invalid cookie
        Cookies.remove('userdata');
    }
}

const app = createApp(App);
app.config.globalProperties.$axios = { ...axiosInstance };
app.use(store);
app.use(router);
app.mount('#app');