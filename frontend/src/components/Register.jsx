import React, { useEffect, useState } from "react";
import { TextInput, View, Text, Image, TouchableOpacity } from "react-native";
import stylesRegister from "../styles/register-style";
import { signUpUser } from "../actions/authActions";

export default function Login() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={stylesRegister.inputContainer}>
      <Text style={stylesRegister.headerText}>Register</Text>
      <Image
        source={require("../Images/SpotShotLogo.png")}
        style={stylesRegister.headerImage}
      />
      <Text style={stylesRegister.inputTextHeader}>Username</Text>
      <TextInput
        multiline={false}
        autoFocus
        style={stylesRegister.inputText}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <Text style={stylesRegister.inputTextHeader}>First Name </Text>
      <TextInput
        multiline={false}
        autoFocus
        style={stylesRegister.inputText}
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
      />

      <Text style={stylesRegister.inputTextHeader}>Last Name </Text>
      <TextInput
        multiline={false}
        autoFocus
        style={stylesRegister.inputText}
        onChangeText={(text) => setLastName(text)}
        value={lastName}
      />

      <Text style={stylesRegister.inputTextHeader}>password</Text>
      {/*util: passwordRules */}
      <TextInput
        multiline={false}
        secureTextEntry
        style={stylesRegister.inputText}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity
        style={stylesRegister.submitButtonContainer}
        onPress={() => signUpUser(username, password, firstName, lastName)}
      >
        <Text style={stylesRegister.submitButton}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}
