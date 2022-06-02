import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

instance.defaults.headers.common.Authorization =
  'Bearer ' +
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDExZjliODA2ZWM2M2Y5ZWEzN2U0MzNiYzY5MjUzYyIsInN1YiI6IjYyOTY0NWNhMGYyMWM2MTUzOTUwYjBjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vlbjIkz8e8Q7HpMNGC22BUyao6-pJhIsHA-RamZb00c';

export default instance;
