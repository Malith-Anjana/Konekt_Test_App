import React from 'react'
import {H1} from '../Atoms/H1'
import {InlineInputMol} from '../Molecules/InlineInputMol'
import {Label1} from '../Atoms/Label1'
import {Label2} from '../Atoms/Label2'
import {BtnLarge} from '../Atoms/BtnLarge'
import { Dimensions, Image, Platform, StyleSheet, View } from 'react-native'
import { BtnSmall } from '../Atoms/BtnSmall'
import { useNavigation } from '@react-navigation/core'

const {height}=Dimensions.get("screen")
const height_Image = height * 0.28;

export const SignUpTemp = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                style={styles.image}
                source={require("../../../assets/images/signup.png")}
                resizeMode="center"
                />
            </View>
            <View style={styles.footer}>
            <View style={{marginTop:-30, paddingBottom:10}}>
            <H1 title="Signup"/>
            </View>
            
            <View style={styles.action}>
                <InlineInputMol icon="user" placeholder="Full Name"/>
            </View>


            <View style={styles.action}>
            <InlineInputMol icon="at" placeholder="Email"/>
            </View>

            <View style={styles.action}>
            <InlineInputMol password={true} icon="lock" placeholder="Password"/>
            </View>

            <View style={styles.forgotText}>
                <Label2 title="By signing up,you're agree to our"/>
                <BtnSmall color="#FFFF" textColor="#2196F3" title="Terms & conditions"/>
                <Label2 title="and"/>
            </View>
            <View style={{flexDirection:"row",marginTop:-14,paddingHorizontal:-1}}>
                <BtnSmall color="#FFFF" textColor="#2196F3" title="Privacy Policy"/>
                </View>
            
            

            <View>
                <BtnLarge title="Signup"/>
            </View>

            <View style={{flexDirection:'row',justifyContent:"center",alignItems:"center",marginTop:15}}>
            <Label1 title="Already have an account ?"/>
            <BtnSmall color="#FFFF" textColor="#2196F3" onPress={()=>navigation.navigate('Login')} title="Login"/>
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
        marginHorizontal:1,
        paddingVertical:5
    },
    underline:{
        borderBottomWidth:1,
         width:"40%",
         borderBottomColor:"grey"
    }
})
