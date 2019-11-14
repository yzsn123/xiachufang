module.exports = {
    devServer: {
      open: true,
      proxy: {
        '/api': {
          target: 'http://10.20.152.3:9000'
        }
      }
    }
  }