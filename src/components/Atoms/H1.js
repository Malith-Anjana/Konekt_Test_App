import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { COLORS } from '../../../assets/constants'

export const H1 = ({title}) => {
    return (
        <Text style={styles.h1}>{!title ? "Text" : title}</Text>
    )
}

const styles = StyleSheet.create({
    h1:{
        fontStyle:'normal',
        fontSize:36,
        lineHeight:54,
        fontFamily:"Poppins-Bold",
        color:COLORS.black
    }
})