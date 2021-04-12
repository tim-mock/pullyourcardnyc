import React, { useState } from "react";
import { View, Text } from "react-native";
import { CommonText } from "../../../Commons/Styles/CommonText";
import { TouchableStyledSubmit } from "../../../Commons/Styles/CommonTextInput";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");

  handlePress = () => {
    console.log(name);
  };

  return (
    <View>
      <CommonText>Please Contribute to the Beast</CommonText>
    </View>
  );
};
export default SignUp;
