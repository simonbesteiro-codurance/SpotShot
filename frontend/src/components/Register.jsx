import React, { useEffect, useState } from "react";
import { TextInput, View, Text, Image, TouchableOpacity } from "react-native";
import stylesRegister from "../styles/register-style";
import { signUpUser } from "../actions/authActions";

export default function Register() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  function checkPasswordmatch() {
    if (password !== confirmPassword) {
      setMessage("password does not match");
    } else {
      signUpUser(username, password, firstName, lastName);
    }
  }

  return (
    <View style={stylesRegister.inputContainer}>
      <Text style={stylesRegister.headerText}>Register</Text>
      <Image
        source={require("../Images/SpotShotLogo.png")}
        style={stylesRegister.headerImage}
      />
      {message && <Text>{message}</Text>}
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

      <Text style={stylesRegister.inputTextHeader}>Password</Text>
      {/*util: passwordRules */}
      <TextInput
        multiline={false}
        secureTextEntry
        style={stylesRegister.inputText}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Text style={stylesRegister.inputTextHeader}> Confirm password</Text>
      <TextInput
        multiline={false}
        secureTextEntry
        style={stylesRegister.inputText}
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
      />
      <TouchableOpacity
        style={stylesRegister.submitButtonContainer}
        onPress={() => checkPasswordmatch(password, confirmPassword)}
      >
        <Text style={stylesRegister.submitButton}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}
