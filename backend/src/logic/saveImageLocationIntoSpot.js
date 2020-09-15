const Spot = require("../models/spotModel");

const saveImageLocationIntoSpot = async (spotId, route) => {
  //spot.updateOne({ type: "other" });

  await Spot.findByIdAndUpdate(
    { _id: spotId },
    { image: { uri: route } },
    { upsert: true }
  );
  const spot = await Spot.findOne({ _id: spotId });
  console.log(spot);
  //return (async () => {})();
};

module.exports = { saveImageLocationIntoSpot };
