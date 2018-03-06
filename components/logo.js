import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions, Image, View } from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={require('../assets/img/logo.png')}
        />
      </View>
    );
  }
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    width: win.width - 10,
  }
});

export default Logo;
