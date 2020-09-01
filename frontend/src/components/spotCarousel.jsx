import React from "react";
import { View } from "react-native";

import stylesSpotCarousel from "../styles/spotCarousel-style";

export default function SpotCarousel() {
  return (
    <>
      <View style={stylesSpotCarousel.suggestionCarousel}>
        <View style={stylesSpotCarousel.childPlaceHolder} />
        <View style={stylesSpotCarousel.childPlaceHolder} />
        <View style={stylesSpotCarousel.childPlaceHolder} />
      </View>
    </>
  );
}
