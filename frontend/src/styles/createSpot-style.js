import { StyleSheet, Dimensions } from "react-native";

const darkTheme = true;

const stylesCreateSpot = StyleSheet.create({
  titleInput: {
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.4,
    backgroundColor: "pink",
  },
  selectedPhoto: {
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.4,
    resizeMode: "contain",
  },
  stylePicker: {
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.4,
    margin: Dimensions.get("window").height * 0.1,
  },
  cameraButtonContainer: {
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.4,
    backgroundColor: "aquamarine",
  },
});

export default stylesCreateSpot;
