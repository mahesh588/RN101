import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SignUpScreen from './Screens/SignUpScreen';
import SignUpScreen_Solved from './Screens/SignUpScreen_Solved';
import SignUpScreen_Advanced from './Screens/SignUpScreen_Advanced';
import NavigationScreen from './Screens/NavigationScreen';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screen: "SignUpScreen" // Change this to SignUpScreen_Solved to see solution
    }
  }
  render() {
    switch(this.state.screen) {
      case "SignUpScreen": 
        return <SignUpScreen/>;
      case "SignUpScreen_Solved":
        return <SignUpScreen_Solved />;
      case "SignUpScreen_Advanced":
        return <SignUpScreen_Advanced />;
      case "NavigationScreen":
        return <NavigationScreen />
      default:
        return (
          <View style={style.container}>
            <Text>Screen Not Supported</Text>
          </View>
        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
