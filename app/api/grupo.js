const api = {};

api.lista = function (req, res) {
  const grupos = [
    { _id: 1, nome: "esporte" },
    { _id: 2, nome: "lugares" },
    { _id: 3, nome: "animais" },
  ];

  res.json(grupos);
};

module.exports = api;
