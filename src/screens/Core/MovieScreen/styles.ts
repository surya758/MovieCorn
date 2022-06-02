import {Colors, Typography} from '../../../styles';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
    padding: 10,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 22,
  },
  listIconStyle: {
    marginLeft: 24,
  },
});

export default styles;
