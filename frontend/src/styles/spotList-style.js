import { StyleSheet, Dimensions } from "react-native";

const darkTheme = true;

const stylesSpotList = StyleSheet.create({
  containerSpotList: {
    flexDirection: "column",
    margin: Dimensions.get("window").width * 0.1,
    paddingTop: Dimensions.get("window").width * 0.05,
    backgroundColor: darkTheme ? "#706D80" : "#6A6778",
  },
});

export default stylesSpotList;
