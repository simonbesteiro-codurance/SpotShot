import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import MapView, { Marker } from "react-native-maps";
import { Picker } from "@react-native-community/picker";
import * as ImagePicker from "expo-image-picker";
import stylesCreateSpot from "../styles/createSpot-style";
import { createSpot } from "../actions/spotActions";

// eslint-disable-next-line consistent-return
async function getUser() {
  // eslint-disable-next-line no-useless-catch
  try {
    let user = await AsyncStorage.getItem("user");
    user = JSON.parse(user);
    if (user !== null) {
      return user.usernameSpot;
    }
  } catch (error) {
    throw error;
  }
}

// eslint-disable-next-line react/prop-types
export default function CreateSpot({ navigation }) {
  const [spotStyle, setSpotStyle] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [locationInfo, setLocationInfo] = useState("");
  const [username, setUsername] = useState("");

  let picker = null;
  let permisos = null;
  const [selectedImage, setSelectedImage] = useState(null);
  const [location, setLocation] = useState({
    latitude: undefined,
    longitude: undefined,
  });

  const spotAlreadyExist = () => {
    Alert.alert("There is already an spot in your location", ":(", [
      {
        text: "Confirm",
        style: "confirm",
      },
    ]);
  };
  const missingInput = () => {
    Alert.alert("Please fill all the required fields", "", [
      {
        text: "Confirm",
        style: "confirm",
      },
    ]);
  };

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

  useEffect(() => {
    getUser().then((author) => setUsername(author));
    navigator.geolocation.getCurrentPosition(function (pos) {
      setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={stylesCreateSpot.container}>
        <View style={stylesCreateSpot.headerContainer}>
          <Picker
            selectedValue={spotStyle}
            style={stylesCreateSpot.stylePicker}
            onValueChange={(itemValue) => setSpotStyle(itemValue)}
          >
            <Picker.Item label="Other" value="other" />
            <Picker.Item label="Urban" value="urban" />
            <Picker.Item label="Nature" value="nature" />
            <Picker.Item label="Arquitecture" value="arquitecture" />
          </Picker>
          <TextInput
            editable
            style={stylesCreateSpot.titleInput}
            placeholder="Title"
            onChangeText={(value) => {
              setTitle(value);
            }}
          />
        </View>
        {location.latitude ? (
          <MapView
            showsUserLocation
            followsUserLocation
            scrollEnabled={false}
            style={stylesCreateSpot.mapContainer}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          />
        ) : (
          <ActivityIndicator />
        )}

        <TextInput
          editable
          style={stylesCreateSpot.descriptionInput}
          placeholder="Description"
          onChangeText={(value) => {
            setDescription(value);
          }}
        />
        <TouchableOpacity
          style={stylesCreateSpot.submitButtonContainer}
          onPress={async () => {
            await navigator.geolocation.getCurrentPosition(async function (
              pos
            ) {
              setLocation({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
              });
              const checkProximity = await createSpot(
                username,
                title,
                spotStyle,
                location.latitude,
                location.longitude,
                description,
                locationInfo
              );
              if (checkProximity === true) {
                spotAlreadyExist();
              } else if (title === "" || description === "") {
                missingInput();
              } else {
                navigation.navigate("Profile");
              }
            });
          }}
        >
          <Text style={stylesCreateSpot.submitButton}>Create Spot</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
