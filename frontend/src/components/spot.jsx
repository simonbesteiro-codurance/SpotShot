import React from "react";
import { Text, View, Image } from "react-native";
import stylesSpot from "../styles/spot-style";
import spots from "../../spot.mock";
import logos from "../../icon.mock";

export default function Spot() {
  const imageURL = spots[0].image;
  const favouriteLogoURL = logos[0];
  const rateLogoURL = logos[1];
  const descriptionText = spots[0].description;
  return (
    <>
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
    </>
  );
}
