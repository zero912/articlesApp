import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',  // 全局保存用户名
  },
  getters: {
  },
  mutations: {
    /** 修改state.username */
    saveUsername(state, payload){
      state.username = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
