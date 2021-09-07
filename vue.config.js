module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://softinspirit.net',
        changeOrigin: true,
      }
    }
  }
}