import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const Label1 = ({title}) => {
  return <Text style={styles.label1}>{!title ? 'Text' : title}</Text>;
};
 const styles = StyleSheet.create({
     label1:{
         fontStyle:"normal",
         fontWeight:"normal",
         fontSize:14,
         lineHeight:21,
         color: "#000000",
     }
 })