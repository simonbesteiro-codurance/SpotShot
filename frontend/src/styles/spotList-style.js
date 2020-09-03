import { StyleSheet, Dimensions } from "react-native";

const stylesSpotList = StyleSheet.create({
  containerSpotList: {
    flexDirection: "column",
    margin: Dimensions.get("window").width * 0.1,
    paddingTop: Dimensions.get("window").width * 0.05,
  },
});

export default stylesSpotList;
