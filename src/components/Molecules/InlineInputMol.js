import React from 'react'
import Fontawesome from 'react-native-vector-icons/FontAwesome'
import { InputInline } from '../Atoms/InputInline'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export const InlineInputMol = ({password,icon,placeholder}) => {
    return (
        <View style={styles.inline}>
        <View style={styles.icon}>
        <Fontawesome 
                    name={icon}
                    color="grey"
                    size={22}
                />
          </View>
          <View>
          <InputInline password={password} placeholder={placeholder}/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inline:{
        flexDirection:"row",
        alignContent:"center",
        justifyContent:"space-between",
        paddingHorizontal:10
        

    },
    icon:{
        top:7,
        paddingBottom:10
    }
})
