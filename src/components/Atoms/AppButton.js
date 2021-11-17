import React from 'react'
import { Text,TouchableOpacity } from 'react-native'


export const AppButton = ({title,textColor,bgColor,onPress,btnType, btnText}) => {
    return (
        <TouchableOpacity onPress={onPress}
        style={[btnType,  {backgroundColor:bgColor}]}
      >
        <Text style={[btnText, {color: textColor}]}>{!title?"btnLarge":title}</Text>
      </TouchableOpacity>
    )
}
