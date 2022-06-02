import {Colors, Typography} from '../../styles';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    borderRadius: 18,
    marginTop: 30,
  },
  buttonTextStyle: {
    paddingVertical: 10,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
});

export default styles;
