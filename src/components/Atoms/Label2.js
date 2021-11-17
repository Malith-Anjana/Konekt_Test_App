import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const Label2 = ({title}) => {
  return <Text style={styles.label2}>{!title ? 'Text' : title}</Text>;
};
 const styles = StyleSheet.create({
     label2:{
         fontFamily:"Poppins-Regular",
         fontSize:12,
         lineHeight:18,
         color: "#000000",
     }
 })