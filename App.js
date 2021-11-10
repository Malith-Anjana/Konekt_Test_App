/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ForgotPasswordPage } from './src/components/Pages/ForgotPasswordPage';
import { LoginPage } from './src/components/Pages/LoginPage';
import { SignUpPage } from './src/components/Pages/SignUpPage';

const App = () => {
  return (
    <View style={styles.container}>
    <ForgotPasswordPage/>
    </View>
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