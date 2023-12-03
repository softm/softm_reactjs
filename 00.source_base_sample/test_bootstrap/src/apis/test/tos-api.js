import axios from '../../axios';

import applicationConfig from '../../configs/app-config';

export default {
  urls: {
    PreIngate: applicationConfig.buildUrl('/TOS/PreIngate'),
  },

  PreIngate() {
    return axios.get(this.urls.PreIngate);
  },

};
