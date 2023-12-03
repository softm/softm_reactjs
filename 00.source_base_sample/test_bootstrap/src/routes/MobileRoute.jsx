import React from 'react';

import {
  Route, Switch, Redirect,
} from 'react-router-dom';


import NotFoundPage from '../screens/common/NotFoundPage';

import EcoPage from '../screens/mobile/EcoPage';

const MobileRoute = ({
  listLaneWithErrInfo,
  listLane,
}) => {
  return (
    <Switch>
      <Route exact path="/mobile/" render={() => <EcoPage listLaneWithErrInfo={listLaneWithErrInfo} />} />
      <Route path="/mobile/eco" render={({ match, location }) => <EcoPage match={match} location={location} listLaneWithErrInfo={listLaneWithErrInfo} />} />
      <Route path="/login" render={() => <Redirect to={{ pathname: '/mobile/' }} />} />
      <Route path="/" render={() => <Redirect to={{ pathname: '/mobile/' }} />} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};


export default MobileRoute;
