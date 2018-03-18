import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import GalleryThumbnail from './gallery_thumbnail'


class GalleryPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onLoad: props.onLoad,
      limit: props.limit || 3,
      pictures: [],
      action: props.action,
      theme_display: props.themeDisplay,
      ideas: props.ideas || null,
      didFetch: false
    }
    for (var i = 0; i < this.state.limit; i++) {
      this.state.pictures.push(undefined)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.ideas != this.props.ideas) {
      this.fetchPictures()
    }
  }

  componentDidMount() {
    this.fetchPictures()
  }

  fetchPictures() {
    const { limit, onLoad } = this.state

    if (this.props.ideas && this.props.ideas.length == 0) { return }

    const pictures = []
    for (var i = 0; i < this.state.limit; i++) {
      pictures.push(undefined)
    }
    this.setState({pictures: pictures})

    url = `${API_ENDPOINT}/api/v1/pictures?limit=${limit}`
    if (this.props.ideas) { url += `&ideas=${this.props.ideas}` }

    fetch(url)
      .then(response => response.json())
      .then(response => {
        for (var i = response.length; i < limit; i++) {
          response.push(null)
        }
        this.setState({pictures: response})
        onLoad ? onLoad(this.state.pictures) : null

      })
  }

  render() {
    const { action, pictures, theme_display, limit } = this.state

    if (pictures) {
      return (
        <View style={styles.container} >
          {
            pictures.map((picture, i) => {
              if (picture) {
                return <GalleryThumbnail
                  action={action ? (id) => {action(id)} : null}
                  id={picture.id}
                  key={picture.id}
                  number={limit}
                  theme={theme_display ? picture.theme : null}
                  image={picture.data}
                />
              }
              else {
                return <GalleryThumbnail
                  key={Math.random().toString(36).substring(2, 15)}
                  number={limit}
                  image={picture}
                />
              }
            })
          }
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
    marginBottom: 20,
    flexDirection: 'row'
  }
});

export default GalleryPreview;
