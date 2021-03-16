import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CommonText } from "../../../Commons/Styles/CommonText";
import { NavigationButton } from "../../../Commons/Styles/NavigationButton";

const Welcome = ({ navigation }) => {
  handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  handleLogIn = () => {
    navigation.navigate("LogIn");
  };

  return (
    <View>
      <CommonText>Welcome to BoilerPlate </CommonText>
      <NavigationButton text={"Sign Up!"} onPress={handleSignUp} />
      <Text> </Text>
      <NavigationButton text={"Sign In!"} onPress={handleLogIn} />
    </View>
  );
};
export default Welcome;
