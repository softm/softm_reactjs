import {
    Container, Row, Col, Spinner,
} from 'react-bootstrap';
import React, { Suspense, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastManager from './utils/toast-manager';
import { getTitle, getContent } from './apis/common-api';

import AuthComponent from './components/AuthComponent';

import TestLogin from './screens/TestLogin';
import LoginPage  from './screens/LoginPage';
import SamplePage  from './screens/SamplePage';
import {
    BrowserRouter as Router,
    Route, Redirect,
  } from 'react-router-dom';

import HeaderPage from './screens/common/HeaderPage';
import SideMenuPage from './screens/common/SideMenuPage';
import FooterPage from './screens/common/FooterPage';

import MainRoute from './routes/MainRoute';

// Css
import './App.css';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/ui-override.css';
import './assets/css/ui-font.css';
import './assets/css/ui-color.css';
import './assets/css/ui-pwa.css';
import './assets/css/ui-component.css';
import './assets/css/ui-transition.css';
import Switch from 'react-bootstrap/esm/Switch';

import './assets/css/zara-style.css';
import './assets_tiot/css/tiot_style.css';
import Layout from './components/Layout';

/**
 * Toast Setting
 */
toast.configure({
    position: 'top-center',
    transition: Slide,
    autoClose: 3000,
    pauseOnFocusLoss: false,
    limit: 1
});

function App({
    account,
    isLoading
}) {

    const [authLogin, setAuthLogin] = useState({
        userId:"",
        password:""
    });
  
    const [testData, setData] = useState({
        id:"",
        title:"",
        content:""
    });

    const sendProps = {
    //    showLoading:()=>setLoading(true),
    //    hideLoading:()=>setLoading(false)
    }
    const SpinnerWithFullSize = (
      <div>
      </div>
        // <Row className="align-items-center vh-100">
        //   <Col />
        //   <Col className="text-center">
        //     <Spinner animation="border" className="m-4" />
        //     <h4>Loading pages</h4>
        //   </Col>
        //   <Col />
        // </Row>
      );
    
    return (
      <div className="App">
        <Layout>

        {/* <LoginPage {...sendProps}></LoginPage> */}
        <Router>
        <Suspense fallback={SpinnerWithFullSize}>
          {
            account
              ? (
                <>
                  {
                      <HeaderPage/>
                  }
                  <Container
                    fluid
                    className="d-flex"
                    style={
                       {
                          marginTop: '4.1rem',
                          height: 'calc( 100vh - 7.6rem )',
                          overflow: 'auto',
                        }
                   }
                  >
                    {
                        <SideMenuPage/>
                    }
                    <div
                      className="flex-grow-1"
                      style={{verticalAlign:"top"}}
                    >
                      <MainRoute
                      />               
                    </div>
                  </Container>
                  {
                      <FooterPage account={account} />
                  }
                  {/* <Redirect to={{ pathname: '/' }}/> */}
                </>
              )
              : (
                <>
                <Switch>
                  <Route exact path="/login" component={LoginPage} />
                  {/* <Redirect
                    to={{ pathname: '/login' }}
                    /> */}
                </Switch>
                </>
              )
          }
        </Suspense>
        <AuthComponent/>        
      </Router>

      <div>App.isLoading : {isLoading?"true":"false"}</div>
      </Layout>
    </div>


    );
}

const mapStateToProps = (state) => ({
    isLoading: state.common.isLoading,    
    account: state.auth.account,
    // isLaneDetailView: state.ui.get('laneDetailView'),
    // listLane: state.gateLane.get('listLane'),
    // listErrInfo:
    //   state.errInfo.get('listErrInfo')
    //     .filter((errInfo) => (!errInfo.resolveAt) && errInfo.laneIndex),
  });
  
  export default connect(mapStateToProps)(App);
