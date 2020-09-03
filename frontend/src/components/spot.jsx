import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import stylesSpot from "../styles/spot-style";
import logos from "../icon.mock";
import spotStore from "../stores/spotStore";
import SpotCarousel from "./SpotCarousel";
import { loadSpots } from "../actions/spotActions";

loadSpots();

const DATA = [
  {
    id: "5f4e4766174ddd4c09fabca0",
    render: () => <SpotCarousel />,
  },
  {
    id: "5f4e4766174ddd4c09fabca0",
    render: () => <SpotCarousel />,
  },
  {
    id: "5f4e4766174ddd4c09fabca0",
    render: () => <SpotCarousel />,
  },
  {
    id: "5f4e4766174ddd4c09fabca0",
    render: () => <SpotCarousel />,
  },
  {
    id: "5f4e4766174ddd4c09fabca0",
    render: () => <SpotCarousel />,
  },
  {
    id: "5f4e4766174ddd4c09fabca0",
    render: () => <SpotCarousel />,
  },
  {
    id: "5f4e4766174ddd4c09fabca0",
    render: () => <SpotCarousel />,
  },
  {
    id: "5f4e4766174ddd4c09fabca0",
    render: () => <SpotCarousel />,
  },
];

export default function Spot({ route, navigation }) {
  let { id } = route.params;
  const [spot, setSpot] = useState(id ? spotStore.getSpotById(id) : null);
  const carouselId = "5f4e4766174ddd4c09fabca0";

  function onChange() {
    console.log(id);
    setSpot(spotStore.getSpotById(id));
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
      {spot ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          <View style={stylesSpot.container}>
            <Image style={stylesSpot.mainPhoto} source={spot.image[0]} />
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
              <Image style={stylesSpot.mainMap} source={mapPlaceholder} />
            </View>
          </View>

          <FlatList
            data={DATA}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 100,
                    height: 100,
                  }}
                  onPress={() => {
                    navigation.push("Spot", { id: item.id });
                  }}
                >
                  {item.render()}
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
