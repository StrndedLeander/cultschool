export default {
  namespaced: true,
  state: {
    hasAcc: false,
    login: {
      email: '',
      password: ''
    },
    register: {
      username: '',
      email: '',
      password: ''
    }
  },
  getters:{

  },
  actions:{
    changeAuth({state, commit}) {
      if(state.hasAcc){
        commit('setHasAcc',false)
      } else {
        commit('setHasAcc',true)
      }
    }
  },
  mutations:{
    setHasAcc(state, bool) {
      state.hasAcc = bool
    }
  }
}