import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Login from './screens/login'
import SignUp from './screens/signup'
import Home from './screens/homepage'

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const switchNav = createSwitchNavigator({
  Login:{
    screen:Login
  },
  SignUp:{
    screen:SignUp
  },
  Home:{
    screen:Home
  }
})

const AppContainer = createAppContainer(switchNav)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
