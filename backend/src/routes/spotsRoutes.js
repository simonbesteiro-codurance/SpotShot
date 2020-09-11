const express = require("express");
const spotRouteController = require("../controller/spotRouteController");

const spotRouter = express.Router();

function routes() {
  spotRouter
    .route("/")
    .get(spotRouteController.get)
    .post(spotRouteController.post);
  spotRouter.route("/:spotId").get(spotRouteController.get);
  return spotRouter;
}
module.exports = routes();
