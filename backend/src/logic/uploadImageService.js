const fs = require("fs");
const path = require("path");

const uploadImageService = (file, filename) => {
  return (async () => {
    const [spotId, imageName] = filename.split("|");
    const route = path.join(__dirname, `../public/spots/${spotId}`);
    console.log(spotId, imageName);
    if (!fs.existsSync(route)) {
      fs.mkdirSync(route);
    }
    const saveTo = path.join(
      __dirname,
      `../public/spots/${spotId}/${imageName}`
    );
    await file.pipe(fs.createWriteStream(saveTo));
  })();
};

module.exports = { uploadImageService };
