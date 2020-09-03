import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import spotStore from "../stores/spotStore";
import stylesSpotCarousel from "../styles/spotCarousel-style";

export default function SpotCarousel({ type }) {
  if (type === undefined) type = "random";
  const id = "5f4e4766174ddd4c09fabca0";
  const [spot, setSpot] = useState(id ? spotStore.getSpotById(id) : null);
  function onChange() {
    setSpot(spotStore.getSpotById(id));
  }

  useEffect(() => {
    spotStore.addChangeListener(onChange);
    return () => spotStore.removeChangeListener(onChange);
  }, []);

  return (
    <>
      <Image
        style={stylesSpotCarousel.suggestionChildImage}
        source={{ uri: spot.image[0].uri }}
      />

      <Text>{spot.title}</Text>
      <Text>{spot.type}</Text>
    </>
  );
}
