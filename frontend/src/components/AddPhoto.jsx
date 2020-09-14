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
import * as ImagePicker from "expo-image-picker";

import stylesCreateSpot from "../styles/createSpot-style";

export default function AddPhoto() {
  let picker = null;

  let permisos = null;
  const [selectedImage, setSelectedImage] = useState(null);

  const selectFile = async () => {
    permisos = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permisos.granted !== false) {
      picker = await ImagePicker.launchImageLibraryAsync();

      if (picker.cancelled !== true) {
        setSelectedImage({ localUri: picker.uri });
      }
    } else {
      console.log("permissions not granted");
    }
  };
  console.log(selectedImage);
  return (
    <View style={stylesCreateSpot.headerContainer}>
      <TouchableOpacity
        style={stylesCreateSpot.cameraButtonContainer}
        onPress={() => runCamera()}
      >
        <Image
          style={stylesCreateSpot.generalIcon}
          source={{
            uri: "https://www.flaticon.es/svg/static/icons/svg/565/565390.svg",
          }}
        />
        <Text style={stylesCreateSpot.submitButton}>Use the camera</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={stylesCreateSpot.cameraButtonContainer}
        onPress={() => selectFile()}
      >
        <Image
          style={stylesCreateSpot.generalIcon}
          source={{
            uri: "https://www.flaticon.es/svg/static/icons/svg/635/635952.svg",
          }}
        />
        <Text style={stylesCreateSpot.submitButton}>Import from gallery</Text>
      </TouchableOpacity>
    </View>
  );
}
