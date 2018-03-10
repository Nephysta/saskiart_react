import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import GalleryThumbnail from './gallery_thumbnail'


class GalleryPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: props.limit || 3,
      pictures: null,
      action: props.action,
      theme_display: props.themeDisplay
    };
  }

  componentDidMount() {
    const { limit } = this.state

    fetch(`http://192.168.1.11:3000/api/v1/pictures?limit=${limit}`)
      .then(response => response.json())
      .then(response => {
        this.setState({pictures: response})
      })
  }

  render() {
    const { action, pictures, theme_display, touchable } = this.state

    if (pictures) {
      return (
        <View style={styles.container} >
          {pictures.map((picture, i) => {
            return <GalleryThumbnail
              action={action ? (id) => {action(id)} : null}
              id={picture.id}
              key={picture.id}
              number={pictures.length}
              theme={theme_display ? picture.theme : null}
              image={picture.data}
            />
          })}
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
    flexDirection: 'row'
  }
});

export default GalleryPreview;
