'use strict'

import React, { Component } from 'react-native'
import Button from 'apsl-react-native-button'

const Actions = require('react-native-router-flux').Actions

const {
  View,
  Text,
  StyleSheet,
} = React


export default class TabView extends Component {
  render(){
    return (
      <View style={styles.container}>
        {this.props.name === "tab1_1" &&
        <Button onPress={Actions.tab1_2}>next screen</Button>
        }
        <Button onPress={Actions.pop}>Go Back</Button>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default TabView
