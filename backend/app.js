const express = require("express");
const debug = require("debug");
const bodyParser = require("body-parser");

const app = express();
const { PORT } = process.env || 2626;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("SpotShot Backend");
});

const spotsRoutes = require("./src/routes/spotsRoutes");

app.use("/api/spots", spotsRoutes);

app.listen(PORT, () => debug(`server running at port ${PORT}`));
