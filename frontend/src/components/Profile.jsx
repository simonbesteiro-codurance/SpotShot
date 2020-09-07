import React, { useEffect, useState } from "react";
import { Text } from "react-native";

import authStore from "../stores/authStore";

export default function Profile() {
  const [user, setUser] = useState(authStore.getUser());

  function onChange() {
    setUser(authStore.getUser());
    console.log(user);
  }

  useEffect(() => {
    authStore.addChangeListener(onChange);
    return () => authStore.removeChangeListener(onChange);
  }, []);

  return <Text>{user.username}</Text>;
}
