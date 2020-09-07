import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Spot from "../components/Spot";
import SpotList from "../components/SpotList";

export default function SpotNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SpotList"
    >
      <Stack.Screen name="SpotList">
        {(props) => <SpotList {...props} />}
      </Stack.Screen>

      <Stack.Screen name="Spot" component={Spot} />
    </Stack.Navigator>
  );
}
