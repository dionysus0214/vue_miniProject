import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

window.Kakao.init("a1fca2a4bbd17903686974593ff686b0");
