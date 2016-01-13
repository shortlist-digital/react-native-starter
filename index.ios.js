var React = require('react-native');
var {
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  AppRegistry
} = React;

class StylistLive extends React.Component {
  clickMe() {
    alert('Hi there!');
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.clickMe.bind(this)}>
          <View style={styles.box}>
            <Text>Hello {this.props.name}. Please click me.</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    borderColor: 'red',
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
    width: 100,
    height: 100
  }
});

var MainComponent = function() {
  this.render = function() {
    return <StylistLive name="Component" />;
  }
};

AppRegistry.registerComponent('StylistLive', () => StylistLive);
