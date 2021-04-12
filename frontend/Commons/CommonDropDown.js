import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Dropdown } from "sharingan-rn-modal-dropdown";

const CommonDropDown = ({ data, handleValue, licenseValue }) => {
  const onChangeSS = (value) => {
    handleValue(value);
  };

  return (
    <View
      style={{
        flexDirection: "column",
        // height: "100%",
      }}
    >
      <ScrollView>
        <View style={styles.container}>
          <Dropdown
            label="License Type"
            data={data}
            enableSearch
            value={licenseValue}
            onChange={onChangeSS}
          />
        </View>
        <View style={styles.container}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
  buttonView: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
  },
});

export default CommonDropDown;
