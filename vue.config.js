// 自定义配置
module.exports={
  // 配置webpack
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets', // cli3默认配置文件别名 @ => src
        'common':'@/common', 
        'components':'@/components', 
        'network':'@/network', 
        'views':'@/views'
      }
    }
  },
  lintOnSave: false
}