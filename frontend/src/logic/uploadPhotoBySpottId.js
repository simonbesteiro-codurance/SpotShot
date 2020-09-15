import axios from "axios";

export default function uploadPhotoBySpottId(spotId, image) {
  const formData = new FormData();
  const filename = image.localUri.split("/").pop();

  const match = /\.(\w+)$/.exec(filename);
  const type = match ? `image/${match[1]}` : `image`;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  formData.append("image", {
    //place a proper name to the photo
    uri: image.localUri,
    name: `${spotId}|${filename}`,
    type,
  });
  return (async () => {
    const res = await fetch("http://192.168.0.11:4200/api/spots/uploadImage", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  })();
  // axios
  //   .post("http://192.168.0.11:4200/api/spots/uploadImage", {
  //     formData,
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  //   .then((response) => console.log("works"));
}
