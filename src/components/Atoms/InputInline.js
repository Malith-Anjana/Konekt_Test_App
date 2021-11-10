import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { Dimensions, StyleSheet, TextInput, View } from 'react-native'

const {width}=Dimensions.get("screen")
const appWidth = width * 0.68;

export const InputInline = ({placeholder,password}) => {
    return (
        <View style={styles.inline}>
        <TextInput 
        style={styles.input} 
        placeholder={!placeholder?"placeholder":placeholder}
        placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
        secureTextEntry={password}  
        />
       {password && <Feather style={styles.feather} 
                    name="eye-off"
                    color="grey"
                    size={18}
                />}
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderBottomColor:"#C4C4C4",
        padding:1,
        marginLeft:10,
        width:appWidth,
        borderBottomWidth:1,
        borderBottomColor:"grey"
    },
    inline:{
        flexDirection:"row",
    },
    feather:{
        marginTop:5,
        marginRight:20
    }
})