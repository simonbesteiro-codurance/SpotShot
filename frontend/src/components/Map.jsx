import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
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
      <MapView style={stylesMap.mapContainer}>
        {spotList.map((element) => {
          console.log(element);
          return (
            <Marker
              coordinate={{ latitude: element.lat, longitude: element.lgn }}
              title={element.title}
              description={"Showld draw spotShot"}
            >
              <Image
                source={require("../Images/SpotShotlogo2.png")}
                style={{
                  height: Dimensions.get("window").height * 0.1,
                  width: Dimensions.get("window").width * 0.1,
                  resizeMode: "contain",
                }}
              />
            </Marker>
          );
        })}
      </MapView>
      {spotList ? (
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
