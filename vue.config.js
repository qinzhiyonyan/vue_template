const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const PUBLIC_PATH = process.env.NODE_ENV === 'production' ? './' : '/'

module.exports = {
  lintOnSave: false,
  // 定义项目的基本路径
  // vue-cli3.3版本后baseUrl被废除，需要改写成publicPath
  publicPath: PUBLIC_PATH,
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
