import React from 'react';
import Login from '../component/Login';
import Profile from '../component/Profile';
import Daftar from '../component/Daftar';
import Home from '../component/Home';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Daftar"
        component={Daftar}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}
