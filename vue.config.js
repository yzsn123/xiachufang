module.exports = {
    runtimeCompiler: false,
    devServer: {
      // 配置项目的正向代理
      proxy: {//http-proxy-middleware
        '/api': {
          target: 'http://10.20.152.3:9000',
          // target: 'http://192.168.1.105:9000',
          changeOrigin: true
        }
      }
    }
  }
