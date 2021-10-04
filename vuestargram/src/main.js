import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import store from './store.js'
import './registerServiceWorker'

let emitter = mitt()
let app = createApp(App)
app.config.globalProperties.emitter = emitter
// app.config.globalProperties는 모든 컴포넌트에서 사용할 수 있는 변수를 등록할 수 있게 함

app.use(store).mount('#app')
