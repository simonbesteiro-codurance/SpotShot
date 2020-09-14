import axios from "axios";

export default function uploadPhotoBySpottId(spotId, image) {
  const formData = new FormData();
  const filename = image.localUri.split("/").pop();

  const match = /\.(\w+)$/.exec(filename);
  const type = match ? `image/${match[1]}` : `image`;

  formData.append("photo", {
    //place a proper name to the photo
    uri: image.localUri,
    name: "newPhoto",
    type,
  });
  console.log(type);
  axios
    .post("http://192.168.0.11:4200/api/spots/uploadImage/", {
      spotId,
      formData,
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((response) => console.log("works"));
}
