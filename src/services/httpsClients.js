import axios from 'axios';
import config from './config';

axios.defaults.baseURL = config.fampayUrl;

const getTimeout = () => {
    // cam be use for time out functions
    return null
  };

const validateHeaders = () => {
    // can be use to send common header config
    return null;
}


const httpClient = {
  get: (path, params = {}, headers = {}) => {
    if (navigator.onLine === false) {
      return Promise.reject(
        new Error('Please check your network connection and try again.')
      );
    }
    return axios.get(path, {
      timeout: getTimeout(),
      params,
      headers: validateHeaders(headers)
    });
  },
  post: (path, data, params = {}, headers = {}) => {
    if (navigator.onLine === false) {
      return Promise.reject(
        new Error('Please check your network connection and try again.')
      );
    }
    return axios.post(path, data, {
      timeout: getTimeout(),
      params,
      headers: validateHeaders(headers)
    });
  },

  put: (path, data, params = {}, headers = {}) => {
    if (navigator.onLine === false) {
      return Promise.reject(
        new Error('Please check your network connection and try again.')
      );
    }
    return axios.put(path, data, {
      timeout: getTimeout(),
      params,
      headers: validateHeaders(headers)
    });
  },
};

export default httpClient;
