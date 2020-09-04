import { StyleSheet, Dimensions } from "react-native";

const stylesMap = StyleSheet.create({
  suggestionContainer: {
    height: Dimensions.get("window").height * 0.002,
  },
  suggestionChild: {
    margin: Dimensions.get("window").width * 0.02,
    backgroundColor: "transparent",
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").height * 0.1,
  },
});

export default stylesMap;
