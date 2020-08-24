import axios from 'axios';

import apiServer from '../config/api';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com/weather',
});

const handleError = (error) => Promise.reject(error);

/* eslint no-param-reassign: ["error", { "props": false }] */
const handleRequest = async (config) => {
  if (config.url.indexOf('?') > -1) {
    config.url = `${config.url}&key=${apiServer.hgbrasil}&locale=pt`;
  } else {
    config.url = `${config.url}?key=${apiServer.hgbrasil}&locale=pt`;
  }
  return config;
};

const handleResponse = (response) => response;

api.interceptors.request.use(handleRequest, handleError);
api.interceptors.response.use(handleResponse, handleError);

export default api;
