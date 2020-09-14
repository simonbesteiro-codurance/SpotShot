import React, { useEffect, useState } from "react";
import { Text, Image, ActivityIndicator, View } from "react-native";
// eslint-disable-next-line import/no-cycle
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
        <View style={stylesSpotCarousel.suggestionContainer}>
          <Image
            style={stylesSpotCarousel.suggestionChildImage}
            source={{ uri: spot.image[0].uri }}
          />

          <Text style={stylesSpotCarousel.suggestionChildMainText}>
            {spot.title}
          </Text>
          <Text style={stylesSpotCarousel.suggestionChildText}>
            {spot.type}
          </Text>
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
