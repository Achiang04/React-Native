import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
// import {HomeScreen} from './Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
