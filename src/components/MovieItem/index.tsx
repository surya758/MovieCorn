import {Image, Pressable, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import instance from '../../services/baseInstance';
import type {movieInfoType} from '../../screens/Core/MovieScreen/Components/MovieItemComponent';
import styles from './styles';

type movieItemType = {
  id: number;
};

const MovieItem: React.FC<movieItemType> = ({id}) => {
  const [movieInfo, setMovieInfo] = useState<movieInfoType | undefined>(
    undefined,
  );

  // func to get info of the movie
  const getMovieInfo = async () => {
    const url = `/movie/${id}`;
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

  return (
    <Pressable style={styles.container}>
      <Image
        resizeMode="stretch"
        source={{
          uri: 'https://image.tmdb.org/t/p/w500' + movieInfo?.poster_path,
        }}
        style={styles.posterStyle}
      />
      <Text style={styles.text} numberOfLines={2}>
        {movieInfo?.title}
      </Text>
    </Pressable>
  );
};

export default MovieItem;
