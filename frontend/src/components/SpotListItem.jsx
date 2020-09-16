import React, { useEffect, useState } from "react";
import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import stylesSpotListItem from "../styles/spotListItem-style";
import logos from "../icon.mock";
import spotStore from "../stores/spotStore";

export default function SpotListItem({ spot }) {
  const [spotItem, setSpotItem] = useState(spot);

  return (
    <>
      {spotItem && (
        <View style={stylesSpotListItem.containerSpotItem}>
          <Image
            style={stylesSpotListItem.containerSpotItemImage}
            source={spotItem.image[0]}
          />
          <View style={stylesSpotListItem.containerSpotItemTab}>
            <View style={stylesSpotListItem.containerSpotItemTabContainer}>
              <Text
                style={stylesSpotListItem.containerSpotItemTabContainerTitle}
              >
                {spotItem.title}
              </Text>
              <Text
                style={stylesSpotListItem.containerSpotItemTabContainerType}
              >
                {spotItem.type}
              </Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
}
