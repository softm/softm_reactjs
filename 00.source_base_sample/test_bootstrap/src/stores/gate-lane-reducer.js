import { Map } from 'immutable';
import { Logger } from '../utils';

const SET_LIST_GATELANE = 'SET_LIST_GATELANE';
const SET_GATELANE_STATUS = 'SET_GATELANE_STATUS';
const SET_ASSIGN_USER = 'SET_ASSIGN_USER';
const SET_LOADED_FLAG = 'SET_LOADED_FLAG';
const SET_WORKING_STATUS = 'SET_WORKING_STATUS';

const initState = Map({
  listLane: [],
  loadedFlag: false,
});

const Log = Logger.create('GateLaneReducer');
export default function GateLaneReducer(state = initState, action) {
  switch (action.type) {
    case SET_LIST_GATELANE:
      return state.set('listLane', action.listLane);
    case SET_GATELANE_STATUS: {
      const index = state.get('listLane').findIndex((item) => (item.laneId === action.laneId));
      if (index < 0) {
        Log.error('SET_GATELANE_STATUS', `cannot found laneId (${action.laneId})`);
        return state;
      }
      return state.setIn(['listLane', index, 'laneStatus'], action.laneStatus);
    }
    case SET_ASSIGN_USER: {
      const listLane = state.get('listLane');
      const index = listLane.findIndex((item) => (item.laneId === action.laneId));
      if (index < 0) {
        Log.error('SET_ASSIGN_USER', `cannot found laneId (${action.laneId})`);
        return state;
      }
      const lane = listLane[index];
      if (lane.assignInfos) {
        lane.assignInfos[0].userLogin = action.assignUser;
      } else {
        const assignInfos = new Array(1);
        assignInfos[0] = { userLogin: action.assignUser };
        // assignInfos[0].userLogin = action.assignUser;
        lane.assignInfos = assignInfos;
      }
      listLane[index] = lane;
      return state.set('listLane', listLane);
    }
    case SET_LOADED_FLAG:
      return state.set('loadedFlag', action.loadedFlag);
    case SET_WORKING_STATUS: {
      const index = state.get('listLane').findIndex((item) => (item.laneId === action.laneId));
      if (index < 0) {
        Log.error('SET_WORKING_STATUS', `cannot found laneId (${action.laneId})`);
        return state;
      }
      return state.setIn(['listLane', index, 'workingStatus'], action.workingStatus);
    }
    default:
      return state;
  }
}

export const getGateLane = (listLane, laneId) => {
  const gateLane = listLane.find((item) => (item.laneId === laneId)) || {};
  return gateLane;
};
// Action creator
export const setListGateLane = (listLane) => {
  return {
    type: SET_LIST_GATELANE,
    listLane: listLane,
  };
};
export const setGateLaneStatus = (laneId, laneStatus) => {
  return {
    type: SET_GATELANE_STATUS,
    laneId: laneId,
    laneStatus: laneStatus,
  };
};
export const setAssignUser = (laneId, assignUser) => {
  return {
    type: SET_ASSIGN_USER,
    laneId: laneId,
    assignUser: assignUser,
  };
};
export const setWorkingStatus = (laneId, workingStatus) => {
  return {
    type: SET_WORKING_STATUS,
    laneId: laneId,
    workingStatus: workingStatus,
  };
};

export const setGateLaneLoadedFlag = (loadedFlag) => {
  return {
    type: SET_LOADED_FLAG,
    loadedFlag: loadedFlag,
  };
};
