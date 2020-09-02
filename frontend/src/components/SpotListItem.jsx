import React, { useEffect, useState } from "react";
import { Text, View, Image, Button } from "react-native";
import stylesSpotListItem from "../styles/spotListItem-style";

export default function SpotListItem({ spot, navigation }) {
  const [spotItem, setSpotItem] = useState(null);

  useEffect(() => {
    setSpotItem(spot);
  }, []);
  return (
    <>
      {spotItem && (
        <View style={stylesSpotListItem.containerSpotItem}>
          <Text
            numberOfLines={2}
            style={stylesSpotListItem.containerSpotItemText}
          >
            {spotItem.description}
          </Text>
          <Image
            style={stylesSpotListItem.containerSpotItemImage}
            source={spotItem.image[0]}
          />
        </View>
      )}
    </>
  );
}
