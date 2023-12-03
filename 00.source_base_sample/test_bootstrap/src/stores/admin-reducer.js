import { Map } from 'immutable';

const SET_CRITERIA = 'SET_CRITERIA';

const initState = Map({
  landIndex: undefined,
  period: undefined,
  fromDate: new Date(),
  toDate: new Date(),
  fromTime: undefined,
  toTime: undefined,
});

export default function AdminReducer(state = initState, action) {
  switch (action.type) {
    case SET_CRITERIA:
      return state.set('landIndex', action.landIndex)
        .set('period', action.period)
        .set('fromDate', action.fromDate)
        .set('toDate', action.toDate)
        .set('fromTime', action.fromTime)
        .set('toTime', action.toTime);
    default:
      return state;
  }
}

// Action creator
export const setCriteria = ({
  landIndex, period, fromDate, toDate, fromTime, toTime,
}) => {
  return {
    type: SET_CRITERIA,
    landIndex,
    period,
    fromDate,
    toDate,
    fromTime,
    toTime,
  };
};
