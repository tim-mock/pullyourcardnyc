import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { setInitialLocation } from "../../../Redux/Actions";

const PromptLocation = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      () => setFirstLocation();
    })();
  }, []);

  useEffect(() => {
    if (location !== null) {
      dispatch(setInitialLocation(location));
    
    }
  }, [location]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const setFirstLocation = () => {
    dispach(setInitialLocation({}));
  };
  return (
   null
  )
}
export default PromptLocation
//   return (
//     <View style={styles.container}>
//       <Text style={styles.paragraph}>{text}</Text>
//     </View>
//   );
// };

// export default PromptLocation;

// const styles = StyleSheet.create({
//   container: {
//     fontSize: 20,
//     lineHeight: 23,
//     textAlign: "center",
//   },
//   paragraph: {
//     fontSize: 20,
//     lineHeight: 23,
//     textAlign: "center",
//   },
// });
