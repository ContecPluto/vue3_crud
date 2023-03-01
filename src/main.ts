import './plugins/bootstrap-vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import plugin from './plugins/bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
    .use(store)
    .use(router)
    .use(plugin)
    .mount('#app')
