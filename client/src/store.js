import Vue from 'vue'
import Vuex from 'vuex'
import auth from './storage/auth'
import user from './storage/user'
import courses from './storage/courses'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: auth,
    user: user,
    courses: courses
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
