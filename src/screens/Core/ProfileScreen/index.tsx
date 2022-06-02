import CustomButtonComponent from '../../../components/ButtonComponent';
import React from 'react';
import {View} from 'react-native';
import {signOut} from '../../../redux/slices/authSlice';
import styles from './styles';
import {useDispatch} from 'react-redux';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  //handle signout
  const handleSignOut = () => {
    dispatch(signOut());
  };
  return (
    <View style={styles.container}>
      <CustomButtonComponent onPress={handleSignOut} value="SIGN OUT" />
    </View>
  );
};

export default ProfileScreen;
