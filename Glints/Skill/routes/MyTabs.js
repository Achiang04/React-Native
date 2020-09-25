import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

import Skill from '../component/Skill';
import Profile from '../component/Profile';
import About from '../component/About';

// const LoginScreen = createStackNavigator(Login);
// const ProfileScreen = createStackNavigator(Profile);
// const DaftarScreen = createStackNavigator(Daftar);

// export default function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Login" component={LoginScreen} />
//       <Tab.Screen name="Daftar" component={DaftarScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }

const IconBottom = (props) => {
  const {color, focused} = props.data;
  let colorSelected = focused ? color : 'grey';
  return (
    <View>
      <Image
        source={props.image}
        style={{width: 40, height: 40, tintColor: colorSelected}}
      />
    </View>
  );
};

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: 'Profile',
          tabBarIcon: (props) => (
            <IconBottom data={props} image={require('../Gambar/3.png')} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          title: 'Skill',
          tabBarIcon: (props) => (
            <IconBottom data={props} image={require('../Gambar/2.png')} />
          ),
        }}
        name="Skill"
        component={Skill}
      />
      <Tab.Screen
        options={{
          title: 'About',
          tabBarIcon: (props) => (
            <IconBottom data={props} image={require('../Gambar/1.png')} />
          ),
        }}
        name="About"
        component={About}
      />
    </Tab.Navigator>
  );
}
