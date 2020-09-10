import * as ImagePicker from "expo-image-picker";

async function selectImage() {
  const Permissions = await ImagePicker.requestCameraRollPermissionsAsync();

  if (Permissions.granted !== false) {
    const picker = await ImagePicker.launchImageLibraryAsync();

    if (picker.cancelled !== true) {
      const localImage = { localUri: picker.uri };
      console.log(localImage);
      return localImage.localUri;
    }
  } else {
    console.log("permissions not granted");
  }
  return selectImage;
}
module.exports = selectImage;
