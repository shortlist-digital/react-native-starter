import React, {
  Component,
  View,
  Text,
  StyleSheet,
} from 'react-native'

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
