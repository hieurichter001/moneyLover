import ViewIndex from './components/indexMoney.js';
import PageLogin from './components/pageLogin.js';
import {name as appName} from './app.json';
import {Text, View, AppRegistry} from 'react-native';
import React, {Component} from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();
const HomeScreen = ({navigation}) =>(<ViewIndex />);

// export default funtion App(){
//   return(
//     <NavigationNativeContainer>
//     <Stack.Navigator>
//     <Stack.Screen name="Home" components={HomeScreen} />
//     </Stack.Navigator>
//     </NavigationNativeContainer>
//     )
// }

export default class moneyLover extends Component{
  render(){
    return(
      <ViewIndex />
    );
  }
}
