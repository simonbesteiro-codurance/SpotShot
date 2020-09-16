const mongoose = require("mongoose");
const transformLogic = require("../logic/transformLogic");

const { Schema } = mongoose;
const schema = new Schema({
  username: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
});
schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: transformLogic.transform,
});
module.exports = mongoose.model("Users", schema);
