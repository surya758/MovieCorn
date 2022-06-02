import React from 'react';
import TvSeriesDetailsScreen from '../screens/Core/TvSeriesDetailsScreen';
import TvSeriesListScreen from '../screens/Core/TvSeriesListScreen';
import TvSeriesScreen from '../screens/Core/TvSeriesScreen';
import {createStackNavigator} from '@react-navigation/stack';

export type TvSeriesStackParamList = {
  TvSeries: undefined;
  TvSeriesDetails: {id: number};
  TvSeriesList: undefined;
};

const Stack = createStackNavigator<TvSeriesStackParamList>();

const TvSeriesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TvSeries" component={TvSeriesScreen} />
      <Stack.Screen name="TvSeriesDetails" component={TvSeriesDetailsScreen} />
      <Stack.Screen name="TvSeriesList" component={TvSeriesListScreen} />
    </Stack.Navigator>
  );
};

export default TvSeriesStack;
