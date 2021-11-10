import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const Paragraph1 = ({title}) => {
  return <Text style={styles.para2}>{!title ? 'Text' : title}</Text>;
};
 const styles = StyleSheet.create({
     para2:{
         fontStyle:"normal",
         fontWeight:"normal",
         fontSize:14,
         lineHeight:21,
         color: "#000000",
     }
 })