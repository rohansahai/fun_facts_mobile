import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import Fetch from 'whatwg-fetch';
import Slide from './slide'

class SlidesContainer extends React.Component {
  constructor() {
    super()
    this.state = {slidesData: []}
  }

  componentDidMount() {
    let factsEndpoint = "https://thawing-escarpment-65092.herokuapp.com/facts/"
    fetch(factsEndpoint).then(response => {
      return response.json()
    }).then(json => {
      this.setState({slidesData: json})
      console.log('parsed json', json)
    }).catch(ex => {
      console.log('parsing failed', ex)
    })

    let slidesData = [
      {id: 1, text: 'Swipe left to find out if you are smelly'},
      {id: 2, text: 'you are an angel who smells like cherry blossoms'},
      {id: 3, text: 'mmmmmmmmm spaghett!'},
    ]

    this.setState({slidesData: slidesData})
  }

  render() {
    let slides = this.state.slidesData.map(
      slide => (
        <Slide text={slide.text} key = {slide.id}/>
      )
    )

    return (
      <Swiper showsButtons={true}>
        {slides}
      </Swiper>
    )
  }
}

module.exports = SlidesContainer