import { StyleSheet, Dimensions } from "react-native";

const darkTheme = true;

const stylesLogin = StyleSheet.create({
  headerText: {
    textAlign: "center",
    margin: "auto",
    fontWeight: "bold",
    fontSize: Dimensions.get("window").width * 0.07,
    color: darkTheme ? "#68E3AA" : "#497870",
  },
  headerImage: {
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").height * 0.5,
    resizeMode: "contain",
  },
  inputContainer: {
    backgroundColor: darkTheme ? "#283047" : "#E0E0E0",
    flex: 1,
    justifyContent: "space-evenly",
    padding: Dimensions.get("window").width * 0.2,
  },
  inputTextHeader: {
    fontSize: Dimensions.get("window").width * 0.04,
    fontWeight: "bold",
    color: darkTheme ? "#68E3AA" : "#497870",
  },
  inputText: {
    color: darkTheme ? "#68E3AA" : "#497870",
    margin: Dimensions.get("window").width * 0.01,
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").height * 0.05,
    borderColor: darkTheme ? "#E0E0E0" : "#283047",
    borderWidth: 1,
  },
  submitButtonContainer: {
    justifyContent: "center",
    marginLeft: Dimensions.get("window").width * 0.15,
  },
  submitButton: {
    backgroundColor: darkTheme ? "#706D80" : "#497870",
    color: darkTheme ? "#68E3AA" : "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: Dimensions.get("window").width * 0.03,
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").height * 0.05,
    borderColor: "transparent",
  },
});

export default stylesLogin;