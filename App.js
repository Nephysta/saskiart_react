import React from 'react';
import { StatusBar, StyleSheet, Text, View, NativeModules, Platform, Image, Dimensions } from 'react-native'
import Border from './components/border'
import Logo from './components/logo'
import PlayButton from './components/play_button'
import GalleryPreview from './components/gallery_preview'

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode={'stretch'}
          style={styles.background}
          source={require('./assets/img/background.jpg')}
        />
        <Border style={styles.border}>
          <Logo style={styles.logo}/>
          <PlayButton action={() => { console.warn('Button pressed.') }} />
          <GalleryPreview />
        </Border>
      </View>
    );
  }
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f7f1cc',
    position: 'absolute'
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
