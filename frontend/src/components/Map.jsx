import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import spotStore from "../stores/spotStore";
import stylesMap from "../styles/map-style";

export default function Map({ navigation }) {
  const [spotList, setSpotList] = useState(spotStore.getCoordenates());
  const [spotSuggestion, setSpotSuggestion] = useState(
    spotStore.getSuggestions()
  );

  function onChange() {
    setSpotList(spotStore.getCoordenates());
    setSpotSuggestion(spotStore.getSuggestions());
  }

  useEffect(() => {
    spotStore.addChangeListener(onChange);
    return () => spotStore.removeChangeListener(onChange);
  }, []);
  return (
    <>
      {spotList ? (
        <MapView
          style={stylesMap.mapContainer}
          showsUserLocation
          showsPointsOfInterest
        >
          {spotList.map((element) => {
            console.log(element);
            return (
              <Marker
                coordinate={{ latitude: element.lat, longitude: element.lgn }}
                title={element.title}
              >
                <Image
                  source={require("../Images/SpotShotlogo2.png")}
                  style={{
                    height: Dimensions.get("window").height * 0.1,
                    width: Dimensions.get("window").width * 0.1,
                    resizeMode: "contain",
                  }}
                />
                <Callout
                  onPress={() => {
                    navigation.navigate("Spot", { id: element._id });
                  }}
                  style={{
                    height: Dimensions.get("window").height * 0.1,
                    width: Dimensions.get("window").width * 0.4,
                  }}
                >
                  <Image
                    style={{
                      height: "90%",
                      width: "100%",
                    }}
                    source={element.image}
                  />
                  <Text>{element.title}</Text>
                </Callout>
              </Marker>
            );
          })}
        </MapView>
      ) : (
        <ActivityIndicator />
      )}
      {spotSuggestion ? (
        <>
          <FlatList
            data={spotSuggestion}
            horizontal
            style={stylesMap.suggestionContainer}
            keyExtractor={(item) => item._id}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={stylesMap.suggestionChild}
                  onPress={() => {
                    navigation.navigate("Spot", { id: item._id });
                  }}
                >
                  {item.render()}
                </TouchableOpacity>
              );
            }}
          />
        </>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
