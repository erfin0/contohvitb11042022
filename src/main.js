import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
<<<<<<< HEAD
=======
//import 'bootstrap-vue/dist/bootstrap-vue.css'
>>>>>>> 9542a70cd9316bc1f377ae63f52adbdccd766efd
import 'bootstrap/dist/js/bootstrap.min.js'
import router from './router'
import store from "./store"

createApp(App).use(router).use(store).mount('#app')