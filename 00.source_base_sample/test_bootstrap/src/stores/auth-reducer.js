import { Map } from 'immutable';
import produce from 'immer';
import StorageManager from '../storages/user-storage';
import { createReducer } from "./common/redux-helper";

export const LOGIN = 'LOGIN';
export const LOGIN_ING = 'LOGIN_ING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

/* Define Type & Action --- --- --- --- */
const Auth = {
  Type:{
    AUTHENTICATE: "login/AUTHENTICATE",
    AUTHENTICATE_RESULT: "login/AUTHENTICATE_RESULT",
    SET_CLAIMS: "login/SET_CLAIMS",
    SET_CLAIMS_RESULT: "login/SET_CLAIMS_RESULT",
    SET_USER_ROLES_CLAIMS: "login/SET_USER_ROLES_CLAIMS",
    SET_USER_ROLES_CLAIMS_RESULT: "login/SET_USER_ROLES_CLAIMS_RESULT",
    RESTORE: "login/RESTORE",
    CLEAR: "login/CLEAR",
    LOGOUT: "login/LOGOUT",
    LOGOUT_RESULT: "login/LOGOUT_RESULT",
    LOGIN_ACTION_FAILED: "login/LOGIN_ACTION_FAILED",
  },
  Action:{}
};

/* Define Action Creator --- --- --- --- */
Auth.Action = {
    // AUTHENTICATE
    [Auth.Type.AUTHENTICATE] : (
      userId,
      password,
      locale,
      currentDataScope,
      appCode,
      newSession
    ) => {
    return ({
      type: Auth.Type.AUTHENTICATE,
      userId,
      password,
      locale,
      currentDataScope,
      appCode,
      newSession
    })
  },
    // SET_CLAIMS  
    [Auth.Type.SET_CLAIMS] : (
      claims
    ) => ({
      type: Auth.Type.SET_CLAIMS,
      claims
    }),
    // SET_USER_ROLES_CLAIMS
    [Auth.Type.SET_USER_ROLES_CLAIMS] : (
      userRolesClaims
    ) => ({
      type: Auth.Type.SET_USER_ROLES_CLAIMS,
      userRolesClaims
    }),
    // RESTORE
    [Auth.Type.RESTORE] : (
    ) => ({
      type: Auth.Type.RESTORE
    }),
    // CLEAR
    [Auth.Type.CLEAR] : (
    ) => ({
      type: Auth.Type.CLEAR
    }),
    // AUTHENTICATE
    [Auth.Type.LOGOUT] : (
      token
    ) => ({
      type: Auth.Type.LOGOUT,
      token
    }),
}
/* --- --- --- --- Define Action Creator */

export {
  Auth
};

const initState = {
  error: null,
  loading: false,
  authResults: [],
  claims: [],
  userRolesClaims: [],
  logoutResult: null,
  isLoggedIn:false,
  account: StorageManager.getUser().account,
  token: StorageManager.getUser().token,
  email: StorageManager.getUser().email,
  roleType: StorageManager.getUser().roleType  
};

const reducer = createReducer(initState, {
  [Auth.Type.AUTHENTICATE]: (state, action) => {
   return produce(state, (draft) => {
      draft.authResults = null;
      draft.error = null;
      draft.loading = true;
      draft.isLoggedIn = true;
      draft.complete = false;
    })
  },
  [Auth.Type.AUTHENTICATE_RESULT]: (state, action) => {
    return produce(state, (draft) => {
    try {
      let payload = action.payload;
      draft.authResults = payload;
      draft.token = payload.jwttoken;
      draft.loading = false;
      // ags
      draft.isLoggedIn = false;

      draft.email = "";
      draft.roleType = "";
      draft.account = payload.userId;
      draft.locale = payload.locale;
      draft.currentDataScope = payload.currentDataScope;
      draft.appCode = payload.appCode;
      draft.complete = true;
      // ---  ags //

      //store("authResults", payload);
      //store("token", payload.jwttoken);
      StorageManager.setUser({
        account:draft.account,
        token: payload.jwttoken,
        email: draft.email,
        roleType: draft.roleType,
        locale: draft.locale,
        currentDataScope: draft.currentDataScope,
        appCode: draft.appCode
      });

    } catch(e) {
      console.error(e);
    }
    });

  } ,
  [Auth.Type.SET_CLAIMS]: (state, action) =>
    produce(state, (draft) => {
      draft.error = null;
      draft.loading = true;
      draft.isLoggedIn = true;      
    }),
  [Auth.Type.SET_CLAIMS_RESULT]: (state, action) =>
    produce(state, (draft) => {
      let payload = action.result;
      draft.claims = payload;
      //store("claims", payload);
      StorageManager.setClaims(payload);
      draft.loading = false;
      draft.isLoggedIn = false;      
    }),
  [Auth.Type.SET_USER_ROLES_CLAIMS]: (state, action) =>
    produce(state, (draft) => {
      draft.error = null;
      draft.loading = true;
      draft.isLoggedIn = true;      
    }),
  [Auth.Type.SET_USER_ROLES_CLAIMS_RESULT]: (state, action) =>
    produce(state, (draft) => {
      let payload = action.result;      
      draft.userRolesClaims = payload;
      //store("userRolesClaims", action.result);
      StorageManager.setUserRolesClaims(payload);
      draft.loading = false;
      draft.isLoggedIn = false;      
    }),
  [Auth.Type.LOGOUT]: (state, action) =>
    produce(state, (draft) => {
      draft.account = null;
      draft.error = null;
      draft.authResults = null;
      draft.userRolesClaims = null;
      draft.claims = null;
      draft.loading = false;
      draft.currentDataScope = false;      
      draft.isLoggedIn = false;      
      StorageManager.clearUser();
    }),
  [Auth.Type.LOGOUT_RESULT]: (state, action) =>
    produce(state, (draft) => {
      draft.logoutResult = draft.result;
      draft.authResults = null;
      draft.userRolesClaims = null;
      draft.claims = null;
      draft.loading = false;
      draft.isLoggedIn = false;      
      StorageManager.clearUser();
    }),
  [Auth.Type.RESTORE]: (state, action) =>
    produce(state, (draft) => {
      draft.error = null;
      draft.isLoggedIn = false;      
      //restoreAll(draft);
    }),
  [Auth.Type.CLEAR]: (state, action) =>
    produce(state, (draft) => {
      draft.error = null;
      draft.authResults = null;
      draft.userRolesClaims = null;
      draft.claims = null;
      draft.loading = false;
      draft.isLoggedIn = false;      
      StorageManager.clearUser();
    }),
  [Auth.Type.LOGIN_ACTION_FAILED]: (state, action) =>
    produce(state, (draft) => {
      draft.error = action.error;
      draft.authResults = null;
      draft.userRolesClaims = null;
      draft.claims = null;
      draft.loading = false;
      draft.isLoggedIn = false;      
      StorageManager.clearUser();
    }),
});
export default reducer;
