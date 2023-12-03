import { Map } from 'immutable';

const LOAD_DEVICE = 'LOAD_DEVICE';

const initState = Map({
  listDevice: [],
});

export default function DeviceReducer(state = initState, action) {
  switch (action.type) {
    case LOAD_DEVICE:
      return state.set('listDevice', action.listDevice);
    default:
      return state;
  }
}

// Action creator
export const loadDevice = (list) => {
  return {
    type: LOAD_DEVICE,
    listDevice: list,
  };
};
