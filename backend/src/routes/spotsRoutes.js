const express = require("express");

const {
  getAllProducts,
  getProductById,
} = require("../database-utils/databaseCalls");

const spotRouter = express.Router();

function routes() {
  spotRouter.route("/").get((req, res) => {
    getAllProducts().then((response) => {
      res.json(response);
    });
  });
  spotRouter.route("/:spotId").get((req, res) => {
    const { spotId } = req.params.spotId;
    getProductById(spotId).then((response) => {
      res.json(response);
    });
  });
  return spotRouter;
}
module.exports = routes();
