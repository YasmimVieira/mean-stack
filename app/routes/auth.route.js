module.exports = function (app) {
  const api = app.api.auth;
  app.post("/autenticar", api.autentica);
  app.use("/*", api.verificaToken);
};
