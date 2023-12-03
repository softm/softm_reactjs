// React
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Link, NavLink,
} from 'react-router-dom';

// Bootstrap
import {
  Navbar, Nav,
  Badge, Button, Dropdown,
} from 'react-bootstrap';
import {
  ToggleOn, ToggleOff,
  BoxArrowInUp, Bezier, CardList, Tools,
} from 'react-bootstrap-icons';

// Npm Modules
import { toast } from 'react-toastify';

// Config
import AppConfig from '../../configs/app-config';
import CommonEnums from '../../utils/common-enums';

// Debug
// eslint-disable-next-line no-unused-vars
import { ErrorHandler, Logger, ToastManager } from '../../utils';

import initCommon, {dispatch, loadingHide, loadingShow} from '../../utils/common-util';

// Redux modules
import {
  Auth,
} from '../../stores/auth-reducer';
import { AuthApi } from '../../apis';

import { useHistory } from 'react-router';

// const Log = Logger.create('HeaderPage');
const HeaderPage = ({
  online=true,
}) => {
  initCommon({
    dispatch : useDispatch()
  });

  const history = useHistory();
  const { user, account, roleType } = useSelector((state) => ({
    user: state.auth,
    account: state.auth.account,
    roleType: state.auth.roleType,
  }));
  const authResults = useSelector((state) => state.auth.authResults);

  // const dispatch = useDispatch();
  const { brandName, brandShortName } = AppConfig;

  const onClickLogout = () => {
    // AuthApi.logOut(user).then(() => {
      toast.success('Logout success');
     // dispatch(logOut());
      dispatch(Auth.Type.LOGOUT,
        authResults?.jwttoken
      );
      // document.location.href = "/";
      history.push("/login");  
    // }).catch((err) => {
    //   ToastManager.top.error(ErrorHandler.errorToString(err));
    // });
  };

  return (
    <Navbar
      fixed="top"
      bg="dark"
      variant="dark"
      expand="lg"
      collapseOnSelect
    >
      <Navbar.Toggle />
      <Navbar.Brand as={Link} to="/">
        <img
          className="App-logo d-inline mr-2 ml-2"
          alt="logo"
          src="/logo-dark.svg"
        />
        <span className="d-none d-sm-inline ml-2 mt-2">
          <strong>{brandName}</strong>
        </span>
        <span className="d-inline d-sm-none ml-2">
          <strong>{brandShortName}</strong>
        </span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} exact to="/" eventKey="/">
            <BoxArrowInUp className="mr-1" size={24} />
            Gate
          </Nav.Link>
          <Nav.Link as={NavLink} to="/device" eventKey="/device">
            <Bezier className="mr-1" size={24} />
            Device
          </Nav.Link>
          {(roleType && (roleType === CommonEnums.ROLE_TYPE.ADMIN
            || roleType === CommonEnums.ROLE_TYPE.SUPERVISOR)) && (
            <Nav.Link as={NavLink} to="/history" eventKey="/history">
              <CardList className="mr-1" size={24} />
              History
            </Nav.Link>
          )}
          {(roleType && (roleType === CommonEnums.ROLE_TYPE.ADMIN
            || roleType === CommonEnums.ROLE_TYPE.SUPERVISOR)) && (
            <Nav.Link as={NavLink} to="/admin" eventKey="/admin">
              <Tools className="mr-1" size={24} />
              Admin
            </Nav.Link>
          )}
          {roleType && roleType === CommonEnums.ROLE_TYPE.ADMIN && (
          <Nav.Link as={NavLink} to="/admin-test" eventKey="/admin-test">
            <Tools className="mr-1" size={24} />
            AdminTest
          </Nav.Link>
          )}
        </Nav>
        <div
          id="testMenus"
          className={
            process.env.NODE_ENV === 'development'
              ? 'd-flex'
              : 'd-none'
          }
        >
          <Badge className="mr-1" variant={online ? 'success' : 'danger'}>
            {online ? (<ToggleOn size={18} className="mr-2" />) : (<ToggleOff size={18} className="mr-2" />)}
            {online ? (<Button size="sm" variant="success">Online</Button>) : (<Button size="sm" variant="danger">Offline</Button>)}
          </Badge>
          {roleType && roleType === CommonEnums.ROLE_TYPE.ADMIN && (
            <Dropdown>
              <Dropdown.Toggle variant="info" className="mr-1">
                Test Menu
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/test">Test</Dropdown.Item>
                <Dropdown.Item as={Link} to="/video">Video</Dropdown.Item>
                <Dropdown.Item as={Link} to="/pagenotfound">Page not found</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
      </Navbar.Collapse>
      <Dropdown>
        <Dropdown.Toggle variant="primary">
          {account}
          {` (${CommonEnums.ROLE_TYPE.displayName(roleType)})`}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={onClickLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
};

export default HeaderPage;
