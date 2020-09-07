import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View, ImageBackground } from "react-native";
import stylesProfile from "../styles/profile-style";
import authStore from "../stores/authStore";

export default function Profile() {
  const [user, setUser] = useState(authStore.getUser());

  function onChange() {
    setUser(authStore.getUser());
    console.log(user);
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
        <TouchableOpacity style={stylesProfile.logOutButtonContainer}>
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
