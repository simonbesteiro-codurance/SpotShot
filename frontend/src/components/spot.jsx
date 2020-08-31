import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import stylesSpot from "../styles/spot-style";

export default function Spot() {
  let imageURL = {
    uri:
      "https://cdn.civitatis.com/espana/barcelona/galeria/interior-sagrada-familia-barcelona.jpg",
  };
  let logoURL = {
    uri: "https://www.flaticon.com/premium-icon/icons/svg/707/707680.svg",
  };
  return (
    <>
      <View style={stylesSpot.container}>
        <Image style={stylesSpot.photo} source={imageURL} />
        <View style={stylesSpot.main}>
          <Text>Esto es la descripcion</Text>
          <Image style={stylesSpot.logo} source={logoURL} />
        </View>
      </View>
    </>
  );
}
