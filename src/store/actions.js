import { getAppName } from '@/api'

const actions = {
  /*updateAppName ({ commit }){
    getAppName().then(
      res => {
        const { code, info:{ appName} } = res //结构赋值
        commit('SET_APP_NAME',appName) //actions中获取到的值通过commit提交到mutations
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
  }*/
  async updateAppName ({ commit }){
    // 使用 async await 等待异步回调返回
    // 使用try{}catch{}捕获异常
    try{
      const { info: {appName} } = await getAppName()
      commit('SET_APP_NAME',appName)
    }catch(e){
      console.log(e)
    }
  }
}
export default actions
