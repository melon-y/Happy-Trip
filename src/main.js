import { createApp } from 'vue'
import pinia from './stores'
import App from './App.vue'
import router from './router'

import "normalize.css"
import "./assets/css/index.css"


createApp(App).use(pinia).use(router).mount('#app')
