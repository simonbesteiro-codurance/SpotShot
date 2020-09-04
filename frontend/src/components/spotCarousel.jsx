import React, { useEffect, useState } from "react";
import { Text, Image, ActivityIndicator } from "react-native";
import spotStore from "../stores/spotStore";
import stylesSpotCarousel from "../styles/spotCarousel-style";

export default function SpotCarousel({ id }) {
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
      {spot ? (
        <>
          <Image
            style={stylesSpotCarousel.suggestionChildImage}
            source={{ uri: spot.image[0].uri }}
          />
          <Text>{spot.title}</Text>
          <Text>{spot.type}</Text>
        </>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
