import React, { Component } from 'react';
import { Image, View } from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View>
        <Image
          style={this.props.style}
          resizeMode={'contain'}
          source={require('../assets/img/logo.png')}
        />
      </View>
    );
  }
}

export default Logo;
