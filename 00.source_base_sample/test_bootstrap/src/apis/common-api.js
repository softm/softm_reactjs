export const API_TOS_HOST = process.env.REACT_APP_API_TOS_HOST;
export const FILE_DOWNLOAD_URL = process.env.REACT_APP_FILE_DOWNLOAD_URL;
export const VERSION = process.env.REACT_APP_VERSION;
export const RELEASE_DATE = process.env.REACT_APP_RELEASE_DATE;
export const FetchStatus = {
  Request: "Request",
  Success: "Success",
  Fail: "Fail",
};
export const AuthStatus = {
  Login: "Login",
  NotLogin: "NotLogin",
};

export const UPDATE_PERIOD = 5000;
export const PAGE_PRE_LIMIT = 20;

export const SYSTEM_CODE = "R0001";
export const COMMON_CODE = "R0002";
export const MANUFACTURE_CODE = "M9999";
export const EQUIPMENT_TYPE_CODE = "ET999";
export const INSTALL_POSITION_CODE = "P9999";
export const TERMINAL_CODE = "T9999";
export const CONNECTION_STATUS_CODE = "G9999";

//import axios from 'axios';
export function getTitle(id) {
    // return axios.get('http://localhost:5000/posts/title/' + id);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("resolve getTitle" );            
            resolve({title:"제목.."});
        }, 100);
    });
    // return new Promise((resolve, reject) => {
    //     setTimeout(resolve, 100, {title:"제목..."});
    // });
}
export function getContent(id) {
    // return axios.get('http://localhost:5000/posts/content/' + id);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("resolve getContent" );
            resolve({content:"내용ㅇ..."});
        }, 100);
    });
    // return = new Promise((resolve, reject) => {
    //     setTimeout(resolve, 100, {content:"내용ㅇ..."});
    // });
}