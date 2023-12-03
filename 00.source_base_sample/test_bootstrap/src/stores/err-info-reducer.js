import { Map } from 'immutable';

const SET_LIST_ERRINFO = 'SET_LIST_ERRINFO';
const RESOLVE_ERR = 'RESOLVE_ERR';
const SET_LOADED_FLAG = 'SET_LOADED_FLAG';

const initState = Map({
  listErrInfo: [],
  loadedFlag: false,
});

export default function ErrInfoReducer(state = initState, action) {
  switch (action.type) {
    case SET_LIST_ERRINFO:
      return state.set('listErrInfo', action.listErrInfo);
    case SET_LOADED_FLAG:
      return state.set('loadedFlag', action.loadedFlag);
    case RESOLVE_ERR: {
      let updateList = state.get('listErrInfo');
      updateList = updateList.map((item) => (
        item.errIndex === action.errInfo.errIndex ? {
          ...item,
          resolveAt: action.errInfo.resolveAt,
          resolveDesc: action.errInfo.resolveDesc,
        } : item
      ));
      return state.set('listErrInfo', updateList);
    }
    default:
      return state;
  }
}

// Action creator
export const setListErrInfo = (value) => {
  return {
    type: SET_LIST_ERRINFO,
    listErrInfo: value,
  };
};

export const setResolve = (value) => {
  return {
    type: RESOLVE_ERR,
    errInfo: value,
  };
};

export const setErrInfoLoadedFlag = (loadedFlag) => {
  return {
    type: SET_LOADED_FLAG,
    loadedFlag: loadedFlag,
  };
};
