/**
 * @description Configurations of front end application
 * @author F1215 (Thomas.Jeong)
 */

import { dateToString } from '../utils/datetime-util';

const AppConfig = {
  version: process.env.NODE_ENV === 'development'
    ? `Test Build (${dateToString(new Date())})`
    : `0.9.0 Build (${dateToString(new Date())})`,
  brandName: 'TIOT System',

  brandShortName: 'TIOT',

  isDeveplment: false, // process.env.NODE_ENV === 'production',

  apiServer2: process.env.REACT_APP_API_SERVER,
  apiServer: process.env.REACT_APP_API_TOS_HOST,
  zodiacServer: process.env.REACT_APP_ZODIAC_SERVER,
  fileServer: process.env.REACT_APP_FILE_SERVER,
  wsServer: process.env.REACT_APP_WS_SERVER,
  stitchMode: 'N', // temporary param for stitch mode
  // stitchMode: process.env.REACT_APP_STITCH_MODE,

  laneDetailUrl: '/laneDetail',

  buildUrl(subUrl) {
    return `${this.apiServer}${subUrl}`;
  },

  buildFileServerUrl(subUrl) {
    return `${this.fileServer}${subUrl}`;
  },
};
export default AppConfig;
