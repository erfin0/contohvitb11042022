import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/sb-admin-2.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import router from './router'

createApp(App).use(router).mount('#app')
