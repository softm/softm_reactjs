import Logger from './logger';
import StorageManager from '../storages/user-storage';

let effectCount = 0;
let timeout;
const checkEffect = () => {
  Log.debug(`checkEffect> ${effectCount}`);
  effectCount += 1;
  if (effectCount > 100) {
    Log.debug('checkEffect> window reload');
    // eslint-disable-next-line no-alert
    if (window.confirm('Effect is so many times called. Do you want to stop this effect?') === true) {
      return false;
    }
  }

  if (timeout) {
    Log.debug('checkEffect> timer clear');
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    Log.debug('checkEffect> cleared');
    effectCount = 0;
  }, 1000);
  return true;
};

let isForwarded = false;
const error401 = () => {
  if (isForwarded === false) {
    // eslint-disable-next-line no-alert
    window.alert('Session expired. Please login again.');
    StorageManager.clearUser();
    window.history.go('/');
    isForwarded = true;
  }
};

const Log = Logger.create('ErrorHandler');

const ErrorHandler = {
  checkEffect: checkEffect,

  handleError: (error) => {
    Log.error(error.message, error);
    // if (error.response && error.response.status === 401) {
    //   error401();
    //   return true;
    // }
    return false;
  },

  errorToString: (error) => {
    if (error) {
      if (error.response && error.response.data) {
        if (error.response.data.errorMessage) {
          return error.response.data.errorMessage;
        }
        return error.response.data;
      }
      return error.message;
    }
    return null;
  },
};

export default ErrorHandler;
