module.exports ={
  devServer:{
    open:true,
    proxy:{
      '/api':{
        target:'http://10.20.152.3:9000',
        // target:'http://192.168.1.105:9000',
        changeOrigin: true,
      }
    }
  }
} 