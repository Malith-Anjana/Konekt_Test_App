import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/core';



const Square = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? '#2196F3' : 'rgba(0, 0, 0, 0.3)';
  } else {
    backgroundColor = selected ? '#2196F3' : 'rgba(255, 255, 255, 0.5)';
  }
  return (
    <View
      style={{
        width: 6,
        height: 6,
        borderRadius:6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Done = ({ isLight, ...props }) => {
    const navigation = useNavigation();
  return (  <TouchableOpacity {...props} onPress={()=>navigation.navigate('Login')}>
    <View style={{
        backgroundColor: '#2196F3',
        alignItems: 'center', 
        justifyContent: 'center',
        paddingVertical:"3%",
        paddingHorizontal:"10%",
        marginRight:15,
        borderRadius: 20
      }}
    >
      <Text style={{ color: 'white',fontSize:16 }}>Get Start</Text>
    </View>
  </TouchableOpacity>
);
    }
const Skip = ({ ...props}) =>{
    const navigation = useNavigation();
  return(
  <TouchableOpacity {...props} onPress={()=>navigation.navigate('Login')}>
  <View style={{
      backgroundColor: '#ffff',
      alignItems: 'center', 
      justifyContent: 'center',
      paddingVertical:"3%",
      paddingHorizontal:"10%",
      marginLeft:15,
      borderRadius: 20
    }}
  >
    <Text style={{ color: '#2196F3',fontSize:16, fontWeight:"bold"}}>Skip</Text>
  </View>
</TouchableOpacity>
)};


const Next = ({ isLight, ...props }) => (
    <TouchableOpacity {...props}>
  <View style={{
      backgroundColor: '#2196F3',
      alignItems: 'center', 
      justifyContent: 'center',
      paddingVertical:"3%",
      paddingHorizontal:"10%",
      marginRight:15,
      borderRadius: 20
    }}
  >
    <Text style={{ color: 'white',fontSize:16 }}>Next</Text>
  </View>
</TouchableOpacity>
  );

export const OnBoard3 = () => (
  <Onboarding
    DotComponent={Square}
    NextButtonComponent={Next}
    SkipButtonComponent={Skip}
    DoneButtonComponent={Done}
    bottomBarColor={"#fff"}
    subTitleStyles={{fontSize:14,marginTop:-60,paddingHorizontal:10}}
    titleStyles={{fontWeight:"bold", fontSize:24, marginTop:-120}} // set default color for the title
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image style={styles.image} source={require('../../../assets/images/onboarding1.png')} />,
        title: "Buy & Selling",
        subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

      },
      {
        backgroundColor: '#fff',
        image: <Image style={styles.image} source={require('../../../assets/images/onboarding2.png')} />,
        title: 'From Anywhere ',
        subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        backgroundColor: '#fff',
        image: <Image style={[styles.image]} source={require('../../../assets/images/onboarding3.png')} />,
        title: 'Real State',
        subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ]}
  />
);

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:"75%",
        margin:0
    },
    button:{
        backgroundColor:"#ffff",
    }
})