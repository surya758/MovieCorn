import {Colors, Typography} from '../../../../../styles';
import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

type StatusProp = {
  year: string;
};

let status = '';

const StatusComponent: React.FC<StatusProp> = ({year}) => {
  const intYear = parseInt(year, 10);
  const chooseFunc = () => {
    if (intYear > 2010 && intYear < 2021) {
      status = 'Released';
    }
    if (intYear <= 2010) {
      status = 'Old';
    }
    if (intYear >= 2021) {
      status = 'New';
    }
  };

  chooseFunc();

  return (
    <View style={styles(intYear).container}>
      <Text style={styles(intYear).statusTextStyle}>
        {status.toUpperCase()}
      </Text>
    </View>
  );
};

export default StatusComponent;

const styles = (intYear: number) =>
  StyleSheet.create({
    container: {
      backgroundColor:
        intYear < 2010
          ? Colors.PINK
          : intYear >= 2000 && intYear < 2021
          ? Colors.PRIMARY
          : Colors.SUCCESS,
      paddingHorizontal: 2,
      borderRadius: 2,
    },
    statusTextStyle: {
      fontFamily: Typography.FONT_FAMILY_REGULAR,
      fontSize: 10,
    },
  });
