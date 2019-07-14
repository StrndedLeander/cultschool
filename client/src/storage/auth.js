import AuthService from "../APIService/AuthService";

export default {
  namespaced: true,
  state: {
    hasAcc: false,
    login: {
      username: '',
      password: ''
    },
    register: {
      username: '',
      email: '',
      password: ''
    },
    userLoggedIn: false
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
    },
    register({state}) {
      AuthService.register({
        username: state.register.username,
        email: state.register.email,
        password: state.register.password
      })
    }
    // login({state}) {
    //   AuthService.login({
    //     username: state.login.username,
    //     password: state.login.password
    //   })
    // }
  },
  mutations:{
    setHasAcc(state, bool) {
      state.hasAcc = bool
    },
    setLoginName(state, name) {
      state.login.username = name
    },
    setLoginPassword(state, pw) {
      state.login.password = pw
    },
    setRegisterName(state, name) {
      state.register.username = name
    },
    setRegisterEmail(state, mail) {
      state.register.email = mail
    },
    setRegisterPassword(state, pw) {
      state.register.password = pw
    }
  }
}