import initCommon, {dispatch, loadingHide, loadingShow} from '../utils/common-util';

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
// import { ZAlert, ZButton } from "@zara-ui/react";
import ConfirmComponent from "./ComfirmComponent";

import { Auth } from '../stores/auth-reducer';
import { setToken } from '../axios/index';

function AuthComponent() {
  initCommon({
    dispatch : useDispatch()
  });
  const [confirmOpen, setConfirmOpen] = useState(false);
  
  const history = useHistory();
  // const dispatch = useDispatch();
  const { error, token, authResults } = useSelector((state) => state.auth);
  // const { alert } = useSelector((state) => state.common);

  useEffect(() => {
    if (error || !token ) {
      history.push("/login");
    }
  }, [error, history, token]);

  useEffect(() => {
    //dispatch(Auth.Type.RESTORE);
  }, [dispatch]);

  useEffect(() => {
    console.log("token , authResults", token, authResults);
    if (authResults && token) {
      if ( authResults?.jwttoken ) {
        var claims = {
          iss: window.location.hostname, // The URL of your service
          sub: authResults.userId, // The UID of the user in your system
          locale: authResults.locale, // Language selection
          currentDataScope: authResults.currentDataScope, // SITE Selection
          token: authResults.jwttoken , // JWT from TIOT Server
        };
        console.log("claims : ", claims);
        dispatch(Auth.Type.SET_CLAIMS,claims);
        setToken(authResults.jwttoken); // 아니 왜 에러나자.
      }

      var userRolesClaims = jwt_decode(token);
      console.log("jwt_decode",userRolesClaims);
      if (userRolesClaims) {
        console.log("userRolesClaims: ", userRolesClaims);
        dispatch(Auth.Type.SET_USER_ROLES_CLAIMS, userRolesClaims);
      }
    }
  }, [dispatch, token, authResults]);

  const handleOk = () => {
    setConfirmOpen(false);
    // todo
  };

  return (
    <>
    <div>token : {token}</div>
    <ConfirmComponent
      message="Delete the exception code?"
      show={confirmOpen}
      onOk={handleOk}
      onCancel={() => setConfirmOpen(false)}
    />
    </>
  );
}

export default AuthComponent;
