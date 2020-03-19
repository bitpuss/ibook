import Vue from 'vue'
import moment from 'moment'
import api from '../api/api'
import store from '../store/index'


const funcs = {
  methods: {
    lang(text) {
      return text
    },
    is(role) {
      return this.$store.state.user.role === role
    },
    can(permissions) {
      return this.$store.getters.hasPermissions(permissions)
    },
    formatBytes(bytes, decimals = 2) {
      if (bytes === 0) return '0 Bytes'

      const k = 1024
      const dm = decimals < 0 ? 0 : decimals
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

      const i = Math.floor(Math.log(bytes) / Math.log(k))

      return `${parseFloat((bytes / (k ** i)).toFixed(dm))} ${sizes[i]}`
    },
    formatDate(timestamp) {
      return moment.unix(timestamp).format(store.state.config.date_format ? store.state.config.date_format : 'YY/MM/DD hh:mm:ss')
    },
    checkUser() {
      api.getUser()
        .then((user) => {
          if (user.username !== store.state.user.username) {
            this.$store.commit('destroyUser', user)
            this.$toast.open({
              message: this.lang('Please log in'),
              type: 'is-danger',
            })
          }
        })
        .catch(() => {
          this.$toast.open({
            message: this.lang('Please log in'),
            type: 'is-danger',
          })
        })
    },
    handleError(error) {
      this.checkUser()

      if (typeof error === 'string') {
        this.$toast.open({
          message: this.lang(error),
          type: 'is-danger',
          duration: 5000,
        })
        return
      } if (error && error.response && error.response.data && error.response.data.data) {
        this.$toast.open({
          message: this.lang(error.response.data.data),
          type: 'is-danger',
          duration: 5000,
        })
        return
      }

      this.$toast.open({
        message: this.lang('Unknown error'),
        type: 'is-danger',
        duration: 5000,
      })
    },
    getDownloadLink(path) {
      return `${Vue.config.baseURL}/download&path=${path}`
    },
    hasPreview(name) {
      return this.isText(name) || this.isImage(name)
    },
    isText(name) {
      return this.hasExtension(name, store.state.config.editable ? store.state.config.editable : ['.txt'])
    },
    isImage(name) {
      return this.hasExtension(name, ['.jpg', '.jpeg', '.gif', '.png', '.bmp', '.tiff'])
    },
    hasExtension(name, exts) {
      return (new RegExp(`(${exts.join('|').replace(/\./g, '\\.')})$`, 'i')).test(name)
    },
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
  },
}

export default funcs
