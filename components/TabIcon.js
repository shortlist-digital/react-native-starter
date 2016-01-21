import React, { Component } from 'react-native'

const {
  Text,
} = React

export default class TabIcon extends Component {
  render(){
    return (
      <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
    );
  }
}

export default TabIcon
