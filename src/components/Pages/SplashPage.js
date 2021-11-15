import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { SplashTemp } from '../Templates/SplashTemp'

export const SplashPage = () => {
    const navigation = useNavigation();
    return (
        <SplashTemp mainNavigate={()=>navigation.navigate('Login')}/>
    )
}
