import React, { Component } from 'react-native'
import Launch from './components/Launch'
import FromBottom from './components/FromBottom'
import Error from './components/Error'
import TabView from './components/TabView'

const {
  Router,
  Route,
  Schema,
  Animations,
  TabBar,
} = require('react-native-router-flux')

const {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
} = React

export default class TabIcon extends Component {
  render(){
    return (
      <Text>{this.props.title}</Text>
    )
  }
}

export default class Example extends Component {
  render() {
    return (
      <Router hideNavBar={true} >
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Schema name="withoutAnimation"/>
        <Schema name="tab" type="switch" icon={TabIcon} />

        <Route name="FromBottom" schema="modal">
            <Router name="FromBottomRouter">
                <Route name="FromBottomModal" component={FromBottom} title="FromBottom" schema="modal"/>
            </Router>
        </Route>

        <Route name="tabbar">
          <Router footer={TabBar} showNavigationBar={true}>
              <Route name="tab1" schema="tab" title="Tab #1" >
                <Router onPop={()=>{return true} }>
                  <Route name="tab1" component={TabView} title="Tab #1" />
                </Router>
              </Route>
              <Route name="tab2" schema="tab" title="Tab #2" component={TabView} />
              <Route name="tab3" schema="tab" title="Tab #3" component={TabView} />
              <Route name="tab4" schema="tab" title="Tab #4" component={TabView} />
              <Route name="tab5" schema="tab" title="Tab #5" component={TabView} />
          </Router>
        </Route>

        <Route name="launch" component={Launch} wrapRouter={true} title="Launch" hideNavBar={false} initial={true}/>

      </Router>
    )
  }
}
