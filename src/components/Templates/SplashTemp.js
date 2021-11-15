import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {BtnMedium} from '../Atoms/BtnMedium'
export const SplashTemp = ({mainNavigate}) => {
    return (
        <View style={styles.splash}>
            <Text style={styles.head}>Splash</Text>
            <View style={styles.go}>
            <BtnMedium onPress={mainNavigate} title="Go" bgColor="white"/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    splash:{
        flex:1,
        backgroundColor:"#2196F3",
        alignItems:"center"
    },
    head:{
        fontSize:40,
        fontStyle:"normal",
        fontWeight:"bold",
        color:"#fff",
        fontFamily:"Poppins-Bold",
        marginTop:"70%"
    },
    go:{
        marginTop:"65%"
    }
})
