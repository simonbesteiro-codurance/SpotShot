import { StyleSheet, Dimensions } from "react-native";

const stylesSpotCarousel = StyleSheet.create({
  suggestionCarousel: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.2,
    backgroundColor: "#7FFFD4",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: Dimensions.get("window").height * 0.02,
  },
  childPlaceHolder: {
    width: Dimensions.get("window").width * 0.29,
    height: Dimensions.get("window").height * 0.16,
    backgroundColor: "#F0F8FF",
  },
});

export default stylesSpotCarousel;
