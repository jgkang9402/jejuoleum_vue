const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/': {
        target: 'https://gis.jeju.go.kr', // API 주소 입력
        pathRewrite: { '^/': '' },
        changeOrigin: true,
        secure: false,
        ws: false,
      },
    },
  },
});
