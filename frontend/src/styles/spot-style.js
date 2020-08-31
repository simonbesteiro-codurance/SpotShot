import { StyleSheet, Dimensions } from "react-native";

const stylesSpot = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
  },
  View: {
    margin: 0,
  },
  main: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  mainRate: {
    flexDirection: "row",
  },
  photo: {
    height: Dimensions.get("window").height * 0.4,
    width: Dimensions.get("window").width,
  },
  rateLogo: {
    width: Dimensions.get("window").width * 0.1,
    height: Dimensions.get("window").height * 0.04,
    marginLeft: Dimensions.get("window").width * 0.02,
  },
  favouriteLogo: {
    width: Dimensions.get("window").width * 0.1,
    height: Dimensions.get("window").height * 0.04,
    marginLeft: Dimensions.get("window").width * 0.3,
  },
  description: {
    margin: Dimensions.get("window").height * 0.04,
    textAlign: "center",
  },
  descriptionText: {
    textAlign: "center",
  },
});

export default stylesSpot;
