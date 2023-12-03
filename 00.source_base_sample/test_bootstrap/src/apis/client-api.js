import axios from '../axios';

import applicationConfig from '../configs/app-config';

export default {
  urls: {
    baseUrl: applicationConfig.buildUrl('/client'),
  },

  correct(visitIndex, obj) {
    return axios
      .put(`${this.urls.baseUrl}/correct/${visitIndex}`, obj);
  },

  correctDone(laneId) {
    return axios
      .put(`${this.urls.baseUrl}/correct-done/${laneId}`);
  },

  inspect(visitIndex, obj) {
    return axios
      .put(`${this.urls.baseUrl}/inspect/${visitIndex}`, obj);
  },

  inspectDone(laneId) {
    return axios
      .put(`${this.urls.baseUrl}/inspect-done/${laneId}`);
  },

  inspectCancel(laneId) {
    return axios
      .put(`${this.urls.baseUrl}/inspect-cancel/${laneId}`);
  },

  printHistory(laneId) {
    return axios
      .put(`${this.urls.baseUrl}/print-history/${laneId}`);
  },

  barrierUp(laneId) {
    return axios
      .put(`${this.urls.baseUrl}/barrier-up/${laneId}`);
  },

  barrierDown(laneId) {
    return axios
      .put(`${this.urls.baseUrl}/barrier-down/${laneId}`);
  },

};
