import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MovieItemComponent from './Components/MovieItemComponent';
import {MovieStackParamList} from '../../../navigation/MovieStack';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import instance from '../../../services/baseInstance';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type MovieScreenNavigationType = NativeStackNavigationProp<
  MovieStackParamList,
  'Movie'
>;

type movieType = {
  id: number;
  original_title: string;
  popularity: number;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
};

const MovieScreen = () => {
  const navigation = useNavigation<MovieScreenNavigationType>();
  const [movieData, setMovieData] = useState<movieType[]>([]);
  const getMovieData = async () => {
    try {
      const response = await instance.get('/movie/top_rated');
      setMovieData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <ScrollView
      style={styles.topContainer}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Movie Shows</Text>
        <View style={styles.iconView}>
          <Ionicons
            name="star"
            size={24}
            color="white"
            onPress={() => navigation.navigate('MovieFav')}
          />
          <Ionicons
            name="list"
            size={24}
            color="white"
            style={styles.listIconStyle}
            onPress={() => navigation.navigate('MovieWish')}
          />
        </View>
      </View>

      {movieData.map(movie => {
        return (
          <MovieItemComponent
            key={movie.id}
            movie={movie}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
};

export default MovieScreen;
