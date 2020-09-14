import React, { useState } from "react";
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
import MapView, { Marker } from "react-native-maps";
import stylesSpot from "../styles/spot-style";
import spotStore from "../stores/spotStore";
import AddPhoto from "./AddPhoto";

export default function Spot({ route, navigation }) {
  let { id } = route.params;
  const [spot, setSpot] = useState(id ? spotStore.getSpotById(id) : null);
  const [spotList, setSpotList] = useState(spotStore.getSuggestions());
  const deltaCoords = { latD: 0.0922, lngD: 0.0421 };

  return (
    <SafeAreaView>
      {spot ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={stylesSpot.container}>
            <Image style={stylesSpot.mainPhoto} source={spot.image[0]} />
            <View style={stylesSpot.mainContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.push("AddPhoto", { spotId: id });
                }}
              >
                <Text>Add Photo</Text>
              </TouchableOpacity>
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
                  latitudeDelta: deltaCoords.latD,
                  longitudeDelta: deltaCoords.lngD,
                }}
              >
                <Marker
                  coordinate={{ latitude: spot.lat, longitude: spot.lgn }}
                  title={spot.title}
                  description={"Showld draw spotShot"}
                >
                  <Image
                    source={require("../Images/SpotShotlogo2.png")}
                    style={stylesSpot.mapMarker}
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
