import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import TvSeriesItemComponent from './Components/TvSeriesItemComponent';
import {TvSeriesStackParamList} from '../../../navigation/TvSeriesStack';
import instance from '../../../services/baseInstance';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type TVSeriesScreenNavigationType = NativeStackNavigationProp<
  TvSeriesStackParamList,
  'TvSeries'
>;

type tvSeries = {
  backdrop_path: string;
  id: number;
  original_name: string;
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
};

const TvSeriesScreen = () => {
  const navigation = useNavigation<TVSeriesScreenNavigationType>();
  const [tvSeriesData, setTvSeriesData] = useState<tvSeries[]>([]);
  const getTvSeriesData = async () => {
    try {
      const response = await instance.get('/tv/popular');
      setTvSeriesData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTvSeriesData();
  }, []);

  return (
    <ScrollView
      style={styles.topContainer}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>TV Series</Text>
        <Ionicons
          name="list"
          size={24}
          color="white"
          onPress={() => navigation.navigate('TvSeriesList')}
        />
      </View>
      {tvSeriesData.map(tvSeries => {
        return (
          <TvSeriesItemComponent
            TvSeries={tvSeries}
            key={tvSeries.id}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
};

export default TvSeriesScreen;
