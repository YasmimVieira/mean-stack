const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("./public"));

app.use(bodyParser.json());

consign({ cwd: "app" }).include("models").then("api").then("routes").into(app);

module.exports = app;
