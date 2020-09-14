const fs = require("fs");
const path = require("path");

const uploadImageService = (spotId = 1, file, filename = "asdf") => {
  console.log(spotId, file, filename);
  return (async () => {
    const saveTo = path.join(__dirname, `../public/spots/${filename}.jpg`);
    await file.pipe(fs.createWriteStream(saveTo));
  })();
};

module.exports = { uploadImageService };
