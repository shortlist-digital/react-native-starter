import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native'

import Button from 'apsl-react-native-button'

const Actions = require('react-native-router-flux').Actions

export default class Error extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>{this.props.data}</Text>
        <Button onPress={Actions.dismiss}>Close</Button>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    width:300,
    height:300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
})


export default Error
