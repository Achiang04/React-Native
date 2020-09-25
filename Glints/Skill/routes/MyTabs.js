import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
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
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'user-circle'} color={color} size={24} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Skill',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'book'} color={color} size={24} />
          ),
        }}
        name="Skill"
        component={Skill}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'address-card'} color={color} size={24} />
          ),
        }}
        name="About"
        component={About}
      />
    </Tab.Navigator>
  );
}
