import CoreNav from './CoreNav';
import LoginScreen from '../screens/Auth/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {selectIsLoggedIn} from '../redux/slices/authSlice';
import {useSelector} from 'react-redux';

const RootNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <CoreNav /> : <LoginScreen />}
    </NavigationContainer>
  );
};

export default RootNav;
