const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    '/proxy', // 프록시로 전달할 경로 지정
    createProxyMiddleware({
      target: 'https://drive.google.com', // 프록시 대상 서버 주소
      changeOrigin: true,
      pathRewrite: {
        '^/proxy/uc': '/', // /proxy/uc로 시작하는 경로를 /로 변경
      },
    })
  );
};