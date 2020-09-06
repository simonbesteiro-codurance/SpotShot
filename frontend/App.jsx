import "react-native-gesture-handler";
import React from "react";
import MainNavigator from "./src/navigation/MainNavigator";
import AuthNavigation from "./src/navigation/AuthNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const isLogged = true;
  return (
    <>
      {isLogged ? (
        <MainNavigator />
      ) : (
        <NavigationContainer>
          <AuthNavigation />
        </NavigationContainer>
      )}
    </>
  );
}
