import React, { useEffect, useState } from "react";
import { TextInput, View, Text, Image, TouchableOpacity } from "react-native";
import stylesLogin from "../styles/login-style";
import { logInUser } from "../actions/authActions";
import authStore from "../stores/authStore";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  function checkMessage() {
    logInUser(username, password);
  }
  function onChange() {
    setMessage(authStore.getMessage());
  }
  useEffect(() => {
    authStore.addChangeListener(onChange);
    return () => authStore.removeChangeListener(onChange);
  }, []);

  return (
    <View style={stylesLogin.inputContainer}>
      <Text style={stylesLogin.headerText}>LOGIN</Text>
      <Image
        source={require("../Images/SpotShotLogo.png")}
        style={stylesLogin.headerImage}
      />
      <Text>{message && message}</Text>
      <Text style={stylesLogin.inputTextHeader}>username</Text>
      <TextInput
        multiline={false}
        autoFocus
        style={stylesLogin.inputText}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Text style={stylesLogin.inputTextHeader}>password</Text>

      {/*util: passwordRules */}
      <TextInput
        multiline={false}
        secureTextEntry
        style={stylesLogin.inputText}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity
        style={stylesLogin.submitButtonContainer}
        onPress={() => checkMessage()}
      >
        <Text style={stylesLogin.submitButton}>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={stylesLogin.submitButtonContainer}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={stylesLogin.submitButton}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesLogin.submitButtonContainer}>
        <Text style={stylesLogin.submitButton}>skip this step</Text>
      </TouchableOpacity>
    </View>
  );
}
