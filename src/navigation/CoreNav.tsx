import {Colors} from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/Core/ProfileScreen';
import React from 'react';
import TopNav from './TopNav';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const CoreNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: Colors.BLACK},
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={TopNav}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="md-home-sharp" size={30} color={color} />
          ),
          tabBarActiveTintColor: 'white',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => (
            <Ionicons name="person" size={30} color={color} />
          ),
          tabBarActiveTintColor: 'white',
        }}
      />
    </Tab.Navigator>
  );
};

export default CoreNav;
