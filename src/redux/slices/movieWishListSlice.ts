import {createSlice} from '@reduxjs/toolkit';

type stateType = {
  movieWishList: [];
};
const initialState: number[] = [];

const movieWishListSlice = createSlice({
  name: 'movieWishList',
  initialState,
  reducers: {
    addMovieToWishList: (state, action: {payload: {id: number}}) => {
      if (!state.includes(action.payload.id)) {
        state.push(action.payload.id);
      }
    },
    removeMovieFromWishList: state => {
      state.pop();
    },
  },
});

export const {addMovieToWishList, removeMovieFromWishList} =
  movieWishListSlice.actions;

export const selectMovieWishList = (state: stateType) => state.movieWishList;

export default movieWishListSlice.reducer;
