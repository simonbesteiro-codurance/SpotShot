const mongoose = require("mongoose");

const { Schema } = mongoose;
const schema = new Schema({
  username: { type: String, required: true },
  title: { type: String, default: "No Title provided" },
  spotStyle: { type: String, default: "other" },
  lat: { type: Number, required: true },
  lgn: { type: Number, required: true },
  createdDate: { type: Date, default: Date.now },
  image: {
    type: Array,
    default: [
      {
        uri:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI0MX0 ",
      },
    ],
  },
  description: { type: String, default: "No Description provided" },
  rating: { type: String, default: 0 },
});
// schema.set("toJSON", {
//   virtuals: true,
//   versionKey: false,
// });
module.exports = mongoose.model("Spots", schema);
