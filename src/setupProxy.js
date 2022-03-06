const { createProxyMiddleware } = require('http-proxy-middleware');

console.log('setup.js');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:8080/',
      changeOrigin: true,
    }),
  );
};
