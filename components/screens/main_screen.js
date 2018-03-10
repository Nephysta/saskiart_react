import React, {Component} from 'react';
import { StyleSheet, Text, View, NativeModules, Platform, Image, Dimensions } from 'react-native'

import Border from '../border'
import GalleryPreview from '../gallery_preview'

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode={'stretch'}
          style={styles.background}
          source={require('../../assets/img/background.jpg')}
        />
        <Border style={styles.border}>
          <Text>Theme here ...</Text>
          <Text>Full scale drawing here ...</Text>
          <GalleryPreview themeDisplay={true} limit={4} />
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

export default MainScreen;
