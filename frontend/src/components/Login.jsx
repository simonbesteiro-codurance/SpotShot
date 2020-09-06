import React, { useEffect, useState } from "react";
import { TextInput, View, Button, Text, Image } from "react-native";
import stylesLogin from "../styles/login-style";

const darkTheme = true;

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={stylesLogin.inputContainer}>
      <Text style={stylesLogin.headerText}>LOGIN</Text>
      <Image
        source={require("../Images/SpotShotlogo2.png")}
        style={stylesLogin.headerImage}
      />
      <Text style={stylesLogin.inputTextHeader}>username</Text>
      <TextInput
        multiline={false}
        autoFocus
        inlineImageLeft={require("../Images/SpotShotLogo.png")}
        style={stylesLogin.inputText}
        onChangeText={(text) => setUser(text)}
        value={user}
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
      <Button title="Confirm" color={darkTheme ? "#68E3AA" : "#497870"} />
    </View>
  );
}
