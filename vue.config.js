const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin' : '/'

module.exports = {
  lintOnSave: false,
  // 定义项目的基本路径
  baseURI: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 跨域配置
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
