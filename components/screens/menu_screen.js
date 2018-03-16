import React, {Component} from 'react';
import { StatusBar, StyleSheet, Text, View, NativeModules, Platform, Image, Dimensions } from 'react-native'
import { StackNavigator } from 'react-navigation';

import Border from '../border'
import Logo from '../logo'
import PlayButton from '../play_button'
import GalleryPreview from '../gallery_preview'

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

class MenuScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode={'cover'}
          style={styles.background}
          source={require('../../assets/img/background.png')}
        />
        <Border style={styles.border}>
          <Logo style={styles.logo}/>
          <PlayButton action={() => { this.props.navigation.navigate('Main') }} />
          <GalleryPreview />
        </Border>
      </View>
    );
  }
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    height: win.height,
    width: win.width,
    flex: 1,
    backgroundColor: '#f7f1cc',
    position: 'absolute',
    top: STATUSBAR_HEIGHT
  },
  logo: {
    marginTop: 20,
    width: win.width - 10
  },
  border: {
    flex: 1,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT
  },
});

export default MenuScreen;
