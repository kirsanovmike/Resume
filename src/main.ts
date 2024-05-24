import './assets/main.css'
import "@/assets/global.css"
import { createApp } from 'vue'

import { createPinia } from 'pinia'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

import vuetify from '@/plugin/vuetify'

import App from './App.vue'
import router from './router'

import {piniaFactoryPlugin} from "@/services/plugins/piniaFactoryPlugin";

const pinia = createPinia()

pinia.use(piniaFactoryPlugin)

createApp(App).use(pinia).use(router).use(vuetify).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
