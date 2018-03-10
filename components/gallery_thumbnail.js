import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, Image, View, TouchableOpacity } from 'react-native';

class GalleryThumbnail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      action: props.action,
      number: props.number,
      theme: props.theme,
      image: props.image
    };
  }

  render() {
    const { id, theme, image, action } = this.state
    return (
      <View style={styles.image_container} >
        <TouchableOpacity
          activeOpacity={action ? 0.4 : 1}
          onPress={_ => { action ? action(id) : null}}
        >
          <Image
            style={{
              width: win.width / (this.state.number + 1),
              height: win.height / (this.state.number + 1),
              margin: 10
            }}
            source={{uri: image}}
          />
        </TouchableOpacity>
        <Text numberOfLines={2} style={theme ? styles.image_text : {}} >{theme}</Text>
      </View>
    );
  }
}

const win = Dimensions.get('window')
const styles = StyleSheet.create({
  image_container: {
    position: 'relative'
  },
  image_text: {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 2,
    padding: 2,
    position: 'absolute',
    bottom: 0,
    margin: 12
  }
});

export default GalleryThumbnail;
