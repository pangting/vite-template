import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ajax from '@/service'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$ajax = ajax

app.use(createPinia())
app.use(router)

app.mount('#app')
