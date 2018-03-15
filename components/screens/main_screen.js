import React, {Component} from 'react'
import { StyleSheet, Text, View, NativeModules, Platform, Image, Dimensions, ActivityIndicator } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Border from '../border'
import GalleryPreview from '../gallery_preview'
import Theme from '../theme'
import DoneButton from '../done_button'

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

class MainScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPicture: undefined,
      ideas: []
    }
  }

  onThemeLoad = (theme) => {
    this.setState({ ideas: theme.id.split('/') })
  }

  onPicturesLoad = (pictures) => {
    if (pictures.length > 0) {
      this.setState({ currentPicture: pictures[0] })
    }
    else {
      this.setState({ currentPicture: null })
    }
  }

  setCurrentPicture = (picture) => {
    this.setState({ currentPicture: picture })
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

          <View style={ styles.imageBackground }>
            { currentPicture === undefined &&
              <View style={ [styles.noImage, styles.image] }>
                <ActivityIndicator size='large' color='#f29bc1' />
              </View>
            }

            { currentPicture === null &&
              <View style={ [styles.noImage, styles.image] }></View>
            }

            { currentPicture &&
              <Image
                resizeMode={'cover'}
                style={styles.image}
                source={ {uri: currentPicture.data} }
              />
            }

            <View>
              { currentPicture === null &&
                <Text style={ styles.text }>No image for this theme, yet!</Text>
              }

              { currentPicture &&
                <Text style={ styles.text }>{currentPicture.theme}</Text>
              }
            </View>
          </View>

          <DoneButton action={_ => { this.props.navigation.navigate('UploadImage') }} />

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
    height: win.width / 1.5,
    marginTop: 15
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT
  },
  imageBackground: {
    height: win.width / 1.10,
    width: win.width / 1.25,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  noImage: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10
  }
});

export default MainScreen;
