import { StyleSheet, Dimensions } from "react-native";

const stylesSpotListItem = StyleSheet.create({
  containerSpotItem: {
    height: Dimensions.get("window").height * 0.3,
    width: Dimensions.get("window").width * 0.8,
    flexDirection: "row-reverse",
    margin: "auto",
    marginTop: Dimensions.get("window").height * 0.05,
    backgroundColor: "#7FFFD4",
    position: "relative",
  },

  containerSpotItemImage: {
    height: Dimensions.get("window").height * 0.2,
    width: Dimensions.get("window").width * 0.3,
    resizeMode: "contain",
    margin: Dimensions.get("window").width * 0.02,
    marginRight: Dimensions.get("window").width * 0.2,
  },
  containerSpotItemText: {
    textAlign: "justify",
    margin: Dimensions.get("window").width * 0.02,
    marginRight: Dimensions.get("window").width * 0.2,
    height: Dimensions.get("window").height * 0.2,
    width: Dimensions.get("window").width * 0.5,
  },
});

export default stylesSpotListItem;
