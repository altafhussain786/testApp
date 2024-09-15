import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../theme";

const TouchableButton = ({ extraStyle, BtnIcon }) => {
  return (
    <TouchableOpacity style={[styles.container, { ...extraStyle }]}>
      {BtnIcon}
    </TouchableOpacity>
  );
};

export default TouchableButton;

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS?.white,
    borderRadius: 30,
  },
});
