// React
import React from 'react';
import { connect } from 'react-redux';
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
  BoxArrowInUp,
} from 'react-bootstrap-icons';

// Npm Modules
import { toast } from 'react-toastify';

// Config
import AppConfig from '../../configs/app-config';

// Debug
// eslint-disable-next-line no-unused-vars
import { ErrorHandler, Logger, ToastManager } from '../../utils';

// Redux modules
import {
  logOut,
} from '../../stores/auth-reducer';
import { AuthApi } from '../../apis';

// const Log = Logger.create('MobileHeaderPage');
const MobileHeaderPage = ({
  online,
  user,
  dispatchLogout,
}) => {
  const { brandName, brandShortName } = AppConfig;

  const onClickLogout = () => {
    dispatchLogout();
    AuthApi.logOut(user).then(() => {
      toast.success('Logout success.');
    }).catch((err) => {
      ToastManager.top.error(ErrorHandler.errorToString(err));
    });
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
        </div>
      </Navbar.Collapse>
      <Dropdown>
        <Dropdown.Toggle variant="primary">
          {user.get('account')}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={onClickLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLogout: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeaderPage);
