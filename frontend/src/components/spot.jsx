import React, { useEffect, useState } from "react";
import { Text, View, Image, ActivityIndicator, ScrollView } from "react-native";
import stylesSpot from "../styles/spot-style";
import logos from "../icon.mock";
import spotStore from "../stores/spotStore";
import SpotCarousel from "./spotCarousel";

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
  const mapPlaceholder = {
    uri:
      "https://storage.googleapis.com/support-forums-api/attachment/thread-9014924-11470506657998028469.JPG",
  };

  return (
    <>
      {imageURL ? (
        <ScrollView>
          <View style={stylesSpot.container}>
            <Image style={stylesSpot.mainPhoto} source={imageURL} />
            <View style={stylesSpot.mainContainer}>
              <View style={stylesSpot.mainHead}>
                <View style={stylesSpot.mainHeadRate}>
                  <Image style={stylesSpot.rateLogo} source={rateLogoURL} />
                  <Image style={stylesSpot.rateLogo} source={rateLogoURL} />
                  <Image style={stylesSpot.rateLogo} source={rateLogoURL} />
                  <Image style={stylesSpot.rateLogo} source={rateLogoURL} />
                  <Image style={stylesSpot.rateLogo} source={rateLogoURL} />
                </View>
                <Image
                  style={stylesSpot.mainHeadLogo}
                  source={favouriteLogoURL}
                />
              </View>
              <View style={stylesSpot.description}>
                <Text style={stylesSpot.descriptionText}>
                  {descriptionText}
                </Text>
              </View>
              <Image style={stylesSpot.mainMap} source={mapPlaceholder} />
            </View>
            <SpotCarousel />
          </View>
        </ScrollView>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
