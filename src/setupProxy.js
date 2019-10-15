const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/ocrGatewayAction_ocr", {
      target: "http://106.14.113.203:8079",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/vendorEvaluationAction_evaluation", {
      target: "http://106.14.113.203:8080",
      changeOrigin: true
    })
  );
};