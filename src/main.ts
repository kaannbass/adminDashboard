import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/css/index.css';
import axios from 'axios';
import { createPinia } from 'pinia';


import { Chart, DoughnutController, ArcElement, Tooltip } from 'chart.js';
Chart.register(DoughnutController, ArcElement, Tooltip);

const app = createApp(App);
const pinia = createPinia()

app.use(store);
app.use(router);
app.use(pinia);

app.config.globalProperties.axios = axios;

app.mount('#app');
