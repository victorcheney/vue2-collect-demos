import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sendMsg: '', // 发送的消息
    recvMsg: '', // 接收到的消息
    apiParams: {}, // 接口参数
  },
  mutations: {
    SEND_MSG(state, msg) {
      state.sendMsg = msg
    },
    RECV_MSG(state, msg) {
      state.recvMsg = msg
    },
    API_PARAMS(state, params) {
      state.apiParams = params
    },
  },
  actions: {
    setSendMsg({ commit, state }, msg) {
      return new Promise(resolve => {
        commit('SEND_MSG', msg)
        resolve(state.sendMsg)
      })
    },
    setRecvMsg({ commit, state }, msg) {
      return new Promise(resolve => {
        commit('RECV_MSG', msg)
        resolve(state.setRecvMsg)
      })
    },
    setApiParams({ commit, state }, params) {
      return new Promise(resolve => {
        commit('API_PARAMS', params)
        resolve(state.apiParams)
      })
    },
  },
  modules: {},
})
