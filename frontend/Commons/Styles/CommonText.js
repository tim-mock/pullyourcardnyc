import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

export const CommonText = styled.Text((props) => ({
  fontSize: props.fontSize || "22px",
  color: props.color || "black",
  textAlign: props.alignText || "center",
  marginTop: props.marginTop || 0,
}));
