const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api', { target: 'http://106.14.113.203:8080/vendorEvaluationAction_evaluation', "changeOrigin": true , pathRewrite: {
    '^/api': ''
  }}));
}; 