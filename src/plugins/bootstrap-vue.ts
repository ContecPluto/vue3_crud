import { Plugin } from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const plugin: Plugin = {
  install: (Vue) => {
    Vue.use(BootstrapVue)
  },
}

export default plugin