import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {LoginTemp} from '../Templates/LoginTemp';

export const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <LoginTemp
      forgotPWNavigate={() => navigation.navigate('forgotpasswordpage')}
      registerNavigate={() => navigation.navigate('Signup')}
    />
  );
};
