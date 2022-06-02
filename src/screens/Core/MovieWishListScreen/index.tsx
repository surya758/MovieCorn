import {Text, View} from 'react-native';

import MovieItem from '../../../components/MovieItem';
import React from 'react';
import {selectMovieWishList} from '../../../redux/slices/movieWishListSlice';
import styles from './styles';
import {useSelector} from 'react-redux';

const MovieWishListScreen = () => {
  const movieList = useSelector(selectMovieWishList);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Movie Wish List</Text>
      {movieList.map(ele => {
        return <MovieItem id={ele} key={ele} />;
      })}
    </View>
  );
};

export default MovieWishListScreen;
