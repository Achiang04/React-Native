import React from 'react';
import FirstPage from './component/1stPage';
import Login from './component/login';
import Register from './component/register';
import Beranda from './component/beranda';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Beranda" component={Beranda} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
