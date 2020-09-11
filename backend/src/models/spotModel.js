const mongoose = require("mongoose");

const { Schema } = mongoose;
const schema = new Schema({
  username: { type: String, required: true },
  title: { type: String, default: "No Title provided" },
  spotStyle: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  createdDate: { type: Date, default: Date.now },
  image: {
    type: Array,
    default: [
      {
        uri: {
          type: String,
          default:
            "https://github.com/SkylabCoders/simon-besteiro-spotshot/blob/master/frontend/src/Images/SpotShotLogo.png",
        },
        uploadDate: { type: Date, default: Date.now },
      },
    ],
  },
  description: { type: String, default: "No Description provided" },
});
schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
});
module.exports = mongoose.model("Spots", schema);
