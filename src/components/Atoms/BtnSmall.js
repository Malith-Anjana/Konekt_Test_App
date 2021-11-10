import React from 'react'
import { Button,Text, StyleSheet, TouchableOpacity } from 'react-native'

export const BtnSmall = ({title,color,textColor}) => {
    return (
        <TouchableOpacity
        style={[styles.button3, {backgroundColor:!color?"#2196F3":color}]}
      >
        <Text style={[styles.text, {color:!textColor?"#FFFFFF":textColor}]}>
        {!title?"btnsm":title}
        </Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button3:{
        height:32,
        borderRadius:24,
        paddingHorizontal:6,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    },
    text:{
        fontSize:12,
        fontStyle:"normal",
        fontWeight:"600",
        lineHeight:24,
        
    }
})