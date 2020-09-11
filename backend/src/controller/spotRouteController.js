const Spots = require("../models/spotModel");
const {
  getAllProducts,
  getProductById,
} = require("../database-utils/databaseCalls");

const get = (req, res) => {
  req.params.spotId
    ? getProductById(req.params.spotId).then((response) => {
        res.json(response);
      })
    : getAllProducts().then((response) => {
        res.json(response);
      });
};
const post = (req, res) => {
  console.log(req.body);
  Spots.create(req.body, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
};

module.exports = { get, post };
