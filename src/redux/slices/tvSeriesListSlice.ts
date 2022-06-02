import {createSlice} from '@reduxjs/toolkit';

type stateType = {
  tvSeriesList: [];
};
const initialState: number[] = [];

const tvSeriesListSlice = createSlice({
  name: 'tvSeriesList',
  initialState,
  reducers: {
    addTvSeriesToList: (state, action: {payload: {id: number}}) => {
      if (!state.includes(action.payload.id)) {
        state.push(action.payload.id);
      }
    },
    removeTvSeriesFromList: state => {
      state.pop();
    },
  },
});

export const {addTvSeriesToList, removeTvSeriesFromList} =
  tvSeriesListSlice.actions;

export const selectTvSeriesList = (state: stateType) => state.tvSeriesList;

export default tvSeriesListSlice.reducer;
