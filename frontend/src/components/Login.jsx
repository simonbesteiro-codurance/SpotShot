import React, { useEffect, useState } from "react";
import { TextInput, View, Button, Text } from "react-native";
import stylesLogin from "../styles/login-style";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={stylesLogin.inputContainer}>
      <Text style={stylesLogin.headerText}>LOGIN</Text>
      <TextInput
        multiline={false}
        autoFocus
        placeholder="username"
        inlineImageLeft={require("../Images/SpotShotLogo.png")}
        style={stylesLogin.inputText}
        onChangeText={(text) => setUser(text)}
        value={user}
      />
      <TextInput
        multiline={false}
        secureTextEntry
        placeholder="password"
        style={stylesLogin.inputText}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Confirm" />
    </View>
  );
}
