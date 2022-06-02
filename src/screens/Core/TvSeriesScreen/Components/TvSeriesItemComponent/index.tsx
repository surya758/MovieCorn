import {Image, Pressable, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Colors} from '../../../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StatusComponent from './StatusComponent';
import instance from '../../../../../services/baseInstance';
import styles from './styles';

type ItemProp = {
  TvSeries: TvSeries;
  navigation: any;
};

type TvSeries = {
  backdrop_path: string;
  id: number;
  original_name: string;
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
};

export type TvSeriesInfoType = {
  backdrop_path: string;
  id: number;
  original_name: string;
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  number_of_episodes: number;
  genres: {
    id: number;
    name: string;
  }[];
  seasons: {
    air_date: string;
    episode_count: number;
  }[];
};

type infoProp = {
  name: string;
  data: string | number | undefined;
};

const TvSeriesItemComponent: React.FC<ItemProp> = ({TvSeries, navigation}) => {
  const [TvSeriesInfo, setTvSeriesInfo] = useState<
    TvSeriesInfoType | undefined
  >(undefined);

  let count = 0;

  // func to get info of the tv series
  const getTvSeriesInfo = async () => {
    const url = `/tv/${TvSeries.id}`;
    try {
      const response = await instance.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // small component to display info like rating and popularity
  const InfoComponent: React.FC<infoProp> = ({name, data}) => {
    return (
      <View style={styles.infoComponentStyle}>
        <Ionicons
          name={name}
          size={12}
          color={Colors.GRAY_MEDIUM}
          style={styles.infoComponentIconStyle}
        />
        <Text style={styles.infoComponentTextStyle}>{data}</Text>
      </View>
    );
  };

  // useEffect
  useEffect(() => {
    let cancel = false;
    getTvSeriesInfo().then(response => {
      if (cancel) {
        return;
      }
      setTvSeriesInfo(response);
    });
    return () => {
      cancel = true;
    };
  });

  // construct uri for image
  const URI = 'https://image.tmdb.org/t/p/w500' + TvSeries.backdrop_path;

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('TvSeriesDetails', {id: TvSeries.id})}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: URI,
        }}
        resizeMode="cover"
      />

      <View style={styles.infoViewStyle}>
        {/* displays release status, relase date, no. of episodes, no. of seasons */}
        <View style={styles.topRowView}>
          <StatusComponent year={TvSeries.first_air_date.slice(0, 4)} />
          <Ionicons
            name="md-ellipse"
            size={5}
            color="white"
            style={styles.dotIconStyle}
          />
          <Text style={styles.releaseDateText}>
            {TvSeries.first_air_date.slice(0, 4)}
          </Text>
          <Ionicons
            name="md-ellipse"
            size={5}
            color="white"
            style={styles.dotIconStyle}
          />
          <Text style={styles.episodeText}>
            {TvSeriesInfo?.number_of_episodes} Episodes
          </Text>
          <Ionicons
            name="md-ellipse"
            size={5}
            color="white"
            style={styles.dotIconStyle}
          />
          <Text style={styles.seasonText}>
            {TvSeriesInfo?.seasons.length} Season
          </Text>
        </View>

        {/* displays title */}
        <Text style={styles.titleText} numberOfLines={2}>
          {TvSeries.original_name}
        </Text>

        {/* displays genre */}
        {TvSeriesInfo !== undefined ? (
          <View style={styles.genreView}>
            {TvSeriesInfo?.genres.map(genre => {
              count += 1;
              return (
                <View style={styles.genreInsideView} key={genre.id}>
                  <Text style={styles.genreText}>
                    {genre.name.toUpperCase()}
                  </Text>
                  {count !== TvSeriesInfo.genres.length ? (
                    <Ionicons
                      name="md-ellipse"
                      size={5}
                      color="white"
                      style={styles.dotIconStyle}
                    />
                  ) : null}
                </View>
              );
            })}
          </View>
        ) : null}

        {/* displays rating, popularity and vote count*/}
        <View style={styles.bottomView}>
          <InfoComponent name="star" data={TvSeries.vote_average} />
          <InfoComponent
            name="trending-up"
            data={Math.floor(TvSeries.popularity)}
          />
          <InfoComponent name="flame" data={TvSeries.vote_count} />
        </View>
      </View>
    </Pressable>
  );
};

export default TvSeriesItemComponent;
