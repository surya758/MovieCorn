import {Provider} from 'react-redux';
import React from 'react';
import RootNav from './src/navigation/RootNav';
import axios from 'axios';
import {store} from './src/redux/store';

const App = () => {
  axios.interceptors.request.use(
    request => {
      // perform a task before the request is sent
      console.log('Request was sent');
      return request;
    },
    error => {
      // handle the error
      return Promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    response => {
      console.log('Received response');
      return response;
    },
    error => {
      return Promise.reject(error);
    },
  );
  return (
    <Provider store={store}>
      <RootNav />
    </Provider>
  );
};

export default App;
