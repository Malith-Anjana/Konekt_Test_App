import React from "react";
import { StyleSheet, Text } from "react-native";

export const H2 = ({title}) => {
  return <Text style={styles.h2}>{!title?"Text":title}</Text>;
};

const styles = StyleSheet.create({
  h2: {
    fontSize:24,
    fontstyle: 'normal',
    fontweight: "600",
    lineHeight:36,
    // fontFamily:"Poppins-Regular",
    color: "#000000",
  },
});
