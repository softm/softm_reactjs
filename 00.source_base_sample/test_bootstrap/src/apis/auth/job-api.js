import axios from '../../axios';

import applicationConfig from '../../configs/app-config';

export default {
  urls: {
    job: applicationConfig.buildUrl('/jobcycle'),
  },

  /**
   * jobcycle
   * @param {Object} params
   */
   jobcycle(params) {
    // return axios.post(`${this.urls.auth}`, user);
    return axios.get(`${this.urls.job}/${params.jobId}`, params );
   },

  /**
   * jobcycleList
   * @param {Object} params
   */
   jobcycleList(params) {
    // return axios.post(`${this.urls.auth}`, user);
    // console.log("instance.defaults.headers.common",axios.defaults.headers);
    return axios.get(`${this.urls.job}/`, {params} );
   },

  /**
   * schedulerInfo
   * @param {Object} user
   */
  schedulerInfo() {
    return axios.get(`${this.urls.job}/schedulerInfo`, {});
  },

  /**
   * borderLadenInfo
   * @param {Object} user
   */
   borderLadenInfo() {
    return axios.get(`/border/ladenInfo`, {});
  },

};
