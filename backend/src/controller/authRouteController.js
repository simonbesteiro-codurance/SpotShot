const Users = require("../models/authModel");
const {
  hashGenerator,
  hashValidator,
  tokenGenerator,
} = require("../helper/secretService");

async function login(req, res) {
  const user = await Users.findOne({ username: req.body.username });

  if (user && hashValidator(req.body.password, user.hash)) {
    const token = tokenGenerator(user.id);

    res.send({ ...user.toJSON(), token });
  } else {
    res.json({ status: 404, message: "Could not authenticate" });
  }
}
async function register(req, res) {
  if (await Users.findOne({ username: req.body.username })) {
    res.json({ err: `User ${req.body.username} allready exists` });
  } else {
    const user = new Users(req.body);
    user.hash = hashGenerator(req.body.password);
    await user.save();
    res.sendStatus(200);
    res.send(`User ${req.body.username} created`);
  }
}

module.exports = { login, register };
