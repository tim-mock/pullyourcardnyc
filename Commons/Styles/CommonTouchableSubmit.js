import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import { CommonText } from "./CommonText";

export const StyledSubmit = styled.TouchableOpacity((props) => ({
  justifyContent: "center",
  margin: 5,
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 12,
  width: "55%",
  alignSelf: "center",
  backgroundColor: "#DDDDDD",
}));

export const TouchableStyledSubmit = ({ onPress, text, styles = {} }) => (
  <StyledSubmit {...styles} onPress={onPress}>
    <CommonText>{text}</CommonText>
  </StyledSubmit>
);
