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
  mainHead: {
    flexDirection: "row",
  },
  mainContainer: {
    margin: 30,
  },
  mainContainerTitle: {
    marginTop: "5%",
  },
  mainContainerTitleText: {
    textAlign: "center",
  },
  mainHeadRate: {
    flexDirection: "row",
  },
  mainPhoto: {
    height: Dimensions.get("window").height * 0.4,
    width: Dimensions.get("window").width,
  },
  rateLogo: {
    width: Dimensions.get("window").width * 0.1,
    height: Dimensions.get("window").height * 0.04,
    marginLeft: Dimensions.get("window").width * 0.02,
    resizeMode: "contain",
  },
  mainHeadLogo: {
    width: Dimensions.get("window").width * 0.1,
    height: Dimensions.get("window").height * 0.04,
    marginLeft: Dimensions.get("window").width * 0.2,
    resizeMode: "contain",
  },
  description: {
    margin: Dimensions.get("window").height * 0.02,
  },
  descriptionText: {
    textAlign: "justify",
  },
  mainMap: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.4,
  },
  suggestionContainer: {
    margin: Dimensions.get("window").width * 0.01,
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").height * 0.1,
  },
});

export default stylesSpot;
