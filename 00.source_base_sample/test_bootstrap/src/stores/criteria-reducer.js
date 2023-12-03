import { Map } from 'immutable';

const SET_CRITERIA = 'SET_CRITERIA';
const SET_VISIT_INDEX = 'SET_VISIT_INDEX';
const SET_LANE_INDEX = 'SET_LANE_INDEX';
const SET_FROM_DATE = 'SET_FROM_DATE';
const SET_TO_DATE = 'SET_TO_DATE';

const initState = Map({
  fromDate: new Date(),
  toDate: new Date(),
  visitIndex: undefined,
  laneIndex: undefined,
});

export default function CriteriaReducer(state = initState, action) {
  switch (action.type) {
    case SET_CRITERIA:
      return state.set('visitIndex', action.visitIndex)
        .set('laneIndex', action.laneIndex)
        .set('fromDate', action.fromDate)
        .set('toDate', action.toDate);
    case SET_VISIT_INDEX:
      return state.set('visitIndex', action.visitIndex);
    case SET_LANE_INDEX:
      return state.set('laneIndex', action.laneIndex);
    case SET_FROM_DATE:
      return state.set('fromDate', action.fromDate);
    case SET_TO_DATE:
      return state.set('toDate', action.toDate);
    default:
      return state;
  }
}

// Action creator
export const setCriteria = ({
  visitIndex, laneIndex, fromDate, toDate,
}) => {
  return {
    type: SET_CRITERIA,
    visitIndex: visitIndex,
    laneIndex: laneIndex,
    fromDate: fromDate,
    toDate: toDate,
  };
};

export const setVisitIndex = (visitIndex) => {
  return {
    type: SET_VISIT_INDEX,
    visitIndex: visitIndex,
  };
};

export const setLaneIndex = (laneIndex) => {
  return {
    type: SET_LANE_INDEX,
    laneIndex: laneIndex,
  };
};

export const setFromDate = (fromDate) => {
  return {
    type: SET_FROM_DATE,
    fromDate: fromDate,
  };
};

export const setToDate = (toDate) => {
  return {
    type: SET_TO_DATE,
    toDate: toDate,
  };
};
