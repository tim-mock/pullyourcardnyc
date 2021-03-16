import React, { Component } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import styled from "styled-components";
import { CommonText } from "./CommonText";

export const StyledNavigationButton = styled.TouchableOpacity((props) => ({
  width: 320,
  height: 60,
  alignSelf: "center",
  borderRadius: 30,
  backgroundColor: "silver",
  flexDirection: "column",
  justifyContent: "center",
  marginVertical: props.marginVertical || 0,
}));

const NavigationButtonText = styled(Text)`
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;
const KeyboardAvoiding = styled(KeyboardAvoidingView)`
  position: absolute;
  alignself: center;
  top: 650px;
`;

// TODO re: keyboardAvoiding add checks for what keyboard settings the user has enabled
//          as this will change the required height of the keyboardVerticalOffset.
//          Also add check for to adjust vertical offset of next button depending on phone dimensiosn
export const NavigationButton = ({
  onPress,
  text,
  keyboardAvoiding,
  styles = {},
}) => {
  if (keyboardAvoiding) {
    return (
      <KeyboardAvoiding keyboardVerticalOffset={100} behavior="position">
        <StyledNavigationButton {...styles} onPress={onPress}>
          <NavigationButtonText>{text}</NavigationButtonText>
        </StyledNavigationButton>
      </KeyboardAvoiding>
    );
  }
  return (
    <StyledNavigationButton {...styles} onPress={onPress}>
      <NavigationButtonText>{text}</NavigationButtonText>
    </StyledNavigationButton>
  );
};
