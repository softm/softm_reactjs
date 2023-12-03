import React from 'react';
import { useSelector } from 'react-redux';
import {
  Route, Switch, NavLink, Redirect,
} from 'react-router-dom';

import { Nav } from 'react-bootstrap';

import NotFoundPage from '../screens/common/NotFoundPage';

import VisitPage from '../screens/history/VisitPage';
import DcPage from '../screens/history/DcPage';
import OperatorPage from '../screens/history/OperatorPage';
import ExceptionPage from '../screens/history/ExceptionPage';
import GateHistoryPage from '../screens/history/GateHistoryPage';
import LaneHistoryPage from '../screens/history/LaneHistoryPage';
import VisitLogPage from '../screens/history/VisitLogPage';
import TOSHistoryPage from '../screens/history/TOSHistoryPage';
import CommonEnums from '../utils/common-enums';
// import { Logger } from '../../utils';

// const Log = Logger.create('HistoryPage');
const HistoryPage = ({
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
                { menu: 'Visit', link: '/history' },
                { menu: 'DC', link: '/history/dc' },
                { menu: 'Operator', link: '/history/operator' },
                { menu: 'Exception', link: '/history/exception' },
                { menu: 'Lane', link: '/history/lane' },
                { menu: 'Visit Count', link: '/history/visit' },
                { menu: 'Visit Log', link: '/history/visit-log' },
                { menu: 'Zodiac', link: '/history/zodiac' },
              ].map((item) => {
                return (
                  <Nav.Item key={item.menu}>
                    <Nav.Link
                      as={NavLink}
                      exact={item.link === '/history'}
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
            <Route exact path="/history" render={() => <VisitPage listLane={listLane} />} />
            <Route path="/history/dc" render={() => <DcPage listLane={listLane} />} />
            <Route path="/history/operator" render={() => <OperatorPage listLane={listLane} />} />
            <Route path="/history/exception" render={() => <ExceptionPage listLane={listLane} />} />
            <Route path="/history/lane" render={() => <GateHistoryPage listLane={listLane} />} />
            <Route path="/history/visit/:laneIndex?" render={({ match }) => <LaneHistoryPage match={match} listLane={listLane} />} />
            <Route path="/history/visit-log/:laneIndex?/:visitIndex?" render={({ match }) => <VisitLogPage match={match} listLane={listLane} />} />
            <Route path="/history/zodiac" render={() => <TOSHistoryPage listLane={listLane} />} />
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

export default HistoryPage;
