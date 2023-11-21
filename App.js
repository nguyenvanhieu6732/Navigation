// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavigationScreen from './NavigationScreen';

const Stack = createStackNavigator();

const App = () => {
  return <NavigationScreen/>
};

export default App;
