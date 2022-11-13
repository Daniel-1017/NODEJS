const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const routes = express.Router();

routes.get("/", (req, res, next) => {
  res.render("shop");
});

module.exports = routes;
