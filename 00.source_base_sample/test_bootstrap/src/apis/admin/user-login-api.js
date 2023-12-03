import axios from '../../axios';

import applicationConfig from '../../configs/app-config';
import { Logger } from '../../utils';

const Log = Logger.create('UserLoginApi');
export default {
  urls: {
    baseUrl: applicationConfig.buildUrl('/admin/user-login'),
  },

  /**
   * Find all UserLogin that endAt is Null
   */
  findAllByEndAtIsNull() {
    return axios.get(`${this.urls.baseUrl}`);
  },

  /**
   * Find all UserLogin
   */
  findAll() {
    Log.info('Finding all userLofin might be too slow. You have to use it carefully.');
    return axios.get(`${this.urls.baseUrl}/all`);
  },
  // setOperator(laneId, operator) {
  //   // return axios.put(`${this.urls.baseUrl}/${laneId}/lane-status`, { operator });
  // },
};
