export default {
  namespaced: true,
  state: {
    hasAcc: false
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