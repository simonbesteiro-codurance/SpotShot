import React, { useEffect, useState } from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";
import stylesSpot from "../styles/spot-style";
import logos from "../icon.mock";
import spotStore from "../stores/spotStore";

export default function Spot() {
  const id = 1;
  const [imageURL, setImageURL] = useState(spotStore.getSpotById(id).image);
  const [descriptionText, setDescriptionText] = useState(
    spotStore.getSpotById(id).description
  );

  function onChange() {
    setImageURL(spotStore.getSpotById(id).image);
    setDescriptionText(spotStore.getSpotById(id).description);
  }

  useEffect(() => {
    spotStore.addChangeListener(onChange);
    return () => spotStore.removeChangeListener(onChange);
  }, []);

  const favouriteLogoURL = logos[0];
  const rateLogoURL = logos[1];
  return (
    <>
      {imageURL ? (
        <View style={stylesSpot.container}>
          <Image style={stylesSpot.photo} source={imageURL} />
          <View style={stylesSpot.main}>
            <View style={stylesSpot.mainRate}>
              <Image style={stylesSpot.rateLogo} source={rateLogoURL} />
              <Image style={stylesSpot.rateLogo} source={rateLogoURL} />
              <Image style={stylesSpot.rateLogo} source={rateLogoURL} />
              <Image style={stylesSpot.rateLogo} source={rateLogoURL} />
              <Image style={stylesSpot.rateLogo} source={rateLogoURL} />
            </View>
            <Image style={stylesSpot.favouriteLogo} source={favouriteLogoURL} />
          </View>
          <View style={stylesSpot.description}>
            <Text style={stylesSpot.descriptionText}>{descriptionText}</Text>
          </View>
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
