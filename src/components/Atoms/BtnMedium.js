import React from 'react'
import { Button,Text, StyleSheet, TouchableOpacity } from 'react-native'

export const BtnMedium = ({title,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}
        style={styles.button2}
      >
        <Text style={styles.text}>{!title?"btnMedium":title}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button2:{
        height:40,
        backgroundColor: "#2196F3",
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
        fontWeight:"600",
        lineHeight:24,
        color: "#FFFFFF",
        
    }
})