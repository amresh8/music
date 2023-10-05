import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/base.css'
import './assets/main.css'
import VeeValidatePlugin from './includes/validation.js'
import './includes/firebase'
const app = createApp(App)

app.use(createPinia())
app.use(VeeValidatePlugin)
app.use(router)
app.mount('#app')
