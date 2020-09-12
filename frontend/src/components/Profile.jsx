import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  Switch,
  ScrollView,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import stylesProfile from "../styles/profile-style";
import authStore from "../stores/authStore";
import spotStore from "../stores/spotStore";

import { signOut } from "../actions/authActions";
import SpotListItem from "./SpotListItem";

export default function Profile({ navigation }) {
  const [user, setUser] = useState(authStore.getUser());
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleSwitch = () => setDarkTheme((previousState) => !previousState);
  const [createdSpots, setCreatedSpots] = useState("");

  async function logOutUser() {
    await AsyncStorage.clear();
    signOut();
  }

  function onChange() {
    setUser(authStore.getUser());
  }

  useEffect(() => {
    setCreatedSpots(spotStore.getCreatedSpots(user.username));
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
        <View style={stylesProfile.headerContainer}>
          <View>
            <Switch
              // trackColor={{ false: "#767577", true: "#81b0ff" }}
              // thumbColor={darkTheme ? "#f5dd4b" : "#f4f3f4"}
              // ios_backgroundColor="#3e3e3e"
              trackColor={stylesProfile.darkSwitchEnable}
              thumbColor={stylesProfile.darkSwitchDisable}
              ios_backgroundColor={stylesProfile.darkSwitchBackground}
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
        </View>
        <ScrollView style={stylesProfile.favouriteContainer}>
          <View>
            <Text style={stylesProfile.userName}>
              {user.firstName ? user.firstName : "Guest user"}
            </Text>
            <Text style={stylesProfile.userName}>{user.lastName}</Text>
          </View>
          <FlatList
            style={stylesProfile.containerCreatedSpot}
            data={createdSpots}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Spot", { id: item._id })}
              >
                <TouchableOpacity>
                  <Text style={stylesProfile.deleteButton}>Delete</Text>
                </TouchableOpacity>
                <SpotListItem spot={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item._id}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
