module.exports = function (app) {
  const api = app.api.foto;

  app.get("/v1/fotos", api.lista);
};
