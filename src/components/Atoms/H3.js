import React from 'react'
import { StyleSheet, Text } from 'react-native';

export const H3 = ({title}) => {
    return (
        <Text style={styles.h3}>{!title?"Text":title}</Text>
    )
};

const styles = StyleSheet.create({
    h3:{
        fontSize:20,
        fontStyle:'normal',
        fontWeight:"bold",
        lineHeight:30,
        // fontFamily:"Poppins-Regular",
        color:"#000000"
    }
})

