import axios from '../../axios';

import applicationConfig from '../../configs/app-config';
import { timeToString, dateToString } from '../../utils/datetime-util';

export default {
  urls: {
    kiosk: applicationConfig.buildUrl('/KIOSK'),
  },

  buildDoneGoToEcoObject(laneId) {
    const doneGoToEco = {
      ProtocolVersion: 'V1.0',
      ProtocolType: 'Restful',
      ProtocolSubType: 'STG',
      LaneID: laneId,
      InterfaceType: 'KIOSK',
      MessageID: 'NotiKioskStatus',
      MessageType: 'REQUEST',
      Date: dateToString(new Date()),
      Time: timeToString(new Date()),
      Body: {
        ViewType: 'BarrierOpen',
        ViewStatus: 'Done',
      },
    };
    return doneGoToEco;
  },

  doneGoToEco(laneId, obj) {
    return axios.post(`${this.urls.kiosk}/${laneId}/KioskStatus`, obj || this.buildDoneGoToEcoObject(laneId));
  },


};
