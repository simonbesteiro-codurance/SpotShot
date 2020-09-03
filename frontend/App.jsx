import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
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
        initialRouteName="SpotList"
      >
        <Stack.Screen name="SpotList">
          {(props) => <SpotList {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Spot" component={Spot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
