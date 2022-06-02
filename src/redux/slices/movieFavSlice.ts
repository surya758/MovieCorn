import {createSlice} from '@reduxjs/toolkit';

type stateType = {
  movieFavList: [];
};
const initialState: number[] = [];

const movieFavSlice = createSlice({
  name: 'movieFavList',
  initialState,
  reducers: {
    addMovieToFavList: (state, action: {payload: {id: number}}) => {
      if (!state.includes(action.payload.id)) {
        state.push(action.payload.id);
      }
    },
    removeMovieFromFavList: state => {
      state.pop();
    },
  },
});

export const {addMovieToFavList, removeMovieFromFavList} =
  movieFavSlice.actions;

export const selectMovieFavList = (state: stateType) => state.movieFavList;

export default movieFavSlice.reducer;
