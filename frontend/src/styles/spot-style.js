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
    justifyContent: "space-evenly",
    margin: 10,
  },
  photo: {
    height: Dimensions.get("window").height * 0.4,
    width: Dimensions.get("window").width,
  },
  logo: {
    width: Dimensions.get("window").width * 0.1,
    height: Dimensions.get("window").height * 0.04,
    marginLeft: Dimensions.get("window").width * 0.45,
  },
});

export default stylesSpot;
