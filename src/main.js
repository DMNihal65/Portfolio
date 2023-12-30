import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import '@/styles/index.css'
import '@/styles/app.css'
// Import Lottie
import Lottie from 'vue-lottie';
import 'lottie-web';


createApp(App)
.component('lottie', Lottie)
.use(router)
.use(createPinia())
.mount('#app')
