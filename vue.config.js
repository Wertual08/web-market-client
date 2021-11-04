module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://korea-bus.softinspirit.net',
        changeOrigin: true,
      }
    }
  }
}