import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Btn, COLORS } from '../../../assets/constants'
import {AppButton} from '../Atoms/AppButton'

export const SplashTemp = ({mainNavigate}) => {
    return (
        <View style={styles.splash}>
            <Text style={styles.head}>Splash</Text>
            <View style={styles.go}>
            <AppButton
             btnType={Btn.btnMedium}
             btnText={Btn.textMedium}
             onPress={mainNavigate} 
             title="Go"
             bgColor={COLORS.white}
             textColor={COLORS.blue}
             />
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
