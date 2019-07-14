export default {
  namespaced: true,
  state: {
    userDropOut: {
      showing: false,
      id: "",
      username: "Surname Name",
      subjects: [{}]
    }
  },
  getters: {},
  actions: {},
  mutations: {
    toggleUserProfile(state) {
      state.userProfileShowing != state.userProfileShowing
    }
  }
}