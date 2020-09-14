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
import { uploadSpotPhoto } from "../actions/spotActions";
import stylesCreateSpot from "../styles/createSpot-style";

export default function AddPhoto({ route }) {
  const { spotId } = route.params;
  let picker = null;

  let permisos = null;
  const [selectedImage, setSelectedImage] = useState(null);

  const uploadImage = () => {
    console.log(selectedImage);
    selectedImage && uploadSpotPhoto(spotId, selectedImage);
  };

  const selectFile = async () => {
    permisos = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permisos.granted !== false) {
      picker = await ImagePicker.launchImageLibraryAsync({
        allowsMultipleSelection: false,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (picker.cancelled !== true) {
        setSelectedImage({ localUri: picker.uri });
      }
    } else {
      console.log("permissions not granted");
    }
  };
  return (
    <>
      <View style={stylesCreateSpot.headerContainer}>
        <TouchableOpacity
          style={stylesCreateSpot.cameraButtonContainer}
          onPress={() => runCamera()}
        >
          <Image
            style={stylesCreateSpot.generalIcon}
            source={{
              uri:
                "https://www.flaticon.es/svg/static/icons/svg/565/565390.svg",
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
              uri:
                "https://www.flaticon.es/svg/static/icons/svg/635/635952.svg",
            }}
          />
          <Text style={stylesCreateSpot.submitButton}>Import from gallery</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={stylesCreateSpot.cameraButtonContainer}
        onPress={() => uploadImage()}
      >
        <Text style={stylesCreateSpot.submitButton}>UploadImage</Text>
      </TouchableOpacity>
    </>
  );
}
