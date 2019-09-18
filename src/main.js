import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify';
import { store } from './store/store'

Vue.config.productionTip = false

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md',
  }
})

new Vue({
  store:store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
