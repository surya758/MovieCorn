import {Text, View} from 'react-native';

import MovieItem from '../../../components/MovieItem';
import React from 'react';
import {selectMovieFavList} from '../../../redux/slices/movieFavSlice';
import styles from './styles';
import {useSelector} from 'react-redux';

const MovieFavouriteScreen = () => {
  const movieList = useSelector(selectMovieFavList);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Movie Favourites</Text>
      {movieList.map(ele => {
        return <MovieItem id={ele} key={ele} />;
      })}
    </View>
  );
};

export default MovieFavouriteScreen;
