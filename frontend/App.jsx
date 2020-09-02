import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Spot from "./src/components/Spot";
import SpotList from "./src/components/SpotList";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="spotList"
      >
        <Stack.Screen name="spotList" component={SpotList} />

        <Stack.Screen name="spot" component={Spot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
