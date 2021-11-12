import React from 'react'
import { Button,Text, StyleSheet, TouchableOpacity } from 'react-native'

export const BtnLarge = ({title,color,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}
        style={[styles.button1,  {backgroundColor:!color?"#2196F3":color}]}
      >
        <Text style={[styles.text, {color: !color?"#FFFFFF":"black"}]}>{!title?"btnLarge":title}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button1:{
        height:48,
        borderRadius:24,
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    },
    text:{
        fontSize:16,
        fontStyle:"normal",
        fontWeight:"600",
        lineHeight:24,
        
        
    }
})