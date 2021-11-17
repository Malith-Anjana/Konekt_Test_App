/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {ForgotPasswordPage} from './src/components/Pages/ForgotPasswordPage';
import {LoginPage} from './src/components/Pages/LoginPage';
import {SignUpPage} from './src/components/Pages/SignUpPage';
import { OnBoard3 } from './src/components/Pages/OnBord3';
import { SplashPage } from './src/components/Pages/SplashPage';
import { PrivacyPolicyPage } from './src/components/Pages/PrivacyPolicyPage';
import { TermsPage } from './src/components/Pages/TermsPage';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="splashscreen" component={SplashPage} options={{headerShown:false}}/>
    <Stack.Screen name="OnBoardscreen3" component={OnBoard3} options={{headerShown:false}}/>
    <Stack.Screen name="forgotpasswordpage" component={ForgotPasswordPage} options={{headerShown:false}}/>    
    <Stack.Screen name="Login" component={LoginPage} options={{headerShown:false}}/>
    <Stack.Screen name="Signup" component={SignUpPage} options={{headerShown:false}}/>
    <Stack.Screen name="termspage" component={TermsPage} options={{headerShown:false}}/>
    <Stack.Screen name="privacypolicypage" component={PrivacyPolicyPage} options={{headerShown:false}}/>
      
    </Stack.Navigator>
  </NavigationContainer>

   
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});