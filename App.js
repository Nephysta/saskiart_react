import React from 'react';
import { StatusBar, StyleSheet, Text, View, NativeModules, Platform, Image, Dimensions } from 'react-native'
import { StackNavigator } from 'react-navigation'
import MenuScreen from './components/screens/menu_screen'
import MainScreen from './components/screens/main_screen'

export default StackNavigator(
  {
    Menu: { screen: MenuScreen },
    Main: { screen: MainScreen }
  },
  {
    initialRouteName: 'Menu',
    headerMode: 'none'
  }
);
