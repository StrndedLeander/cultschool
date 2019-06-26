export default {
  namespaced: true,
  state: {

  },
  getters: {},
  actions:{
    setPositionUserProfile(obj,x,y){
      obj.style.left = x_pos + "px";
      obj.style.top = y_pos + "px";
    }
  },
  mutations:{}
}