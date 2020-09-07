import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SpotNavigation from "./SpotNavigation";
import MapNavigation from "./MapNavigation";
import Login from "../components/Login";
import authStore from "../stores/authStore";
import stylesTab from "../styles/tab-style";

export default function MainNavigator() {
  const Tab = createBottomTabNavigator();
  const [user, setUser] = useState(null);
  function onChange() {
    setUser(authStore.getUser());
  }

  useEffect(() => {
    authStore.addChangeListener(onChange);
    return () => authStore.removeChangeListener(onChange);
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="spotLists"
        tabBarOptions={{
          labelStyle: {
            fontSize: 12,
          },
          tabStyle: { color: "pink" },
          style: stylesTab.tabContainer,
        }}
      >
        <Tab.Screen name="SpotList" component={SpotNavigation} />
        <Tab.Screen name="Map" component={MapNavigation} />
        <Tab.Screen
          name={user ? "profile" : "login"}
          component={user ? Login : Login}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
