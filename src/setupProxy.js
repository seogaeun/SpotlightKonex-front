const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://125.6.38.124',
      changeOrigin: true,
    })
  );
};