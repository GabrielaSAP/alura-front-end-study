import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import roteador from './roteador'
import { store, key } from './store'

createApp(App)
    .use(roteador)
    .use(store, key)
    .mount('#app')
