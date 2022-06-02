import {Image, Pressable, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Colors} from '../../../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StatusComponent from '../StatusComponent';
import instance from '../../../../../services/baseInstance';
import styles from './styles';

type infoProp = {
  name: string;
  data: string | number | undefined;
};

type ItemProp = {
  movie: {
    backdrop_path: string;
    id: number;
    original_title: string;
    popularity: number;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;
  };
  navigation: any;
};

export type movieInfoType = {
  backdrop_path: string;
  id: number;
  original_title: string;
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

const MovieItemComponent: React.FC<ItemProp> = ({movie, navigation}) => {
  const [movieInfo, setMovieInfo] = useState<movieInfoType | undefined>(
    undefined,
  );

  let count = 0;

  // function to calculate run time in hour and minute
  const runTimeCalcFunc = (): string => {
    if (movieInfo) {
      if (movieInfo.runtime > 60) {
        const hour = Math.floor(movieInfo.runtime / 60);
        const runTime = hour + 'h ' + (movieInfo.runtime - 60 * hour) + 'm';
        return runTime;
      }
    }
    return movieInfo?.runtime + 'm';
  };

  // func to get info of the movie
  const getMovieInfo = async () => {
    const url = `/movie/${movie.id}`;
    try {
      const response = await instance.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect
  useEffect(() => {
    let cancel = false;
    getMovieInfo().then(response => {
      if (cancel) {
        return;
      }
      setMovieInfo(response);
    });
    return () => {
      cancel = true;
    };
  });

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

  // construct uri for image
  const URI = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('MovieDetail', {id: movie.id})}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: URI,
        }}
        resizeMode="cover"
      />

      <View style={styles.infoViewStyle}>
        {/* displays release status, relase date, runtime */}
        <View style={styles.topRowView}>
          <StatusComponent year={movie.release_date.slice(0, 4)} />
          <Ionicons
            name="md-ellipse"
            size={5}
            color="white"
            style={styles.dotIconStyle}
          />
          <Text style={styles.releaseDateText}>
            {movie.release_date.slice(0, 4)}
          </Text>
          <Ionicons
            name="md-ellipse"
            size={5}
            color="white"
            style={styles.dotIconStyle}
          />
          <Text style={styles.runTimeText}>{runTimeCalcFunc()}</Text>
        </View>

        {/* displays title */}
        <Text style={styles.titleText} numberOfLines={2}>
          {movie.original_title}
        </Text>

        {/* displays genre */}
        {movieInfo !== undefined ? (
          <View style={styles.genreView}>
            {movieInfo?.genres.map(genre => {
              count += 1;
              return (
                <View style={styles.genreInsideView} key={genre.id}>
                  <Text style={styles.genreText}>
                    {genre.name.toUpperCase()}
                  </Text>
                  {count !== movieInfo.genres.length ? (
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
          <InfoComponent name="star" data={movie.vote_average} />
          <InfoComponent
            name="trending-up"
            data={Math.floor(movie.popularity)}
          />
          <InfoComponent name="flame" data={movie.vote_count} />
        </View>
      </View>
    </Pressable>
  );
};

export default MovieItemComponent;
