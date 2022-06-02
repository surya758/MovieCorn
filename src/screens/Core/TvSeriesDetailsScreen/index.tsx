import {Image, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import type {RouteProp} from '@react-navigation/native';
import {TvSeriesStackParamList} from '../../../navigation/TvSeriesStack';
import {addTvSeriesToList} from '../../../redux/slices/tvSeriesListSlice';
import instance from '../../../services/baseInstance';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';

type TvSeriesDetailScreenRouteProp = RouteProp<
  TvSeriesStackParamList,
  'TvSeriesDetails'
>;

type genrePropType = {
  genre: string;
};

type tvSeriesInfoType = {
  backdrop_path: string;
  id: number;
  original_name: string;
  original_language: string;
  popularity: number;
  release_date: string;
  name: string;
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

type tvSeriesCastInfoType = {
  id: string;
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

const TvSeriesDetailsScreen = () => {
  const [tvSeriesInfo, setTvSeriesInfo] = useState<
    tvSeriesInfoType | undefined
  >(undefined);
  const [tvSeriesCastInfo, setTvSeriesCastInfo] = useState<
    tvSeriesCastInfoType | undefined
  >(undefined);
  const dispatch = useDispatch();
  const route = useRoute<TvSeriesDetailScreenRouteProp>();
  const {id} = route.params;

  // useEffect for getting info of TV series
  useEffect(() => {
    // func to get info of the tv series
    const getTvSeriesOverallInfo = async () => {
      const url = `/tv/${id}`;
      try {
        const response = await instance.get(url);
        setTvSeriesInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // func to get info of the crew and cast of the tv series
    const getTvSeriesCastInfo = async () => {
      const url = `/tv/${id}/credits`;
      try {
        const response = await instance.get(url);
        setTvSeriesCastInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getTvSeriesOverallInfo();
    getTvSeriesCastInfo();
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

  const addToList = () => {
    dispatch(addTvSeriesToList({id}));
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w500' + tvSeriesInfo?.poster_path,
        }}
        style={styles.coverImageStyle}
        resizeMode="stretch"
      />
      <View style={styles.topInfoView}>
        <Text style={styles.titleTextStyle}>
          {tvSeriesInfo?.name}{' '}
          {tvSeriesInfo?.original_language !== 'en' ? (
            <Text style={styles.titleTextStyle}>
              ({tvSeriesInfo?.original_name})
            </Text>
          ) : null}
        </Text>

        <View style={styles.genreView}>
          {tvSeriesInfo?.genres.map(genre => {
            return <GenreComponent genre={genre.name} key={genre.id} />;
          })}
        </View>
        <View style={styles.iconView}>
          <Ionicons name="add" size={28} color="white" onPress={addToList} />
        </View>

        <Text style={styles.overViewTextStyle}>{tvSeriesInfo?.overview}</Text>

        <View style={styles.productionCrewInfoView}>
          <Text style={styles.castRoleTextType}>Top Cast </Text>
          {tvSeriesCastInfo?.cast.map(cast => {
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

export default TvSeriesDetailsScreen;
