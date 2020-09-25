import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './routes/MyTabs';
import Stacks from './routes/stack';

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}
