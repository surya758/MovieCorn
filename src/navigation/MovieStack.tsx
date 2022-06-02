import MovieDetailsScreen from '../screens/Core/MovieDetailsScreen';
import MovieFavouriteScreen from '../screens/Core/MovieFavouriteScreen';
import MovieScreen from '../screens/Core/MovieScreen';
import MovieWishListScreen from '../screens/Core/MovieWishListScreen';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

export type MovieStackParamList = {
  Movie: undefined;
  MovieDetail: {id: number};
  MovieFav: undefined;
  MovieWish: undefined;
};

const Stack = createStackNavigator<MovieStackParamList>();

const MovieStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Movie" component={MovieScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailsScreen} />
      <Stack.Screen name="MovieFav" component={MovieFavouriteScreen} />
      <Stack.Screen name="MovieWish" component={MovieWishListScreen} />
    </Stack.Navigator>
  );
};

export default MovieStack;
