import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initialized: false,
    config: [],
    user: {
      role: 'guest',
      permissions: [],
      name: '',
      username: '',
    },
    cwd: {
      location: '/',
      content: [],
    },
    tree: {},
  },
  getters: {
    hasPermissions: (state) => (permissions) => {
      // if (_.isArray(permissions)) {
      //   return _.intersection(state.user.permissions, permissions).length === permissions.length
      // }
      // return !!_.find(state.user.permissions, (p) => p === permissions)
      console.log(state, permissions)
      return true
    },
  },
  mutations: {
    initialize(state) {
      state.initialized = true
      this.commit('resetCwd')
      this.commit('resetTree')
      this.commit('destroyUser')
    },
    resetCwd(state) {
      state.cwd = {
        location: '/',
        content: [],
      }
    },
    resetTree(state) {
      state.tree = {
        path: '/',
        name: 'Home',
        children: [],
      }
    },
    setConfig(state, data) {
      state.config = data
    },
    setUser(state, data) {
      state.user = data
    },
    destroyUser(state) {
      state.user = {
        role: 'guest',
        permissions: [],
        name: '',
        username: '',
      }
    },
    setCwd(state, data) {
      state.cwd.location = data.location
      state.cwd.content = []
    },
    updateTreeNode(state, data) {
      console.log(state, data)
      // const traverse = function (object) {
      //   for (const property in object) {
      //     if (object.hasOwnProperty(property)) {
      //       if (property === 'path' && object[property] === data.path) {
      //         Object.assign(object, {
      //           path: data.path,
      //           children: data.children,
      //         })
      //         return
      //       }
      //       if (typeof object[property] === 'object') {
      //         traverse(object[property])
      //       }
      //     }
      //   }
      // }
      // traverse(state.tree)
    },
  },
  actions: {
  },
})
