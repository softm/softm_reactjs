import axios from '../../axios';

import applicationConfig from '../../configs/app-config';

export default {
  urls: {
    authBack: applicationConfig.buildUrl('/auth'),
    auth: applicationConfig.buildUrl('/auth'),
  },

  /**
   * Login
   * @param {Object} user
   */
  logIn(user) {
    // return axios.post(`${this.urls.auth}`, user);
    return axios.post(`${this.urls.auth}/login`, user, { withCredentials: false });
  },

  /**
   * Logout
   * @param {Object} user
   */
  logOut(token) {
    return axios.get(`${this.urls.auth}/logout`, {token});
  },

};
