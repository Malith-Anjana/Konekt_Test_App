import React from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { COLORS, Images, SIZES } from '../../../assets/constants'
import {H1} from '../Atoms/H1'
import {Paragraph1} from '../Atoms/Paragraph1'

export const PrivacyPoicy = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                style={{height:SIZES.height*0.28}}
                source={Images.login}
                resizeMode="center"
                />
            </View>

            <View style={styles.footer}>
                <View style={styles.h1}>
                    <H1 title="Privacy Policy"/>
                </View>
                <ScrollView>
                <View style={{paddingBottom:"5%",}}>
                    <Paragraph1 
                    title="At admart.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by eat.com and how we use it."/>
                    <Paragraph1 
                    title="If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us."/>
                    <Paragraph1 
                    title="This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in eat.com. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Privacy Policy Generator."/>
                </View>
                </ScrollView>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightblue
    },
    header:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.lightblue
    },
    footer:{
        flex:3,
        backgroundColor:"white",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:"5%"


    },
    h1:{
        paddingVertical:24,

    }

})