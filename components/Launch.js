import React, {
  Component,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'

import Button from 'apsl-react-native-button'

const Actions = require('react-native-router-flux').Actions


export default class Launch extends Component {
  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
          <Button onPress={Actions.tabbar}>Go to the next page</Button>
          <Button onPress={()=>Actions.BottomView()}>Swipe page from the bottom</Button>
        </View>
      </ScrollView>
    );
  }
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

let styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    marginTop: 15,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default Launch
