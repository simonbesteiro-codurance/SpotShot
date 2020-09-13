import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import stylesSpot from "../styles/spot-style";
import logos from "../icon.mock";
import spotStore from "../stores/spotStore";
import SpotCarousel from "./SpotCarousel";
import { loadSpots, Dimensions } from "../actions/spotActions";
import MapView, { Marker } from "react-native-maps";

export default function Spot({ route, navigation }) {
  let { id } = route.params;
  const [spot, setSpot] = useState(id ? spotStore.getSpotById(id) : null);
  const [spotList, setSpotList] = useState(spotStore.getSuggestions());

  function onChange() {
    setSpot(spotStore.getSpotById(id));
    setSpotList(spotStore.getSuggestions());
  }

  useEffect(() => {
    spotStore.addChangeListener(onChange);
    return () => spotStore.removeChangeListener(onChange);
  }, []);

  console.log(spot);
  // const favouriteLogoURL = logos[0];
  // const rateLogoURL = logos[1];

  return (
    <SafeAreaView>
      {spot ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={stylesSpot.container}>
            <Image style={stylesSpot.mainPhoto} source={spot.image[0]} />
            <View style={stylesSpot.mainContainer}>
              {/* <View style={stylesSpot.mainHead}>
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
              </View> */}
              <View style={stylesSpot.mainContainerTitle}>
                <Text style={stylesSpot.mainContainerTitleText}>
                  {spot.title}
                </Text>
              </View>
              <View style={stylesSpot.description}>
                <Text style={stylesSpot.descriptionText}>
                  {spot.description}
                </Text>
              </View>
              <MapView
                style={stylesSpot.mainMap}
                region={{
                  latitude: spot.lat,
                  longitude: spot.lgn,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker
                  coordinate={{ latitude: spot.lat, longitude: spot.lgn }}
                  title={spot.title}
                  description={"Showld draw spotShot"}
                >
                  <Image
                    source={require("../Images/SpotShotlogo2.png")}
                    style={{
                      height: 30,
                      width: 30,
                      resizeMode: "contain",
                    }}
                  />
                </Marker>
              </MapView>
            </View>
          </View>

          {spotList ? (
            <FlatList
              style={stylesSpot.suggestionList}
              data={spotList}
              horizontal
              keyExtractor={(item) => item._id}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={stylesSpot.suggestionContainer}
                    onPress={() => {
                      navigation.push("Spot", { id: item._id });
                    }}
                  >
                    {item.render()}
                  </TouchableOpacity>
                );
              }}
            />
          ) : (
            <ActivityIndicator style={stylesSpot.activityIndicator} />
          )}
        </ScrollView>
      ) : (
        <ActivityIndicator style={stylesSpot.activityIndicator} />
      )}
    </SafeAreaView>
  );
}
