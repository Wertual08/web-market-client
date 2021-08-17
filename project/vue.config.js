module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://178.154.198.237',
        changeOrigin: true,
      }
    }
  }
}