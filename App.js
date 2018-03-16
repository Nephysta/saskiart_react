import React from 'react';
import { StatusBar, StyleSheet, Text, View, NativeModules, Platform, Image, Dimensions } from 'react-native'
import { Font } from 'expo'
import { StackNavigator } from 'react-navigation'
import MenuScreen from './components/screens/menu_screen'
import MainScreen from './components/screens/main_screen'
import UploadImageScreen from './components/screens/upload_image_screen'

window.API_ENDPOINT = 'http://192.168.1.18:3000'

const AppContent = StackNavigator(
  {
    Menu: { screen: MenuScreen },
    Main: { screen: MainScreen },
    UploadImage: { screen: UploadImageScreen }
  },
  {
    initialRouteName: 'Menu',
    headerMode: 'none'
  }
)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fontLoaded: false }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'shadows-into-light': require('./assets/fonts/ShadowsIntoLight.ttf'),
      'open-sans-condensed-light-italic': require('./assets/fonts/OpenSansCondensed-LightItalic.ttf'),
      'open-sans-condensed-light': require('./assets/fonts/OpenSansCondensed-Light.ttf')
    });
    this.setState({ fontLoaded: true })
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <AppContent />
      )
    }
    else {
      return (
        <Text>App loading.</Text>
      )
    }
  }
}
