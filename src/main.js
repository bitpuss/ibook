import Buefy from 'buefy'
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/api'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'

Vue.config.productionTip = false

/* eslint-disable-next-line */
Vue.config.baseURL = process.env.VUE_APP_API_ENDPOINT ? process.env.VUE_APP_API_ENDPOINT : window.location.origin+window.location.pathname+'?r='

axios.defaults.withCredentials = true
axios.defaults.baseURL = Vue.config.baseURL

axios.defaults.headers['Content-Type'] = 'application/json'


// install bulma-vue
Vue.use(Buefy, {
  defaultIconPack: 'fas',
})

Vue.use(VueLazyload, {
  preLoad: 1.3,
})

new Vue({
  router,
  store,
  created() {
    console.log(api)
    // api.getConfig()
    //   .then((ret) => {
    //     this.$store.commit('setConfig', ret.data.data)
    //     api.getUser()
    //       .then((user) => {
    //         this.$store.commit('initialize')
    //         this.$store.commit('setUser', user)
    //         this.$router.push('/')
    //       })
    //       .catch(() => {
    //         this.$notification.open({
    //           message: 'Something went wrong',
    //           type: 'is-danger',
    //           queue: false,
    //           indefinite: true,
    //         })
    //       })
    //   })
    //   .catch(() => {
    //     this.$notification.open({
    //       message: 'Something went wrong',
    //       type: 'is-danger',
    //       queue: false,
    //       indefinite: true,
    //     })
    //   })
  },
  render: (h) => h(App),
}).$mount('#app')
