import {Image, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {MovieStackParamList} from '../../../navigation/MovieStack';
import type {RouteProp} from '@react-navigation/native';
import {addMovieToFavList} from '../../../redux/slices/movieFavSlice';
import {addMovieToWishList} from '../../../redux/slices/movieWishListSlice';
import instance from '../../../services/baseInstance';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';

type MovieDetailScreenRouteProp = RouteProp<MovieStackParamList, 'MovieDetail'>;

type movieInfoType = {
  backdrop_path: string;
  id: number;
  original_title: string;
  original_language: string;
  popularity: number;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  genres: {
    id: number;
    name: string;
  }[];
  poster_path: string;
  overview: string;
};

type genrePropType = {
  genre: string;
};

type movieCastInfoType = {
  id: number;
  cast: {
    profile_path: string;
    name: string;
    character: string;
  }[];
  crew: {
    known_for_department: string;
    name: string;
    profile_path: string;
    job: string;
  }[];
};

const MovieDetailsScreen = () => {
  const [movieInfo, setMovieInfo] = useState<movieInfoType | undefined>(
    undefined,
  );
  const [movieCastInfo, setMovieCastInfo] = useState<
    movieCastInfoType | undefined
  >(undefined);
  const dispatch = useDispatch();
  const route = useRoute<MovieDetailScreenRouteProp>();
  const {id} = route.params;

  // useEffect for getting info of movie
  useEffect(() => {
    // func to get info of the movie
    const getMovieOverallInfo = async () => {
      const url = `/movie/${id}`;
      try {
        const response = await instance.get(url);
        setMovieInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // func to get info of the crew and cast of the movie
    const getMovieCastInfo = async () => {
      const url = `/movie/${id}/credits`;
      try {
        const response = await instance.get(url);
        setMovieCastInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieOverallInfo();
    getMovieCastInfo();
  }, [id]);

  // custom genre component
  const GenreComponent: React.FC<genrePropType> = ({genre}) => {
    return (
      <View style={styles.genreComponentView}>
        <Text style={styles.genreComponentTextStyle}>
          {genre.toUpperCase()}
        </Text>
      </View>
    );
  };

  const addToFavList = () => {
    dispatch(addMovieToFavList({id}));
  };

  const addToWishList = () => {
    dispatch(addMovieToWishList({id}));
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w500' + movieInfo?.poster_path,
        }}
        style={styles.coverImageStyle}
        resizeMode="stretch"
      />
      <View style={styles.topInfoView}>
        <Text style={styles.titleTextStyle}>
          {movieInfo?.title}{' '}
          {movieInfo?.original_language !== 'en' ? (
            <Text style={styles.titleTextStyle}>
              ({movieInfo?.original_title})
            </Text>
          ) : null}
        </Text>

        <View style={styles.genreView}>
          {movieInfo?.genres.map(genre => {
            return <GenreComponent genre={genre.name} key={genre.id} />;
          })}
        </View>
        <View style={styles.iconView}>
          <Ionicons name="add" size={40} color="white" onPress={addToFavList} />
          <Ionicons
            name="star"
            size={32}
            color="white"
            style={styles.thumbUpIcon}
            onPress={addToWishList}
          />
        </View>

        <Text style={styles.overViewTextStyle}>{movieInfo?.overview}</Text>

        <View style={styles.productionCrewInfoView}>
          <View style={styles.castRowViewStyle}>
            <Text style={styles.castRoleTextType}>Director </Text>
            {movieCastInfo?.crew.map(crew => {
              return crew.job === 'Director' ? (
                <Text style={styles.castRoleValueText} key={crew.profile_path}>
                  {crew.name}
                </Text>
              ) : null;
            })}
          </View>

          <View style={styles.writerView}>
            <View style={styles.castRowViewStyle}>
              <Text style={styles.castRoleTextType}>Writer </Text>
              {movieCastInfo?.crew.map(crew => {
                return crew.job === 'Editor' ? (
                  <Text style={styles.castRoleValueText} key={crew.name}>
                    {crew.name}{' '}
                  </Text>
                ) : null;
              })}
            </View>
          </View>

          <Text style={styles.castRoleTextType}>Top Cast </Text>
          {movieCastInfo?.cast.map(cast => {
            return (
              <View style={styles.castView} key={cast.name}>
                <Image
                  source={{
                    uri: 'https://image.tmdb.org/t/p/w500' + cast.profile_path,
                  }}
                  style={styles.castImage}
                />
                <View>
                  <Text style={styles.castNameStyle}>{cast.name}</Text>
                  <Text style={styles.castActStyle}>as {cast.character}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetailsScreen;
