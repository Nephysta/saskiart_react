import React, {Component} from 'react';
import { StyleSheet, Text, View, NativeModules, Platform, Image, Dimensions } from 'react-native'

import Border from '../border'
import GalleryPreview from '../gallery_preview'
import Theme from '../theme'

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

class MainScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPicture: null,
      ideas: []
    }
  }

  onThemeLoad = (theme) => {
    this.setState({ ideas: theme.id.split('/') })
  }

  onPicturesLoad = (pictures) => {
    if (pictures.length > 0) {
      this.setState({ currentPicture: pictures[0].data })
    }
    else {
      this.setState({ currentPicture: null })
    }
  }

  setCurrentPicture = (picture) => {
    this.setState({ currentPicture: picture.data })
  }

  render() {
    const { currentPicture, ideas } = this.state

    return (
      <View style={styles.container}>
        <Image
          resizeMode={'stretch'}
          style={styles.background}
          source={require('../../assets/img/background.png')}
        />
        <Border style={styles.border}>
          <Theme
            onLoad={this.onThemeLoad}
          />

          <Image
            resizeMode={'cover'}
            style={styles.image}
            source={ currentPicture ? {uri: currentPicture} : {} }
          />

          <GalleryPreview
            onLoad={this.onPicturesLoad}
            action={this.setCurrentPicture}
            themeDisplay={true}
            limit={4}
            ideas={ideas}
          />
        </Border>
      </View>
    );
  }
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    width: win.width / 1.5,
    height: win.width / 1.5
  },
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

export default MainScreen;
