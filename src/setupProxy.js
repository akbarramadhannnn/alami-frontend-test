const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/addSeller",
    createProxyMiddleware({
      target: "https://dev.dummy-api.alamisharia.co.id",
      changeOrigin: true,
    })
  );
  app.use(
    "/addProduct",
    createProxyMiddleware({
      target: "https://dev.dummy-api.alamisharia.co.id",
      changeOrigin: true,
    })
  );
  app.use(
    "/listProductBySellerId",
    createProxyMiddleware({
      target: "https://dev.dummy-api.alamisharia.co.id",
      changeOrigin: true,
    })
  );
  app.use(
    "/searchProductByKeyword",
    createProxyMiddleware({
      target: "https://dev.dummy-api.alamisharia.co.id",
      changeOrigin: true,
    })
  );
};
