import React, { Component, useState } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../../APICalls";
import CommonDropDown from "../../../Commons/CommonDropDown";
import { CommonErrorText } from "../../../Commons/Styles/CommonErrorText";
import { CommonText } from "../../../Commons/Styles/CommonText";
import PromptLocation from './PromptLocation'
import {
  CommonTextInput,
  TouchableStyledSubmit,
} from "../../../Commons/Styles/CommonTextInput";
import {
  License_TYPES,
  VALID_NYC_ZIPCODES,
} from "../../../Commons/Styles/FormTypes";
import { NavigationButton } from "../../../Commons/Styles/NavigationButton";
import { fetchZipType } from "../../../Redux/Actions";

const HomePage = ({ navigation }) => {
  const [zipCode, setZipCode] = useState("");
  const [zipError, setZipError] = useState(false);
  const [licenseValue, setLicenseValue] = useState("");
  const [licenseError, setLicenseError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (VALID_NYC_ZIPCODES.indexOf(zipCode) !== -1) {
      setZipError(false);
    } else setZipError(true);
    if (licenseValue.length < 1) {
      setLicenseError(true);
    }
    if (zipCode && licenseValue) {
      setLicenseError(false);
      setZipError(false)
      const data = { zipCode, licenseValue };
      dispatch(fetchZipType(data));

      dispatch(fetchSearch())
      navigation.navigate('MapScreen')
    }
  };

  const handleZip = (zipcode) => {
    setZipCode(zipcode);
  };

  const handleLicenseValue = (value) => {
    setLicenseValue(value);
  };

  const handleToMaps = () => {
    navigation.navigate('MapScreen')
  }

  return (
    <View>
     <PromptLocation />
      <View>
        <CommonText>
          <Text>Welcome to</Text>
        </CommonText>
        <CommonText>
          <Text>Pull Your Card NYC</Text>
        </CommonText>
      </View>
      <View>
        <CommonDropDown
          licenseValue={licenseValue}
          data={License_TYPES}
          handleValue={handleLicenseValue}
        />
        {licenseError && (
          <CommonErrorText>
            <Text>plese select a license type</Text>
          </CommonErrorText>
        )}
        <Text> </Text>
        <CommonTextInput
          maxLength={5}
          placeholder={"zipcode"}
          onChangeText={(t) => handleZip(t)}
          keyboardType="numeric"
        />
        {zipError && (
          <CommonErrorText>
            <Text>plese enter your 5 digit NYC zipCode</Text>
          </CommonErrorText>
        )}
        {/* <TouchableStyledSubmit placeholder={"zipcode"} /> */}
      </View>
      <View>
        <NavigationButton text={"submit"} onPress={handleSubmit} />
        <NavigationButton text={"jump to map"} onPress={handleToMaps} />
      </View>
    </View>
  );
};

export default HomePage;
