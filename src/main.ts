import './assets/main.css'
import "@/assets/global.css"
import { createApp } from 'vue'

import { createPinia } from 'pinia'

import vuetify from '@/plugin/vuetify'

import App from './App.vue'
import router from './router'

import {piniaFactoryPlugin} from "@/services/plugins/piniaFactoryPlugin";

const pinia = createPinia()

pinia.use(piniaFactoryPlugin)

createApp(App).use(pinia).use(router).use(vuetify).mount('#app')
