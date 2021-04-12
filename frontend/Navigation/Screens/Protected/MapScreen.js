import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";

const getProjectState = (state) => state.project;
const getMyLocation = (state) => getProjectState(state).location;

const MapScreen = ({ navigation }) => {
  const { latitude, longitude } = useSelector(getMyLocation);

  const defaultLocation = {
    latitude,
    longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={
          //   () => initializeRegion()
          defaultLocation
        }
      />
    </View>
  );
};
export default MapScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
