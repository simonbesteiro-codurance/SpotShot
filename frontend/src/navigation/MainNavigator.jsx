import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SpotNavigation from "./SpotNavigation";
import AuthNavigation from "./AuthNavigation";
import Map from "../components/Map";
import Login from "../components/Login";
import Register from "../components/Register";

export default function MainNavigator() {
  const Tab = createBottomTabNavigator();
  const isLogged = true;

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="spotLists">
        <Tab.Screen name="spotList" component={SpotNavigation} />
        <Tab.Screen
          name={isLogged ? "register" : "login"}
          component={isLogged ? Register : Login}
        />
        <Tab.Screen name="Map" component={Map} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
