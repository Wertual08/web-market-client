module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://178.154.194.117',
        changeOrigin: true,
      }
    }
  }
}