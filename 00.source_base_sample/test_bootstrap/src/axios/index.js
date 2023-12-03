import axios from 'axios';
import { ErrorHandler } from '../utils';
import StorageManager from '../storages';
import { toast } from 'react-toastify';
import jwt_decode from "jwt-decode";
import { isExpired } from './../utils/dateUtil';
import initCommon, {dispatch, loadingHide, loadingShow} from '../utils/common-util';
import { useDispatch, useSelector,  } from 'react-redux';
import { Auth } from '../stores/auth-reducer';
import store from '../stores';

const instance = axios.create({
  // baseURL: `${url}:${port}`,
});

instance.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    // config.headers.Authorization = `Bearer ${StorageManager.User.getUser().token}`;
    const token = StorageManager.User.getUser().token;
    if (token) {
      config.headers["x-auth-token"] = (token);
    }

    if ( config.data ) delete config.data.type;    
    if ( config.params ) delete config.params.type;    
    // console.log("config",config);    
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// instance.interceptors.response.use((config) => {
//   return config;
// }, (error) => {
//   ErrorHandler.handleError(error);
//   return Promise.reject(error);
// });

export function setToken (token) {
  const accessToken = `${token}`;
  console.log("setToken", token , StorageManager.User.getUser().token);
  instance.defaults.headers.common["x-auth-token"] = StorageManager.User.getUser().token;
};

// ASIS - TIOT
instance.interceptors.response.use(
  (response) => {
    const refeshToken = response.headers["refresh-jwt-token"];
    if (refeshToken) {
      instance.defaults.headers.common["x-auth-token"] = refeshToken;
      // localStorage.setItem("token", JSON.stringify(refeshToken));
      StorageManager.User.setToken(JSON.stringify(refeshToken));
    }
    // initCommon({
    //   dispatch : useDispatch()
    // });
    // debugger;
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

   // let token = localStorage.getItem("token");
      let token = StorageManager.User.getToken();      

      if (token) {
        token = JSON.parse(token);
        const { exp } = jwt_decode(token);
        console.log("interceptors", exp);
        if (exp && isExpired(exp)) {
          // localStorage.clear();
          StorageManager.User.clearUser();
          // store.dispatch(loginActions.clear());
          store.dispatch(Auth.Type.CLEAR);
          dispatch(Auth.Type.CLEAR);
          toast.error("Token expired");
          debugger;
          
          // sendAlert(true, "error", "Error", "Token expired", "/login");
        } else {
          toast.error("Unauthorized");          
          // sendAlert(true, "error", "Error", "Unauthorized", "/");
        }
        console.log("token", token);
      } else {
        // localStorage.clear();
        StorageManager.User.clearUser();        
        // sendAlert(true, "error", "Error", "Forbidden", "/login");
        toast.error("Forbidden");
        console.log("token", token);
      }

      //return client(originalRequest);
      return;
    }
    return Promise.reject(error);
  }
);

export default instance;
