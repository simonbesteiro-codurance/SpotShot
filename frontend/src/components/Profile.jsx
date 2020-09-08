import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  Switch,
} from "react-native";
import stylesProfile from "../styles/profile-style";
import authStore from "../stores/authStore";
import { signOut } from "../actions/authActions";

export default function Profile({ navigation }) {
  const [user, setUser] = useState(authStore.getUser());
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleSwitch = () => setDarkTheme((previousState) => !previousState);

  function logOutUser() {
    signOut();
  }

  function onChange() {
    setUser(authStore.getUser());
  }

  useEffect(() => {
    authStore.addChangeListener(onChange);
    return () => authStore.removeChangeListener(onChange);
  }, []);

  return (
    <View style={stylesProfile.profileContainer}>
      <ImageBackground
        source={
          user.image ? user.image : require("../Images/defaultProfile.jpg")
        }
        style={stylesProfile.backgroundImage}
      >
        <View>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={darkTheme ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={darkTheme}
          />
          <Text>Dark Theme</Text>
        </View>
        <TouchableOpacity
          style={stylesProfile.logOutButtonContainer}
          onPress={() => logOutUser()}
        >
          <Text style={stylesProfile.logOutButton}>logOut</Text>
        </TouchableOpacity>
        <View>
          <Text style={stylesProfile.userName}>{user.firstName}</Text>
          <Text style={stylesProfile.userName}>{user.lastName}</Text>
        </View>
        <View>
          <Text></Text>
        </View>
      </ImageBackground>
    </View>
  );
}
