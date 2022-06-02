import authSlice from './slices/authSlice';
import {configureStore} from '@reduxjs/toolkit';
import movieFavSlice from './slices/movieFavSlice';
import movieWishListSlice from './slices/movieWishListSlice';
import tvSeriesListSlice from './slices/tvSeriesListSlice';

export const store = configureStore({
  reducer: {
    userAuth: authSlice,
    movieFavList: movieFavSlice,
    movieWishList: movieWishListSlice,
    tvSeriesList: tvSeriesListSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
