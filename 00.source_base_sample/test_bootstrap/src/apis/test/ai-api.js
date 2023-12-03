import axios from '../../axios';

import applicationConfig from '../../configs/app-config';

export default {
  urls: {
    reciveRecognizedData: applicationConfig.buildUrl('/AI'),
  },

  reciveRecognizedData(obj) {
    return axios.post(`${this.urls.reciveRecognizedData}/Lane1`, obj);
  },

  buildTestObject() {
    const containerData = {
      CntrNumber: 'MAS1234567',
      ISO: 'ISO-NUMBER',
      Position: 'R',
      DoorDirection: 'R',
      IsDamaged: 'Y',
    };
    const recognizedData = {
      LaneID: 'LaneID',
      nAME: 'Name',
      lPNUMBER: 'LP_NUMBER',
      LPRR: '98%',
      containers: [containerData],
    };

    return recognizedData;
  },

};
