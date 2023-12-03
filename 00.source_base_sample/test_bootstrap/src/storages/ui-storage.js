import { Logger } from '../utils';

const LocalStorage = localStorage;

const Log = Logger.create('uiStorage');
const UIStorage = {
  get: () => {
    let uiJson = {
      admin: {
        effInfo: {
          includeResolve: true,
        },
      },
    };
    try {
      const savedJson = JSON.parse(LocalStorage.getItem('UI'));
      uiJson = {
        ...uiJson,
        savedJson,
      };
    } catch (error) {
      Log.error('get', error);
    }
    return uiJson;
  },
  save: (ui) => {
    LocalStorage.setItem('UI', JSON.stringify(ui));
  },
  getSearchVisit: () => {
    return LocalStorage.getItem('SEARCH_VISIT') ? JSON.parse(LocalStorage.getItem('SEARCH_VISIT')) : {
      fromDateOld: '',
      fromTimeOld: '',
      toDateOld: '',
      toTimeOld: '',
      searchTypeOld: '',
      searchWordOld: '',
      selectedLaneIndexOld: '',
    };
  },
  saveSearchVisit: (filter) => {
    LocalStorage.setItem('SEARCH_VISIT', JSON.stringify(filter));
  },
  getSearchDc: () => {
    return LocalStorage.getItem('SEARCH_DC') ? JSON.parse(LocalStorage.getItem('SEARCH_DC')) : {
      fromDateOld: '',
      fromTimeOld: '',
      toDateOld: '',
      toTimeOld: '',
      searchTypeOld: '',
      searchWordOld: '',
    };
  },
  saveSearchDc: (filter) => {
    LocalStorage.setItem('SEARCH_DC', JSON.stringify(filter));
  },
  getSearchOperator: () => {
    return LocalStorage.getItem('SEARCH_OPERATOR') ? JSON.parse(LocalStorage.getItem('SEARCH_OPERATOR')) : {
      fromDateOld: '',
      fromTimeOld: '',
      toDateOld: '',
      toTimeOld: '',
      searchTypeOld: '',
      searchWordOld: '',
      selectedLaneIndexOld: '',
    };
  },
  saveSearchOperator: (filter) => {
    LocalStorage.setItem('SEARCH_OPERATOR', JSON.stringify(filter));
  },
  getSearchException: () => {
    return LocalStorage.getItem('SEARCH_EXCEPTION') ? JSON.parse(LocalStorage.getItem('SEARCH_EXCEPTION')) : {
      fromDateOld: '',
      fromTimeOld: '',
      toDateOld: '',
      toTimeOld: '',
      searchTypeOld: '',
      searchWordOld: '',
      selectedLaneIndexOld: '',
    };
  },
  saveSearchException: (filter) => {
    LocalStorage.setItem('SEARCH_EXCEPTION', JSON.stringify(filter));
  },
  getRecognitionRate: () => {
    return LocalStorage.getItem('RECOGNITION_RATE') ? JSON.parse(LocalStorage.getItem('SEARCH_VISIT')) : {
      fromDateOld: '',
      fromTimeOld: '',
      toDateOld: '',
      toTimeOld: '',
      searchTypeOld: '',
      searchWordOld: '',
      selectedLaneIndexOld: '',
    };
  },
  saveRecognitionRate: (filter) => {
    LocalStorage.setItem('RECOGNITION_RATE', JSON.stringify(filter));
  },
};

export default UIStorage;
