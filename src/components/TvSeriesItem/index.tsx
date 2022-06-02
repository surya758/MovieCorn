import {Image, Pressable, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import type {TvSeriesInfoType} from '../../screens/Core/TvSeriesScreen/Components/TvSeriesItemComponent';
import instance from '../../services/baseInstance';
import styles from './styles';

type movieItemType = {
  id: number;
};

const MovieItem: React.FC<movieItemType> = ({id}) => {
  const [TvSeriesInfo, setTvSeriesInfo] = useState<
    TvSeriesInfoType | undefined
  >(undefined);

  // func to get info of the tv series
  const getTvSeriesInfo = async () => {
    const url = `/tv/${id}`;
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

  return (
    <Pressable style={styles.container}>
      <Image
        resizeMode="stretch"
        source={{
          uri: 'https://image.tmdb.org/t/p/w500' + TvSeriesInfo?.backdrop_path,
        }}
        style={styles.posterStyle}
      />
      <View style={styles.infoView}>
        <Text style={styles.text} numberOfLines={2}>
          {TvSeriesInfo?.original_name}
        </Text>
      </View>
    </Pressable>
  );
};

export default MovieItem;
