const express = require("express");
const debug = require("debug");
const getAllProducts = require("../database-utils/databaseCalls");

const spotRouter = express.Router();

function routes() {
  spotRouter.route("/").get((req, res) => {
    getAllProducts().then((response) => {
      res.json(response);
    });
  });
  return spotRouter;
}
module.exports = routes();
