import React, { lazy } from 'react';

import {
  Route, Switch, Redirect,
} from 'react-router-dom';


// import GateMonitoringPage from '../screens/gate-monitoring/GateMonitoringPage';
import NotFoundPage from '../screens/common/NotFoundPage';


// import OcrDetailPage from '../screens/lane/OcrDetailPage';
// import LaneDetailPage from '../screens/lane/LaneDetailPage';
// import DevicePage from '../screens/device/DevicePage';
// import DamageInfoPage from '../screens/damage/DamageInfoPage';
// import DataModelPage from '../screens/admin-test/DataModelPage';
// import HistoryRoute from './HistoryRoute';
// import AdminRoute from './AdminRoute';

// const GateMonitoringPage = lazy(() => import('./GateMonitoring/GateMonitoringPage'));
// const NotFoundPage = lazy(() => import('./NotFoundPage'));

// const LaneDetailPage = lazy(() => import('./LaneDetail/LaneDetailPage'));
// const DevicePage = lazy(() => import('./DeviceStatus/DevicePage'));
// const DataModelPage = lazy(() => import('./admin-test/DataModelPage'));
// const HistoryRoute = lazy(() => import('./HistoryRoute'));

const TestPage = lazy(() => import('../screens/test/TestPage'));
const HomePage = lazy(() => import('../screens/HomePage'));
const TestLogin = lazy(() => import('../screens/TestLogin'));
const SamplePage = lazy(() => import('../screens/SamplePage'));
const Statics = lazy(() => import('../screens/Statics'));
const StaticsPage = lazy(() => import('../screens/StaticsPage'));


const MainRoute = ({
  listLaneWithErrInfo,
  listLane,
}) => {
  // const sendPropsRouter = 'This is from parent';

  return (
    <Switch>
{/* 
      <Route exact path="/" render={() => <GateMonitoringPage listLaneWithErrInfo={listLaneWithErrInfo} />} />
      <Route path="/ocrDetail/:laneId" render={({ match, location }) => <OcrDetailPage match={match} location={location} listLaneWithErrInfo={listLaneWithErrInfo} />} />
      <Route path="/laneDetail/:laneId" render={({ match, location }) => <LaneDetailPage match={match} location={location} listLaneWithErrInfo={listLaneWithErrInfo} />} />
      <Route path="/damageInfo/:laneId" render={({ match, location }) => <DamageInfoPage match={match} location={location} listLaneWithErrInfo={listLaneWithErrInfo} />} />
      <Route path="/device" render={() => <DevicePage listLaneWithErrInfo={listLaneWithErrInfo} />} />
      <Route path="/history" render={() => <HistoryRoute listLane={listLane} />} />
      <Route path="/admin" render={() => <AdminRoute listLane={listLane} />} />
      <Route path="/admin-test" component={DataModelPage} />
 */}
      <Route exact path="/" component={HomePage} /> 
      <Route path="/test" component={TestPage} />
      <Route path="/test/login" component={TestLogin} />      
      <Route exact path="/sample" component={SamplePage} />      
      <Route exact path="/statics" component={StaticsPage} />      
      <Route exact path="/statics_" component={Statics} />      
{/*
{/*
      <Route path="/video" component={VideoPage} />
 */}
      <Route path="/login" render={() => <Redirect to={{ pathname: '/' }} />} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};


export default MainRoute;
