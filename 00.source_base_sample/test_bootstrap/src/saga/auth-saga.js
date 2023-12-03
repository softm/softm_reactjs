import {
  all, fork, takeLatest, call, put, delay, takeLeading,
} from 'redux-saga/effects';
import { Auth } from "../stores/auth-reducer";
import { Common } from "../stores/common-reducer";
import { apiHandler, AuthApi } from '../apis';
import { ErrorHandler } from '../utils';
import { toast } from 'react-toastify';
import jwt_decode from "jwt-decode";

function* authenticate(action) {
  try {
    console.group("saga - " + action.type);
    console.log("palyload : ", action);    
    // console.log("authenticate(params)",action.type,action);
    yield put({
      type: Common.Type.COMMON_LOADING_SHOW,
    });
    let params = action;
    // delete params.type;
    console.log("action",action);
    const {
      isSuccess,
      code,
      content,
      jwttoken,
      message,      
      responseDetail,      
      status,
      data,
    } = yield call(apiHandler, [AuthApi, AuthApi.logIn, action]);

    if (data instanceof Error) throw Error(data);

    const payload = {
      isSuccess,
      code,      
      content,      
      status,
      message,
      responseDetail,
      data,
      jwttoken,
      ...params
    };

    yield delay(1000);
    if ( isSuccess ) {
      yield put({ type: Auth.Type.AUTHENTICATE_RESULT, payload });
    }

    if ( !isSuccess || !jwttoken ) {
      throw Error('Login fail. (Server has gave wrong response)');
    } else {
    }

  } catch (error) {
    toast.error(error.message);
    yield put({ type: Auth.Type.LOGIN_ACTION_FAILED, error });
  } finally {
    yield put({
      type: Common.Type.COMMON_LOADING_HIDE,
    });
  }
}

function* setClaims({ claims }) {
  try {
    const result = claims;
    yield put({ type: Auth.Type.SET_CLAIMS_RESULT, result });
  } catch (error) {
    yield put({ type: Auth.Type.LOGIN_ACTION_FAILED, error });
  }
}

function* setUserRolesClaims({ userRolesClaims }) {
  try {
    const result = userRolesClaims;
    yield put({ type: Auth.Type.SET_USER_ROLES_CLAIMS_RESULT, result });
  } catch (error) {
    yield put({ type: Auth.Type.LOGIN_ACTION_FAILED, error });
  }
}

function* logout({ token }) {
  try {
    // const {

    // } = yield call(callApiExForLogin, {
    //   url: `/auth/logout`,
    //   method: "get",
    //   params: { token },
    // });

    // callApiExForLogin
    const {
      isSuccess,
      status,
      code,
      message,
      responseDetail,
      content,
      data,
    } = yield call(apiHandler, [AuthApi, AuthApi.logOut, {token}]);

    const result = {
      isSuccess,
      status,
      code,
      message,
      responseDetail,
      content,
      data,
    };
    yield put({ type: Auth.Type.LOGOUT_RESULT, result });
  } catch (error) {
    yield put({ type: Auth.Type.LOGIN_ACTION_FAILED, error });
  }
}

export default function* () {
  yield all([
    takeLeading(Auth.Type.AUTHENTICATE, authenticate),
    takeLeading(Auth.Type.SET_CLAIMS, setClaims),
    takeLeading(Auth.Type.SET_USER_ROLES_CLAIMS, setUserRolesClaims),
    takeLeading(Auth.Type.LOGOUT, logout),
  ]);
}
