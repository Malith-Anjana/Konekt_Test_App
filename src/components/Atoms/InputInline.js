import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { Dimensions, StyleSheet, TextInput, Touchable, TouchableOpacity, View } from 'react-native'

const {width}=Dimensions.get("screen")
const appWidth = width * 0.68;

export const InputInline = ({placeholder,password}) => {
    const [pwIcon, setpwIcon] = useState(password)
    
    const passwordIcon=()=>{
        setpwIcon(!pwIcon)
    }
    return (
        <View style={styles.inline}>
        <TextInput 
        style={styles.input} 
        placeholder={!placeholder?"placeholder":placeholder}
        placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
        secureTextEntry={pwIcon}  
        />
       {password && <TouchableOpacity onPress={()=>passwordIcon()}>
       <Feather style={styles.feather} 
                    name={pwIcon?"eye-off":"eye"}
                    color="grey"
                    size={18}
                />
        </TouchableOpacity>
        }
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