// React
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import initCommon, {dispatch, loadingHide, loadingShow} from '../utils/common-util';

// Bootstrap
import {
  Container,
  Form, FormControl,
  Button, Spinner,
  ListGroup
} from 'react-bootstrap';

// Node Modules
import { toast } from 'react-toastify';
import FooterPage from './common/FooterPage';

// import { Common } from '../stores/common-reducer';
import { Auth } from '../stores/auth-reducer';

import AppConfig from '../configs/app-config';

import styled from 'styled-components';
import { useHistory } from 'react-router';

const defaultTerminal = [
  { value: "BCT", labelKey: "BCT" },
  { value: "LCIT", labelKey: "LCIT" },
  { value: "MICT", labelKey: "MICT", isSelected: true },
  { value: "RPL", labelKey: "RPL" },
  { value: "YAR", labelKey: "YAR" },
];

const LoginPage = () => {
  initCommon({
    dispatch : useDispatch()
  });

  const dis = useDispatch();
  const history = useHistory();

  const claims = useSelector((state) => state.auth?.claims);  
//const token  = useSelector((state) => state.auth?.token);  

  const authResults = useSelector((state) => state.auth.authResults);
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);

  const { isLoggedIn } = useSelector((state) => ({
     isLoggedIn: state.auth.isLoggedIn,
  }));

  const [ele, setElement] = useState({
    userId:"tiot-edit",
    password:"Welcome@1",
    locale:"en",
    currentDataScope:"MICT",
    appCode:"",
    newSession:""
  });

  function onChangeForElement(e) {
    let key = e.target.name;
    ele[key] = e.target.value;
    setElement({ ...ele, [key]: e.target.value });
    console.log(e.target.name,e.target.value,key);
  };

  // Locals
  const title = AppConfig.brandName;
  const opacity = '38%';

  // Handler
  const onClickLogin = () => {
    if (!ele.userId) {
      toast.warn('Account is empty');
      return;
    }

    if (!ele.password) {
      toast.warn('Password is empty');
      return;
    }

    dispatch(Auth.Type.AUTHENTICATE,
        ele.userId,
        ele.password,
        ele.locale, // locale
        ele.currentDataScope, // currentDataScope,
        ele.appCode, // appCode,
        ele.newSession, // newSession
    );
  };

  const onClickLogout = () => {
    dispatch(Auth.Type.LOGOUT,
      authResults?.jwttoken
    );
    history.push("/login");    
  };
  // softm TEST 
  const onClickLoading = () => {
    loadingShow();
    window.setTimeout(()=>{
      loadingHide();
    },500);
  }

  return (
    <Container fluid className="user-select-none">
      <img
        alt="background"
        src="/images/background1.png"
        style={{
          width: '100%',
          height: '100%',
          zIndex: '-1',
          position: 'absolute',
          objectFit: 'cover',
        }}
      />
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}
      >
        <Form>
        <Form.Control
          className="mb-3 drop-shadow"
          as="select"
          onChange={null}
          // value="MICT"
          defaultValue={ele.currentDataScope} 
          onChange={onChangeForElement}
          name="currentDataScope"          
        >
        {
          defaultTerminal.map((item, idx) => (
            //aa = item?.isSelected?"data":"stet"
            <option numbers={idx} key={idx} value={item.labelKey} >{item.value}</option>
          ))
        }
        </Form.Control>

          <FormControl
            className="mb-3 drop-shadow"
            disabled={isLoggedIn}
            placeholder="Account"
            value={ele.userId} 
            onChange={onChangeForElement}
            name="userId"            
          />
          <FormControl
            type="password"
            className="mb-5 drop-shadow"
            disabled={isLoggedIn}
            placeholder="Password"
            value={ele.password} 
            onChange={onChangeForElement}
            name="password"
          />
          <Button
            block
            className="drop-shadow"
            variant="outline-light"
            onClick={onClickLogin}
            disabled={isLoggedIn}
          >
            {
              isLoggedIn
                ? (<Spinner animation="border" size="sm" />)
                : ('Log in')
            }
          </Button>
          <Button
            block
            className="drop-shadow"
            variant="outline-light"
            onClick={onClickLoading}
            disabled={isLoggedIn}
          >Loading</Button>
          <Button
            block
            className="drop-shadow"
            variant="outline-light"
            onClick={onClickLogout}
            disabled={isLoggedIn}
          >Log out</Button>
        </Form>

        <div>
          isLoggedIn : {isLoggedIn?"true":"false"}
        </div>
        <div>
        authResults : {JSON.stringify(authResults)}
        </div>

      </div>

      <FooterPage
        className="fixed-bottom vw-100"
      />
    </Container>
  );
};
export default LoginPage;
