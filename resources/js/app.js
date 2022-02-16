require('./bootstrap');

require('alpinejs');

import { createApp } from 'vue';
import router from './router'
const app =createApp({});



app.config.globalProperties.$auth_user = JSON.parse(user);
app.use(router).mount('#app');
