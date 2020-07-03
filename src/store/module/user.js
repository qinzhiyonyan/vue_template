const state = {
  userName: 'Lison'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0,1)
  }
}
const mutations = {
  //
}
const actions = {
  updateUserName ( { commit, state, rootState, dispatch } ) {
      // state 当前 state
      // rootState 根state
      dispatch('xxx','') //通过dispatch触发 xxx 方法
  },
  xxx(){

  }
}
export default {
  //设置namespaced 为true 表示使用命名空间，使module更加私密，防止变量污染
  //namespaced:true,
  state,
  getters,
  mutations,
  actions
}
