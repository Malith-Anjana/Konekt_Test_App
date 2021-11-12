import React from 'react'
import {H1} from '../Atoms/H1'
import {InlineInputMol} from '../Molecules/InlineInputMol'
import {Label1} from '../Atoms/Label1'
import {BtnLarge} from '../Atoms/BtnLarge'
import { Dimensions, Image, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import { BtnSmall } from '../Atoms/BtnSmall'
import { useNavigation } from '@react-navigation/core'

const {height}=Dimensions.get("screen")
const height_Image = height * 0.28;
export const LoginTemp = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                style={styles.image}
                source={require("../../../assets/images/login.png")}
                resizeMode="center"
                />
            </View>
            <View style={styles.footer}>
            <View style={{marginTop:-30, paddingBottom:10}}>
            <H1 title="Login"/>
            </View>
            
            <View style={styles.action}>
                <InlineInputMol icon="user" placeholder="User Name"/>
            </View>


            <View style={styles.action}>
            <InlineInputMol password={true} icon="lock" placeholder="Password"/>
            </View>

            <View style={[styles.forgotText, {marginTop:4}]}>
                <BtnSmall color="#FFFF" textColor="#2196F3" title="Forgot Password?"/>
            </View>

            <View>
                <BtnLarge title="Login"/>
            </View>

            <View style={{paddingVertical:10, flexDirection:"row", justifyContent:"space-between", alignItems:"center",marginTop:10}}>
            <View style={styles.underline}/>
            <Text>OR</Text>
            <View style={styles.underline}/>
            </View>

            <View>
                <BtnLarge 
                title="Login with Google" 
                color="rgba(196, 196, 196, 0.2);"/>
            </View>

            <View style={{flexDirection:'row',justifyContent:"center",alignItems:"center",marginTop:15}}>
            <Label1 title="New to this app?"/>
            <BtnSmall color="#FFFF" onPress={()=>navigation.navigate('Signup')} textColor="#2196F3" title="Register"/>
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
        justifyContent:"flex-end",
        marginTop:20,
    },
    underline:{
        borderBottomWidth:1,
         width:"40%",
         borderBottomColor:"grey"
    }
})
