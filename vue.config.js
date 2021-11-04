module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://korea-bus.softinspirit.net/',
        changeOrigin: true,
      }
    }
  }
}