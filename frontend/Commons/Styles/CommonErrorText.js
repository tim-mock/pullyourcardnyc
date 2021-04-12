import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

export const CommonErrorText = styled.Text((props) => ({
  fontSize: props.fontSize || "15px",
  color: props.color || "red",
  textAlign: props.alignText || "center",
}));
