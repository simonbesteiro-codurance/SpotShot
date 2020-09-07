import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation/MainNavigator";
import AuthNavigation from "./src/navigation/AuthNavigation";
import authStore from "./src/stores/authStore";

export default function App() {
  const [user, setUser] = useState(null);
  function onChange() {
    setUser(authStore.getUser());
  }

  useEffect(() => {
    authStore.addChangeListener(onChange);
    return () => authStore.removeChangeListener(onChange);
  }, []);
  return (
    <>
      {user ? (
        <MainNavigator />
      ) : (
        <NavigationContainer>
          <AuthNavigation />
        </NavigationContainer>
      )}
    </>
  );
}
