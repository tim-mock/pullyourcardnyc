import React, { Component } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { CommonText } from "../../../Commons/Styles/CommonText";
import { NavigationButton } from "../../../Commons/Styles/NavigationButton";
import { signIn } from "../../../Redux/Actions";

const LogIn = ({ navigation }) => {
  const dispatch = useDispatch();
  handleLogIn = () => {
    dispatch(signIn());
  };

  return (
    <View>
      <CommonText>Howdy, Please Login</CommonText>
      <NavigationButton text={"log In"} onPress={() => handleLogIn()} />
    </View>
  );
};
export default LogIn;
