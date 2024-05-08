import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {piniaFactoryPlugin} from "@/services/plugins/piniaFactoryPlugin";

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaFactoryPlugin)
app.use(pinia)
app.use(router)

app.mount('#app')
