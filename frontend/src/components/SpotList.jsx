import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { loadSpots } from "../actions/spotActions";
import spotStore from "../stores/spotStore";
import SpotListItem from "./SpotListItem";

loadSpots();

export default function SpotList({ navigation }) {
  const [spotList, setSpotList] = useState(null);

  function onChange() {
    setSpotList(spotStore.getSpots());
  }

  useEffect(() => {
    spotStore.addChangeListener(onChange);
    return () => spotStore.removeChangeListener(onChange);
  }, []);
  return (
    <>
      {spotList ? (
        <ScrollView>
          <FlatList
            data={spotList}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Spot", { id: item._id })}
              >
                <SpotListItem spot={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
