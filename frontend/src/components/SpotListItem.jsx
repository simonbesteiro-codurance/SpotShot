import React, { useEffect, useState } from "react";
import { Text } from "react-native";

export default function SpotListItem(spot) {
  const [spotItem, setSpotItem] = useState(spot);

  useEffect(() => {
    setSpotItem(spot);
  }, [spot]);
  return (
    <>
      <Text>Spot list it works</Text>
    </>
  );
}
