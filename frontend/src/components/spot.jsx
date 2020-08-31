import React, { useEffect, useState } from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";
import stylesSpot from "../styles/spot-style";
import logos from "../icon.mock";
import spotStore from "../stores/spotStore";

export default function Spot() {
  const [imageURL, setImageURL] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  useEffect(() => {
    setImageURL(spotStore.getSpotById(1).image);
    setDescriptionText(spotStore.getSpotById(1).description);
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
