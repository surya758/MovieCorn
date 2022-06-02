import {Colors, Typography} from '../../../../styles';
import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

type StatusProp = {
  year: string;
};

let status = '';

const StatusComponent: React.FC<StatusProp> = ({year}) => {
  const intYear = parseInt(year, 10);
  const chooseFunc = () => {
    if (intYear > 2000 && intYear < 2020) {
      status = 'Released';
    }
    if (intYear <= 2000) {
      status = 'Old';
    }
    if (intYear >= 2020) {
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
        intYear < 2000
          ? Colors.PINK
          : intYear >= 2000 && intYear < 2020
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
