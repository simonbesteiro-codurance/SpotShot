import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Item } from "react-native";
import { loadSpots } from "../actions/spotActions";
import spotStore from "../stores/spotStore";
import SpotListItem from "./SpotListItem";

loadSpots();

export default function SpotList() {
  const [spotList, setSpotList] = useState(spotStore.getSpots());

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
          <SpotListItem spot={spotList[0]} />
        </ScrollView>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
