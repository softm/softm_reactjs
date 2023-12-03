/**
 * @description Common Util
 * @author softm
 */
import Logger from './logger';
import { Auth } from '../stores/auth-reducer';
import { Common } from '../stores/common-reducer';
import { Job } from '../stores/job-reducer';

import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line no-unused-vars
const Log = Logger.create('initCommon');
let _dispatch = null;

/**
 * 
   * @param {Object} {dispatch}
 */
export default function initCommon({dispatch}) {
  //  this.state = state;
  //  this._dispatch = _dispatch;
  _dispatch = dispatch;   
}

export const loadingShow = function(...params) {
  console.log("params", params);
  _dispatch(Common.Action[Common.Type.COMMON_LOADING_SHOW].apply(this,params));
}

export const loadingHide = function() {
  _dispatch(Common.Action[Common.Type.COMMON_LOADING_HIDE]());  
}

export function dispatch (type,...params) {
  console.groupEnd(); // end point
  console.group("dispatch - " + type); // start point
  console.log("palyload : ", params);

  let action = Auth.Action[type] || Common.Action[type] || Job.Action[type];
  _dispatch(action.apply(this,params));
}

// 미사용
export function dispatchByJson (type, paramsJson) {
  console.groupEnd(); // end point
  console.group("dispatch - " + type); // start point
  console.log("palyload : ", paramsJson);

  let action = {
    type,
    ...paramsJson
  };
  _dispatch(action);
}