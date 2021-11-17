import React from 'react'
import {H1} from '../Atoms/H1'
import {Paragraph1} from '../Atoms/Paragraph1'
import {InlineInputMol} from '../Molecules/InlineInputMol'
import {Dimensions, Image, Platform, StyleSheet, View } from 'react-native'
import { AppButton } from '../Atoms/AppButton'
import { Btn, COLORS, Images } from '../../../assets/constants'


const {height}=Dimensions.get("screen")
const height_Image = height * 0.28;

export const ForgotPasswordTemp = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                style={styles.image}
                source={Images.forgotpassword}
                resizeMode="center"
                />
            </View>
            <View style={styles.footer}>
            <View style={{marginTop:-30, paddingBottom:10}}>
            <H1 title={"Forgot"+"\n"+"Password ?"}/>
            </View>

            <View style={{flexDirection:'row',alignItems:"center",marginVertical:15}}>
            <Paragraph1 title="Don’t worry ! It happens. Please enter the address associated with your account."/>
            </View>

            <View style={styles.action}>
            <InlineInputMol icon="at" placeholder="Email"/>
            </View>

            <View style={{marginTop:50}}>
                <AppButton 
                btnType={Btn.btnLarge}
                btnText={Btn.textLarge}
                textColor={COLORS.white}
                bgColor={COLORS.blue}
                title="Submit"/>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"rgba(227, 242, 253, 0.5)"
    },
    header:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    footer:{
        flex:1.5,
        backgroundColor:"#fff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    image:{
        height:height_Image
    },
    action:{
        flexDirection:"row",
        marginTop:15,
    },
    input:{
        flex:1,
        paddingLeft:10,
        marginTop:Platform.OS == 'ios'? 0: -12,
    },
    forgotText:{
        flexDirection:'row',
        alignItems:"center",
        marginTop:20,
        marginHorizontal:5,
        paddingVertical:5
    },
    underline:{
        borderBottomWidth:1,
         width:"40%",
         borderBottomColor:"grey"
    }
})
