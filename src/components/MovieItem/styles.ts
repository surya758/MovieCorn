import {Colors, Typography} from '../../styles';
import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  posterStyle: {
    width: windowWidth * 0.27,
    height: 100,
  },
  text: {
    paddingHorizontal: 10,
    color: Colors.WHITE,
    fontSize: 26,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
  },
});

export default styles;
