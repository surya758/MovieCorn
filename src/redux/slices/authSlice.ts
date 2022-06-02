import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

type stateType = {
  userAuth: {
    isLoggedIn: boolean;
    user: userType;
  };
};
type userType = {
  email: string;
  password: string;
};

const getUserData = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    return user != null ? JSON.parse(user) : null;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

const user = getUserData();

const initialState =
  user !== null ? {isLoggedIn: true, user} : {isLoggedIn: false, user: null};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    signOut: state => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const {signIn, signOut} = authSlice.actions;

export const selectIsLoggedIn = (state: stateType) => state.userAuth.isLoggedIn;
export const selectUser = (state: stateType) => state.userAuth.user;

export default authSlice.reducer;
