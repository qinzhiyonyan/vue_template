import Vue from 'vue'

const mutations = {
  //state 代表 全局state , params 为commit传过来的值
  SET_APP_NAME (state, params){
    state.appName = params
  },
  SET_STATE_VALUE (state, value){
    state.stateValue = value
  }
}

export default mutations
