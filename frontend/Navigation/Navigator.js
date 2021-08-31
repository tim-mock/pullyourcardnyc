import React from "react";

// navigation stuff
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useSelector } from "react-redux";

import HomePage from "./Screens/Protected/HomePage";
import SignUp from "./Screens/NonProtected/SignUp";
import Welcome from "./Screens/NonProtected/Welcome";
import LogIn from "./Screens/NonProtected/LogIn";
import MapScreen from "./Screens/Protected/MapScreen";
import PromptLocation from "./Screens/Protected/PromptLocation";

const Stack = createStackNavigator();

const getAuthState = (state) => state.auth;
const getIsSignedIn = (state) => getAuthState(state).isSignedIn;

export default function Navigator({ navigation }) {
  const isSignedIn = useSelector(getIsSignedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PhoneInputScreen">
        {isSignedIn ? (
          <>
            {/* <Stack.Screen name="permissions" component={PromptLocation} /> */}
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="LogIn" component={LogIn} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
