
  const proxy = require("http-proxy-middleware");
  module.exports = function(app) {
    app.use(proxy('/bda', { 
      target: "https://m.bd-ego.com" ,
      "changeOrigin": true,
      "pathRewrite": {
        "^/bda": ""
      }
  }));
};