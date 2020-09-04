import React from "react";
import { Dimensions, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MAp() {
  return (
    <>
      <MapView
        style={{
          flex: 1,
          height: Dimensions.get("window").height,
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
    </>
  );
}
