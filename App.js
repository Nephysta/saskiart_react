import React from 'react';
import { StatusBar, StyleSheet, Text, View, NativeModules, Platform } from 'react-native'
import Logo from './components/logo'
import PlayButton from './components/play_button'
import GalleryPreview from './components/gallery_preview'

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <PlayButton action={() => { console.warn('Button pressed.') }} />
        <GalleryPreview />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: STATUSBAR_HEIGHT,
  },
});
