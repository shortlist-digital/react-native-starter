import React, {
  Component,
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native'

import Button from 'apsl-react-native-button'

const Actions = require('react-native-router-flux').Actions

export default class BottomView extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Page from the bottom</Text>
          <Button onPress={() => Alert.alert('An alert')}>An alert</Button>
        <Button onPress={Actions.pop}>Close</Button>
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



export default BottomView
