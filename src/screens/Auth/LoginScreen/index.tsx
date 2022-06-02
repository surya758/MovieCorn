import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButtonComponent from '../../../components/ButtonComponent';
import CustomTextInput from './Components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {signIn} from '../../../redux/slices/authSlice';
import styles from './styles';
import {useDispatch} from 'react-redux';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  // sign in handler
  const handleSignIn = () => {
    if (email !== '' && password !== '') {
      const user = {
        email: email,
        password: password,
      };
      const storeUserData = async (userData = user) => {
        try {
          const userValue = JSON.stringify(userData);
          await AsyncStorage.setItem('user', userValue);
        } catch (e) {
          // saving error
        }
      };
      storeUserData();
      dispatch(signIn(user));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.titleView}>
          <Ionicons name="arrow-back" size={22} color="white" />
          <Text style={styles.titleText}>Sign in</Text>
        </View>
        <View style={styles.formView}>
          <CustomTextInput
            placeholder="Email"
            setter={setEmail}
            value={email}
          />
          <CustomTextInput
            placeholder="Password"
            setter={setPassword}
            value={password}
          />
        </View>
        <CustomButtonComponent onPress={handleSignIn} value="SIGN IN" />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
