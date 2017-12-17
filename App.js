import React from 'react';
import PropTypes from 'prop-types';
import SlidesContainer from './slides-container'
import { NavigatorIOS, StyleSheet, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

var styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  top_row: {
    backgroundColor:  '#ffe9dc',
  },
  bottom_row: {
    backgroundColor: '#91d9d7',
  }
})

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: App,
          title: 'Home',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
      />
    );
  }
}

class App extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    navigator: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this._openCrazyFacts = this._openCrazyFacts.bind(this);
  }

  _openCrazyFacts() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: SlidesContainer,
      title: 'Crazy Facts!',
      passProps: {index: nextIndex},
    });
  }

  render() {
    return (
      <Grid>
        <Row style={[styles.row, styles.top_row]} size={50}>
          <Text onPress={this._openCrazyFacts}> Just Crazy Facts </Text>
        </Row>
        <Row style={[styles.row, styles.bottom_row]} size={50}>
          <Text> Programming Facts </Text>
        </Row>
      </Grid>
    );
  }
}
