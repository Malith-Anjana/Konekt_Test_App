import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export const InputFlat = ({placeHolder,password}) => {
    return (
        <TextInput 
        style={styles.input} 
        placeholder={!placeHolder?"placeholder":placeHolder}
        placeholderTextColor={"#BDBDBD"}
        secureTextEntry={password}  
        />
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:"#F6F6F6",
        height:50,
        width:269,
        fontSize:14,
        fontWeight:"normal",
        fontStyle:"normal",
        lineHeight:21,
        paddingStart:20,
    }
})