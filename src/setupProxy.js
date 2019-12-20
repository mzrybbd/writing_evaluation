const proxy = require("http-proxy-middleware");
const targetUrl = 'http://ai.aixuexi.com/gateway '
module.exports = function(app) {
  app.use(
    proxy("/ocrGatewayAction_ocrjsonrequest", {
      target: targetUrl,
      changeOrigin: true
    })
  );
  app.use(
    proxy("/vendorEvaluationAction_evaluation", {
      target: targetUrl,
      changeOrigin: true
    })
  );
  app.use(
    proxy("/api", {
      target: targetUrl,
      changeOrigin: true,
      pathRewrite: {
        '^api': ''
      }
    })
  );
};