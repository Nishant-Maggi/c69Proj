import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './components/AppHeader';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FbScreen from './screens/Fb';
import InstaScreen from './screens/Insta';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <AppHeader/>

        <AppContainer/>        
      </View>
    );
  } 
}

const TabNavigator = createBottomTabNavigator({
  Fb :{screen: FbScreen},
  Insta :{screen: InstaScreen},
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
