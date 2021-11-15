import React from 'react'
import {Text, StyleSheet, TouchableOpacity } from 'react-native'

export const BtnMedium = ({title,onPress,bgColor}) => {
    return (
        <TouchableOpacity onPress={onPress}
        style={[styles.button2, {backgroundColor:bgColor?bgColor:"#2196F3",}]}
      >
        <Text style={[styles.text, {color:bgColor?"#2196F3":"#fff"}]}>{!title?"btnMedium":title}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button2:{
        height:40,
        borderRadius:24,
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    },
    text:{
        fontSize:14,
        fontStyle:"normal",
        fontWeight:"800",
        lineHeight:24,
        color: "#FFFFFF",
        
    }
})