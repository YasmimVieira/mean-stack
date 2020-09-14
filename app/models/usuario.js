const mongoose = require("mongoose");

const schema = mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
});

mongoose.model("Usuario", schema);
