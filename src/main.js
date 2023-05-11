import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/sassy-lcars/sassy-lcars.scss'
import { initSounds } from './util/sounds'


initSounds()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
