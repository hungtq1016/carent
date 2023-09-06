import './assets/main.css'
import "@egjs/vue3-flicking/dist/flicking.css";
import '@vuepic/vue-datepicker/dist/main.css';
import "@egjs/vue3-flicking/dist/flicking-inline.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
