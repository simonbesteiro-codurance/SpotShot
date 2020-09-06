import { StyleSheet, Dimensions } from "react-native";

const darkTheme = false;

const stylesLogin = StyleSheet.create({
  headerText: {
    textAlign: "center",
    margin: "auto",
    fontSize: Dimensions.get("window").width * 0.07,
    color: darkTheme ? "#68E3AA" : "#497870",
  },
  inputContainer: {
    backgroundColor: darkTheme ? "#283047" : "#E0E0E0",
    flex: 1,

    justifyContent: "space-evenly",
    padding: Dimensions.get("window").width * 0.2,
  },
  inputText: {
    color: darkTheme ? "#68E3AA" : "#497870",

    margin: Dimensions.get("window").width * 0.01,
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").height * 0.05,
    borderColor: darkTheme ? "#E0E0E0" : "#283047",
    borderWidth: 1,
  },
  submitButton: {
    color: darkTheme ? "#68E3AA" : "#497870",
  },
});

export default stylesLogin;
