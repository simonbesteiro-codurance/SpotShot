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

module.exports = { get };
