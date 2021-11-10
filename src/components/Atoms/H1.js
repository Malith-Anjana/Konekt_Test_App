import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const H1 = ({title}) => {
    return (
        <Text style={styles.h1}>{!title ? "Text" : title}</Text>
    )
}

const styles = StyleSheet.create({
    h1:{
        fontStyle:'normal',
        fontWeight:"bold",
        fontSize:36,
        lineHeight:54,
        fontFamily:"Poppins-Bold",
        color:"#000000"
    }
})