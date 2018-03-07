import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';

class GalleryThumbnail extends Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={{uri: this.props.image}}
      />
    );
  }
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    width: win.width / 4,
    height: win.height / 4,
    margin: 10
  }
});

export default GalleryThumbnail;
