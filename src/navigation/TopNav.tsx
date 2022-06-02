import {Colors, Typography} from '../styles';
import {Platform, StatusBar} from 'react-native';

import MovieStack from './MovieStack';
import React from 'react';
import TvSeriesStack from './TvSeriesStack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 45 : StatusBar.currentHeight;

const TopNav = () => {
  return (
    <Tab.Navigator
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        paddingTop: STATUSBAR_HEIGHT,
        paddingBottom: 0,
        backgroundColor: Colors.BLACK,
      }}
      initialRouteName="MovieStack"
      screenOptions={{
        tabBarStyle: {backgroundColor: Colors.BLACK},
        tabBarActiveTintColor: Colors.WHITE,
        tabBarLabelStyle: {fontFamily: Typography.FONT_FAMILY_REGULAR},
      }}>
      <Tab.Screen
        name="MovieStack"
        component={MovieStack}
        options={{
          tabBarLabel: 'Movies',
        }}
      />
      <Tab.Screen
        name="TvSeriesStack"
        component={TvSeriesStack}
        options={{
          tabBarLabel: 'Tv Series',
        }}
      />
    </Tab.Navigator>
  );
};

export default TopNav;
