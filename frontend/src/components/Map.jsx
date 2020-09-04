import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import spotStore from "../stores/spotStore";
import stylesMap from "../styles/map-style";

export default function Map({ navigation }) {
  const [spotList, setSpotList] = useState(spotStore.getSuggestions());

  function onChange() {
    setSpotList(spotStore.getSuggestions());
  }

  useEffect(() => {
    spotStore.addChangeListener(onChange);
    return () => spotStore.removeChangeListener(onChange);
  }, []);
  return (
    <>
      <MapView
        style={{
          height: Dimensions.get("window").height * 0.85,
          width: Dimensions.get("window").width,
        }}
      >
        <Marker
          coordinate={{ latitude: 42.23552, longitude: 2.12002 }}
          title={"Test"}
          description={"Showld draw spotShot"}
        >
          <Image
            source={require("../Images/SpotShotLogo.png")}
            style={{
              height: Dimensions.get("window").height * 0.1,
              width: Dimensions.get("window").width * 0.1,
              resizeMode: "contain",
            }}
          />
        </Marker>
        <Marker
          coordinate={{ latitude: 41.53552, longitude: 2.12002 }}
          title={"Test"}
          description={"Showld draw spotShot"}
        >
          <Image
            source={require("../Images/SpotShotLogo.png")}
            style={{
              height: Dimensions.get("window").height * 0.1,
              width: Dimensions.get("window").width * 0.1,
              resizeMode: "contain",
            }}
          />
        </Marker>
      </MapView>
      {spotList ? (
        <>
          <FlatList
            data={spotList}
            horizontal
            style={stylesMap.suggestionContainer}
            keyExtractor={(item) => item._id}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={stylesMap.suggestionChild}
                  onPress={() => {
                    navigation.push("Spot", { id: item._id });
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
