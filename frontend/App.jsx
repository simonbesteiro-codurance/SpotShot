import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Spot from "./src/components/Spot";
import SpotList from "./src/components/SpotList";
import Map from "./src/components/Map";
import Login from "./src/components/Login";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Map">{(props) => <Map {...props} />}</Stack.Screen>
        <Stack.Screen name="SpotList">
          {(props) => <SpotList {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login">
          {(props) => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Spot" component={Spot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
