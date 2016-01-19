import React, { Component } from 'react-native'

const {
  View,
  Text,
  StyleSheet,
} = React

export default class TabView extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Tab {this.props.name}</Text>
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
