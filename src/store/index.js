import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: sessionStorage.getItem('name'),  // 全局保存用户名
  },
  getters: {
  },
  mutations: {
    /** 修改state.username */
    saveUsername(state, payload){
      state.username = payload
      // 将用户名存入storage
      sessionStorage.setItem('name', payload)
    },
    logout(state){ // 退出
      state.username = null
      sessionStorage.removeItem('name')  // 删除键值对
    }
  },
  actions: {
  },
  modules: {
  }
})
