import {Text, View} from 'react-native';

import React from 'react';
import TvSeriesItem from '../../../components/TvSeriesItem';
import {selectTvSeriesList} from '../../../redux/slices/tvSeriesListSlice';
import styles from './styles';
import {useSelector} from 'react-redux';

const TvSeriesWishListScreen = () => {
  const tvSeriesList = useSelector(selectTvSeriesList);
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Movie List</Text>
      {tvSeriesList.map(ele => {
        return <TvSeriesItem id={ele} key={ele} />;
      })}
    </View>
  );
};

export default TvSeriesWishListScreen;
