import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import GalleryThumbnail from './gallery_thumbnail'


class GalleryPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: null
    };
  }

  componentDidMount() {
    fetch('http://10.1.10.119:3000/api/v1/pictures?limit=3')
      .then(response => response.json())
      .then(response => {
        this.setState({pictures: response})
      })
  }

  render() {
    const {pictures} = this.state

    if (pictures) {
      return (
        <View style={styles.container}>
          <GalleryThumbnail image={(this.state.pictures[0] || {}).data} />
          <GalleryThumbnail image={(this.state.pictures[1] || {}).data} />
          <GalleryThumbnail image={(this.state.pictures[2] || {}).data} />
        </View>
      );
    }
    else {
      return (<Text>Loading...</Text>)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default GalleryPreview;
