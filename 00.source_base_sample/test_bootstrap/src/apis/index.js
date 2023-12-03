/**
 * @description APIs for communicate to server.
 * @author F1215 (Thomas.Jeong)
 */

// WebSocket APIs
// import WebsocketApi from './websocket-api';

// Auth APIs
import AuthApi from './auth/auth-api';
import JobApi from './auth/job-api';
import UserLoginApi from './admin/user-login-api';
// Client APIs
import ClientApi from './client-api';

// Admin APIs
//import TosInfoApi from './admin/tos-info-api';
import HelloApi from './test/hello-api';
import TosApi from './test/tos-api';
import KIOSKApi from './test/kiosk-api';

async function apiHandler([thisArg, apiFunc, params]) {
  try {
    const res = await apiFunc.bind(thisArg, params)();
    console.groupEnd();
    console.group("apiFunc - " + apiFunc, params); // apiFunc
    console.log("res.data", res?.data);

    let isSuccess = false;
    if ( res?.data?.resultCode !== undefined && (""+res?.data?.resultCode).length != 0 ) {
      isSuccess = res?.data.resultCode === ResultCode.Success || res?.data.resultCode === ResultCode.Success
    } else {
      isSuccess = res?.data?.code === ResultCode.ZARA_Sucess || res?.data?.code === ResultCode.ZARA_Fail
    }

    return {
      ...res?.data,
      isSuccess
    };
  } catch (err) {
    return err;
  }
}

export const ResultCode = {
  Success: 0,
  Fail: -1,
  ZARA_Sucess: 3,
  ZARA_Fail: 2,
};

export {
  AuthApi,
  JobApi,
  ClientApi,
  HelloApi,
  UserLoginApi,
  apiHandler,
};
