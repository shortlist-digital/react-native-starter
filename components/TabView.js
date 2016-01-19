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
        <Button onPress={Actions.tabbar}>Go to the next page</Button>
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
