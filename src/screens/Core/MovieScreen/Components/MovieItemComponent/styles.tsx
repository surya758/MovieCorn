import {Colors, Typography} from '../../../../../styles';
import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_DARK,
    height: 132,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  imageStyle: {
    height: 112,
    width: windowWidth * 0.27,
  },
  infoViewStyle: {
    marginLeft: 8,
    flex: 1,
    justifyContent: 'space-between',
  },
  releaseDateText: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    fontSize: 12,
    color: Colors.GRAY_MEDIUM,
  },
  runTimeText: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    fontSize: 12,
    color: Colors.GRAY_MEDIUM,
  },
  topRowView: {flexDirection: 'row', alignItems: 'center', marginBottom: 6},
  titleText: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 16,
  },
  genreView: {flexDirection: 'row'},
  genreText: {
    color: Colors.GRAY_MEDIUM,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: 12,
  },
  genreInsideView: {flexDirection: 'row', alignItems: 'center'},
  dotIconStyle: {marginHorizontal: 3},
  bottomView: {flexDirection: 'row', alignItems: 'center', marginTop: 6},

  infoComponentStyle: {
    flexDirection: 'row',
    marginRight: 6,
    alignItems: 'center',
  },
  infoComponentIconStyle: {
    marginRight: 3,
  },
  infoComponentTextStyle: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    fontSize: 12,
  },
});
export default styles;
