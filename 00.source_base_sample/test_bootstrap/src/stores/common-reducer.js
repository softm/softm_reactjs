import produce from "immer";
import { createReducer } from "./common/redux-helper";

/* Define Type & Action --- --- --- --- */
const Common = {
  Type:{
    COMMON_LOADING_SHOW : 'COMMON_LOADING_SHOW',
    COMMON_LOADING_HIDE : 'COMMON_LOADING_HIDE'
  },
  Action:{}
}
/* --- --- --- --- Define Action Type */

/* Define Action Creator --- --- --- --- */
Common.Action = {
  [Common.Type.COMMON_LOADING_SHOW] : (a,b,c
    // Todo Define
  ) => {
    console.log("a,b,c",a,b,c);
    return ({
    type: Common.Type.COMMON_LOADING_SHOW
  });
},
  [Common.Type.COMMON_LOADING_HIDE] : (
    // Todo Define
  ) => ({
    type: Common.Type.COMMON_LOADING_HIDE
  }),  
}
/* --- --- --- --- Define Action Creator */
export {
  Common
};

const initState = {
  isLoading: false,
};

const reducer = createReducer(initState, {
  // [Common.Type.COMMON_LOADING_SHOW]: (state, action) => { state.isLoading=true; return state; },
  // [Common.Type.COMMON_LOADING_HIDE]: (state, action) => { state.isLoading=false; return state; },
  [Common.Type.COMMON_LOADING_SHOW]: (state, action) =>{
    let r = produce(state, (draft) => {
      draft.isLoading = true;
    });
    //console.error(r);
    return r;
  } ,
  [Common.Type.COMMON_LOADING_HIDE]: (state, action) => produce(state, (draft) => {
    draft.isLoading = false;
  }),
});

export default reducer;
