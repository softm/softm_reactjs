import { Map } from 'immutable';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SET_DIFF = 'SET_DIFF';

const initState = Map({
  value: 0,
  diff: 1,
});

export default function TestReducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.set('value', state.get('value') + state.get('diff'));
    case DECREMENT:
      return state.set('value', state.get('value') - state.get('diff'));
    case SET_DIFF:
      return state.set('diff', action.diff);
    default:
      return state;
  }
}

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export const setDiff = (value) => {
  return {
    type: SET_DIFF,
    diff: value,
  };
};
