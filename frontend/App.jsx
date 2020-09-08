import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation/MainNavigator";
import AuthNavigation from "./src/navigation/AuthNavigation";
import authStore from "./src/stores/authStore";

export default function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  function onChange() {
    setMessage(authStore.getMessage());
    setUser(authStore.getUser());
  }

  useEffect(() => {
    authStore.addChangeListener(onChange);
    return () => authStore.removeChangeListener(onChange);
  }, []);
  return (
    <>
      {user && !message ? (
        <MainNavigator />
      ) : (
        <NavigationContainer>
          <AuthNavigation />
        </NavigationContainer>
      )}
    </>
  );
}
