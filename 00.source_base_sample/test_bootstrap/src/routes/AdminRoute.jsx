import React from 'react';
import { useSelector } from 'react-redux';
import {
  Route, Switch, NavLink, Redirect,
} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import TerminalPage from '../screens/admin/TerminalPage';
import LanePage from '../screens/admin/LanePage';
import DevicePage from '../screens/admin/DevicePage';
import RecognitionRatePage from '../screens/admin/RecognitionRatePage';
import ExceptionCodePage from '../screens/admin/ExceptionCodePage';
import NotFoundPage from '../screens/common/NotFoundPage';
import CommonEnums from '../utils/common-enums';

const AdminRoute = ({
  listLane,
}) => {
  const { roleType } = useSelector((state) => ({
    roleType: state.auth.get('roleType'),
  }));

  const permission = (roleType && (roleType === CommonEnums.ROLE_TYPE.ADMIN
    || roleType === CommonEnums.ROLE_TYPE.SUPERVISOR));

  return (
    <div className="mt-2 ml-1">
      {permission ? (
        <>
          <Nav
            variant="tabs"
          >
            {
              [
                { menu: 'Terminal', link: '/admin' },
                { menu: 'Lane', link: '/admin/lane' },
                { menu: 'Device', link: '/admin/device' },
                { menu: 'Recognition Rate', link: '/admin/rate' },
                { menu: 'Exception Code', link: '/admin/exception' },
              ].map((item) => {
                return (
                  <Nav.Item key={item.menu}>
                    <Nav.Link
                      as={NavLink}
                      exact={item.link === '/admin'}
                      to={item.link}
                      active={window.location.pathname === item.link}
                      eventKey={`${item.link}`}
                    >
                      {item.menu}
                    </Nav.Link>
                  </Nav.Item>
                );
              })
            }
          </Nav>
          <Switch>
            <Route exact path="/admin" render={() => <TerminalPage />} />
            <Route path="/admin/lane" render={() => <LanePage />} />
            <Route path="/admin/device" render={() => <DevicePage listLane={listLane} />} />
            <Route path="/admin/rate" render={() => <RecognitionRatePage listLane={listLane} />} />
            <Route path="/admin/exception" render={() => <ExceptionCodePage />} />
            <Route component={NotFoundPage} />
          </Switch>
        </>
      ) : (
        <Switch>
          <Redirect path="*" to="/" />
        </Switch>
      )}
    </div>
  );
};

export default AdminRoute;
