import produce from 'immer';

export function createReducer(initialState, handlerMap) {
  return function (state = initialState, action) {
    const handler = handlerMap[action.type];
    if (handler) {
      if (action[NOT_IMMUTABLE]) {
        return handler(state, action);
      } else {
        if ( action["@@redux-saga/SAGA_ACTION"] ) {
          console.groupEnd(); // start point          
          console.group("dispatch - " + action.type); // start point
          console.log("palyload : ", action);    
        }
        // return produce(state, draft => {
           //const handler = handlerMap[action.type];
           const draft = handler(state, action);
           console.log("draft", draft);
           return draft; 
        // });
      }
    } else {
      return state;
    }
  };
}

export function createSetValueAction(type) {
  return (key, value) => ({ type, key, value });
}
export function setValueReducer(state, action) {
  state[action.key] = action.value;
}

export const FETCH_PAGE = Symbol('FETCH_PAGE');
export const FETCH_KEY = Symbol('FETCH_KEY');
export const NOT_IMMUTABLE = Symbol('NOT_IMMUTABLE');
