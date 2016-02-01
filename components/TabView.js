import React, {
  Component,
  View,
  StyleSheet,
} from 'react-native'

import Button from 'apsl-react-native-button'

const Actions = require('react-native-router-flux').Actions

export default class TabView extends Component {
  render(){
    return (
      <View style={styles.container}>
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
