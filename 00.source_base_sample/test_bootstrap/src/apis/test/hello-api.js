import axios from '../../axios';

import applicationConfig from '../../configs/app-config';

export default {
  urls: {
    hello: applicationConfig.buildUrl('/api/hello'),
    helloJson: applicationConfig.buildUrl('/api/hello/json'),
  },

  hello() {
    return axios.get(this.urls.hello);
  },

  helloJson() {
    return axios.get(this.urls.helloJson);
  },

};
