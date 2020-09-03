import { StyleSheet, Dimensions } from "react-native";

const stylesSpotListItem = StyleSheet.create({
  containerSpotItem: {
    height: Dimensions.get("window").height * 0.3,
    width: Dimensions.get("window").width * 0.8,
    flexDirection: "column",
    backgroundColor: "white",

    shadowOpacity: 0.5,
    borderRadius: 10,
    marginBottom: Dimensions.get("window").width * 0.1,
  },

  containerSpotItemImage: {
    height: "70%",
    width: "100%",
  },
  containerSpotItemTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "30%",
    padding: "5%",
  },
  containerSpotItemTabContainer: {
    height: "100%",
    width: "70%",
  },
  containerSpotItemTabContainerType: {},
  containerSpotItemTabContainerTitle: {
    textAlign: "justify",
    fontSize: 25,
    height: "80%",
    width: "100%",
    color: "#2FAF84",
  },
  containerSpotItemTabRating: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#293133",
    justifyContent: "center",
  },
  containerSpotItemTabRatingText: {
    fontSize: 20,
    textAlign: "center",
    color: "#2FAF84",
  },

  rateLogo: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});

export default stylesSpotListItem;
