import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63ce75e56d27349c2b6e10ff.mockapi.io',
});

export { instance as axios };
