const Spots = require("../models/spotModel");
const {
  getAllProducts,
  getProductById,
  removeSpotById,
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

  const spot = new Spots(req.body);
  spot.save((err, spotInput) => {
    if (err) res.json(err);
    else res.json(spotInput);
  });
};

const deleter = (req, res) => {
  removeSpotById(req.body.spotId).then((response) => {
    res.send(response);
  });
};

module.exports = { get, post, deleter };
