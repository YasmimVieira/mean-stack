const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const app = express();

app.set("secret", "autenticando");

app.use(express.static("./public"));

app.use(bodyParser.json());

consign({ cwd: "app" })
  .include("models")
  .then("api")
  .then("routes/auth.js")
  .then("routes")
  .into(app);

module.exports = app;
