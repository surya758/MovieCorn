import {Colors, Typography} from '../../../styles';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
  },
  topView: {
    padding: 20,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.WHITE,
    fontSize: 18,
    paddingLeft: 18,
  },
  formView: {
    marginTop: 30,
    height: 150,
    justifyContent: 'space-around',
  },
});

export default styles;
