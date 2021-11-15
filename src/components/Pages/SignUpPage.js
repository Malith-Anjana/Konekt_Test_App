import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {SignUpTemp} from '../Templates/SignUpTemp';
export const SignUpPage = () => {
  const navigation = useNavigation();
  return <SignUpTemp loginNavigate={() => navigation.navigate('Login')} />;
};
