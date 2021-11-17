import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const Paragraph2 = ({title}) => {
  return <Text style={styles.para2}>{!title ? 'Text' : title}</Text>;
};
 const styles = StyleSheet.create({
     para2:{
         fontStyle:"normal",
         fontWeight:"normal",
         fontFamily:"Poppins-Regular",
         fontSize:12,
         lineHeight:18,
         color: "#000000",
     }
 })