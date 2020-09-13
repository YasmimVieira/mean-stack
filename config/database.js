module.exports = function (uri) {
  const mongoose = require("mongoose");

  mongoose.connect("mongodb://" + uri);

  mongoose.connection.on("connected", function () {
    console.log("Conectado ao mongodb");
  });

  mongoose.connection.on("error", function (error) {
    console.log("Erro na conexão: " + error);
  });

  mongoose.connection.on("disconnected", function () {
    console.log("Desconetado do mongodb");
  });

  process.on("SIGINT", function () {
    mongoose.connection.close(function () {
      console.log("Conexão perdida, pelo termino da aplicação");
      process.exit(0);
    });
  });
};
