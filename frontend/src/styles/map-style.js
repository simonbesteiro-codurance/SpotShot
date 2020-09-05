import { StyleSheet, Dimensions } from "react-native";

const darkTheme = true;

const stylesMap = StyleSheet.create({
  mapContainer: {
    height: Dimensions.get("window").height * 0.85,
    width: Dimensions.get("window").width,
  },
  suggestionContainer: {
    height: Dimensions.get("window").height * 0.002,
    backgroundColor: darkTheme ? "#283047" : "#E0E0E0",
  },
  suggestionChild: {
    margin: Dimensions.get("window").width * 0.02,
    // shadowOpacity: 0.5,
    // borderRadius: 10,
    // backgroundColor: "#444E67",
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").height * 0.1,
  },
});

export default stylesMap;
