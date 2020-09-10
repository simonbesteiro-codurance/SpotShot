import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, Image } from "react-native";
// import * as Permissions from "expo-permissions";
import { Picker } from "@react-native-community/picker";
import * as ImagePicker from "expo-image-picker";
import stylesCreateSpot from "../styles/createSpot-style";

export default function CreateSpot() {
  const [spotStyle, setSpotStyle] = useState("");
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
  const runCamera = async () => {
    permisos = await ImagePicker.requestCameraPermissionsAsync();

    if (permisos.granted !== false) {
      picker = await ImagePicker.launchCameraAsync();

      if (picker.cancelled !== true) {
        setSelectedImage({ localUri: picker.uri });
      }
    } else {
      console.log("permissions not granted");
    }
  };

  return (
    <>
      <TextInput
        editable
        style={stylesCreateSpot.titleInput}
        placeholder="Title"
      />
      <Picker
        selectedValue={spotStyle}
        style={stylesCreateSpot.stylePicker}
        onValueChange={(itemValue, itemIndex) => setSpotStyle(itemValue)}
      >
        <Picker.Item label="Urban" value="urban" />
        <Picker.Item label="Nature" value="nature" />
        <Picker.Item label="Arquitecture" value="arquitecture" />
      </Picker>
      <Image
        style={stylesCreateSpot.selectedPhoto}
        source={
          selectedImage
            ? { uri: selectedImage.localUri }
            : require("../Images/SpotShotlogo2.png")
        }
      />
      <TouchableOpacity
        style={stylesCreateSpot.cameraButtonContainer}
        onPress={() => runCamera()}
      >
        <Text style={stylesCreateSpot.submitButton}>Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={stylesCreateSpot.cameraButtonContainer}
        onPress={() => selectFile()}
      >
        <Text style={stylesCreateSpot.submitButton}>Gallery</Text>
      </TouchableOpacity>
      <TextInput
        editable
        style={stylesCreateSpot.titleInput}
        placeholder="Location extra information"
      />
      <TextInput
        editable
        style={stylesCreateSpot.titleInput}
        placeholder="Description"
      />
    </>
  );
}
