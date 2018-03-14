import React from 'react';
import { StatusBar, StyleSheet, Text, View, NativeModules, Platform, Image, Dimensions } from 'react-native'
import { StackNavigator } from 'react-navigation'
import MenuScreen from './components/screens/menu_screen'
import MainScreen from './components/screens/main_screen'
import UploadImageScreen from './components/screens/upload_image_screen'

window.API_ENDPOINT = 'http://192.168.1.18:3000'

export default StackNavigator(
  {
    Menu: { screen: MenuScreen },
    Main: { screen: MainScreen },
    UploadImage: { screen: UploadImageScreen }
  },
  {
    initialRouteName: 'Menu',
    headerMode: 'none'
  }
);
