import {Colors, Typography} from '../../../styles';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  coverImageStyle: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
  topInfoView: {
    padding: 10,
  },
  overViewTextStyle: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  titleTextStyle: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    marginBottom: 10,
    fontSize: 18,
  },
  thumbUpIcon: {
    marginLeft: 10,
  },
  dotIconStyle: {marginHorizontal: 3},
  genreView: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  castRowViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  writerViewStyle: {flexDirection: 'row', alignItems: 'center'},
  genreComponentView: {
    borderWidth: 2,
    borderColor: Colors.GRAY_LIGHT,
    padding: 3,
    borderRadius: 12,
    marginRight: 10,
  },
  genreComponentTextStyle: {
    color: Colors.WHITE,
    padding: 1.5,
  },
  productionCrewInfoView: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.GRAY_DARK,
    marginVertical: 8,
  },
  writerView: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.GRAY_DARK,
  },
  castRoleValueText: {
    color: Colors.PRIMARY,
    paddingVertical: 3,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  castRoleTextType: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  castImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  castView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
  },
  castNameStyle: {
    color: Colors.PRIMARY,
    marginLeft: 8,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  castActStyle: {
    color: Colors.WHITE,
    fontSize: 12,
    marginLeft: 8,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
});

export default styles;
