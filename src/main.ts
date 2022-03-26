import { createApp } from 'vue'
import App from './Main.vue'
import router from './router'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).mount('#app')
