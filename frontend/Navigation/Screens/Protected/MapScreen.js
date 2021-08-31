import React, { useState, useEffect } from "react";
import MapView, {Marker, Callout} from "react-native-maps";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import {Linking} from 'react-native'
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";


const emptyArray = []
const getProjectState = (state) => state.project;
const getMyLocation = (state) => getProjectState(state).location;
const getLocationArr = (state) => getProjectState(state).initialQuery?.data?.listDataTableNews?.items ?? emptyArray
const MapScreen = ({ navigation }) => {
  const { latitude, longitude } = useSelector(getMyLocation);
const licensedWorkers = useSelector(getLocationArr) || emptyArray

const callNumber = (phone) => {
  console.log('phone number', phone)
} 

  const defaultLocation = {
    latitude,
    longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      
      <MapView style={styles.map}
        initialRegion={
          //   () => initializeRegion()
          defaultLocation
        }
        showsUserLocation={true}
        userLocationAnnotationTitle={'you'}
      zoomTapEnabled={true}
        showsTraffic={true}
        >

          {/* <Marker coordinate={{latitude, longitude}} title={'you'} > */}

          {/* </Marker> */}
      
        
        {licensedWorkers.map((item, i) => {
          let lat = item.Latitude
          let long = item.Longitude
          let name = item.Business_Name
          let phone = item.Business_Phone_Number
          if (!lat || !long) return null
         
          return (
            <Marker key={i} coordinate={{latitude: lat, longitude: long}}  >
              <Callout >
                <View style={{textAlign: 'center'}}>
                  <Text>{name}</Text>
                 <TouchableOpacity
                 onPress={() => callNumber(phone)}
                 >
                   <Text>{phone}</Text>
                   </TouchableOpacity>
                </View>
              </Callout>
              </Marker>            
          )
        })}
        
      </MapView>
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
