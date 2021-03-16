import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import styled from "styled-components";

export const CommonTextInput = styled.TextInput((props) => ({
  width: "55%",
  justifyContent: "center",
  margin: 5,
  borderColor: "gray",
  borderWidth: 1,
  alignSelf: "center",
  height: "15%",
}));

export const TouchableStyledSubmit = ({
  onChangeText,
  placeholder,
  styles = {},
}) => (
  <CommonTextInput
    {...styles}
    onChangeText={onChangeText}
    placeholder={placeholder}
  />
);
