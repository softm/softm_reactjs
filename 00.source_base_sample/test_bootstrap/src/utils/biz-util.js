/**
 * @description Date Time Util
 * @author F1215
 */
import Logger from './logger';

// eslint-disable-next-line no-unused-vars
const Log = Logger.create('BizUtil');

const toStringDeviceStatus = (status) => {
  return {
    IDL: 'Idle',
    NML: 'Normal',
    BSY: 'Busy',
    ERR: 'Error',
  }[status] || 'Unknown';
};

const toStringLaneStatus = (status) => {
  return {
    O: 'Open',
    C: 'Close',
  }[status] || 'Unknown';
};
const toStringLaneType = (status) => {
  return {
    I: 'In Gate',
    O: 'Out Gate',
    E: 'ECO',
  }[status] || '';
};
const toStringPosition = (position) => {
  return {
    LT: 'Left',
    RT: 'Right',
    TP: 'Top',
    RE: 'Rear',
    LU: 'Left Upper',
    LL: 'Left Lower',
    RU: 'Right Upper',
    RL: 'Right Left',
    LP: 'License Plate',
    KS: 'Kiosk',
    SP: 'Spare',
    SA: 'Stand Alone',
  }[position] || '';
};
const BizUtil = {
  toStringDeviceStatus,
  toStringLaneStatus,
  toStringLaneType,
  toStringPosition,
};
export default BizUtil;
