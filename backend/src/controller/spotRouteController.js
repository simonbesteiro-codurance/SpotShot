const Spots = require("../models/spotModel");
const {
  getAllProducts,
  getProductById,
  removeSpotById,
} = require("../database-utils/databaseCalls");

function validateDistance(point, interest, distance) {
  const R = 6371;
  const deg2rad = (n) => {
    return Math.tan(n * (Math.PI / 180));
  };
  const dLat = deg2rad(interest.lat - point.lat);
  const dLon = deg2rad(interest.lgn - point.lgn);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(point.lat)) *
      Math.cos(deg2rad(interest.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.asin(Math.sqrt(a));
  const d = R * c;
  return d < distance;
}

const get = (req, res) => {
  req.params.spotId
    ? getProductById(req.params.spotId).then((response) => {
        res.json(response);
      })
    : getAllProducts().then((response) => res.json(response));
};
const post = (req, res) => {
  const spot = new Spots(req.body);
  let checkSpots = false;
  getAllProducts().then((response) => {
    response.map((element) => {
      if (validateDistance(element, req.body, 0.06)) {
        checkSpots = true;
      }
    });
    if (checkSpots) {
      res.status(208);
      res.send("There is a existing spot in your location");
    } else {
      spot.save((err, spotInput) => {
        if (err) res.json(err);
        else res.json(spotInput);
      });
    }
  });
};

const deleter = (req, res) => {
  removeSpotById(req.body.spotId).then((response) => {
    res.send(response);
  });
};

const uploadImage = (req, res) => {
  res.send("works");
};

module.exports = { get, post, deleter, uploadImage };
