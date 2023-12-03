/**
 * @description Common Util
 * @author softm
 */
import Logger from './logger';
import { Common } from '../stores/common-reducer';
import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line no-unused-vars
const Log = Logger.create('CommonUtil');

function Dispatch(dispatch) {
  //  this.state = state;
   this.dispatch = dispatch;
}

Dispatch.prototype.loadingShow = function() {
  this.dispatch(Common.Action[Common.Type.COMMON_LOADING_SHOW]());
}

Dispatch.prototype.loadingHide = function() {
  this.dispatch(Common.Action[Common.Type.COMMON_LOADING_HIDE]());  
}

export default Dispatch;