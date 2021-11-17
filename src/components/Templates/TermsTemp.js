import React from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { COLORS, Images, SIZES } from '../../../assets/constants'
import {H1} from '../Atoms/H1'
import {Paragraph1} from '../Atoms/Paragraph1'

export const TermsTemp = () => {
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
                    <H1 title={"Terms &" + "\n" + "Conditions"}/>
                </View>
                <ScrollView>
                <View style={{paddingBottom:"5%",}}>
                    <View style={{paddingBottom:"5%"}}>
                    <Paragraph1 
                    title="Version 1.0"/>
                    </View>
                    <Paragraph1 
                    title="The eat.com website located at www.eat.com is a copyrighted work belonging to Eat. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features."/>
                    <Paragraph1 
                    title="All such additional terms, guidelines, and rules are incorporated by reference into these Terms."/>
                    <Paragraph1 
                    title="These Terms of Use described the legally binding terms and conditions that oversee your use of the Site. BY LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and you represent that you have the authority and capacity to enter into these Terms. YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE SITE. IF YOU DISAGREE WITH ALL OF THE PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE."/>
                     <Paragraph1 
                    title="These terms require the use of arbitration Section 10.2 on an individual basis to resolve disputes and also limit the remedies available to you in the event of a dispute. These Terms of Use were created with the help of the Terms Of Use Generator."/>
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