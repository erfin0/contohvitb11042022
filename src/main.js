import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../src/assets/icon/all.css'
import router from './router'
import store from "./store"

createApp(App).use(router).use(store).mount('#app')