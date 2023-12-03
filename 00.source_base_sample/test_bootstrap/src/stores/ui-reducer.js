import { Map } from 'immutable';

const LANE_DETAIL_VIEW = 'LANE_DETAIL_VIEW';

const initState = Map({
  laneDetailView: false,
});

export default function UiReducer(state = initState, action) {
  switch (action.type) {
    case LANE_DETAIL_VIEW:
      return state.set('laneDetailView', action.laneDetailView);
    default:
      return state;
  }
}

export const setLaneDetailView = (value) => {
  return {
    type: LANE_DETAIL_VIEW,
    laneDetailView: value,
  };
};
