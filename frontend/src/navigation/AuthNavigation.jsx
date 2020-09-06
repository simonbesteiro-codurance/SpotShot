import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../components/Login";

export default function SpotNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login">
        {(props) => <Login {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
