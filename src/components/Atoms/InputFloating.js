import React from 'react'
import {Label2} from './Label2'
import { StyleSheet, TextInput, View, Text } from 'react-native'

export const InputFloating = ({password,label}) => {
    return (
        <View>
        <Text style={styles.label}>{!label?"Label":label}</Text>
        <TextInput 
        style={styles.input} 
        secureTextEntry={password}  
        />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        fontSize:14,
        fontWeight:"normal",
        fontStyle:"normal",
        borderBottomColor:"#C4C4C4",
        padding:1,
        width:269,
        lineHeight:21,
        borderBottomWidth:1
    },
    label:{
       fontFamily:"Poppins-Regular",
    }
})