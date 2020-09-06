const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretFile = require("../secret/secret");

function hashGenerator(password) {
  return bcrypt.hashSync(password, 10);
}
function hashValidator(password, hash) {
  bcrypt.compareSync(password, hash);
}

function tokenGenerator(id, expiration) {
  return jsonwebtoken.sign({ sub: id }, secretFile.secret, {
    expiresIn: expiration,
  });
}

module.exports = { hashGenerator, hashValidator, tokenGenerator };
