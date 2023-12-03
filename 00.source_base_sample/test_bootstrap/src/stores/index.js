/**
 * Redux Module's Index
 * @author F1215(Thomas.Jeong)
 */
import { combineReducers } from 'redux';

// Modules
import CriteriaReducer from './criteria-reducer';
import UiReducer from './ui-reducer';
import GateLaneReducer from './gate-lane-reducer';
import ErrInfoReducer from './err-info-reducer';
import AuthReducer from './auth-reducer';
import AdminReducer from './admin-reducer';
import CommonReducer from './common-reducer';

import JobReducer from './job-reducer';
import rootSaga from '../saga';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

const reducer = combineReducers({
    criteria: CriteriaReducer,
    ui: UiReducer,
    gateLane: GateLaneReducer,
    errInfo: ErrInfoReducer,
    auth: AuthReducer,
    admin: AdminReducer,
    common: CommonReducer,
    // test: testModule,
    job: JobReducer,  
  });

  const sagaMiddleware = createSagaMiddleware({
    onError: (err) => {
      // global error
      console.error({
        message: err.message,
        source: "sagaError",
        stacktrace: err.sagaStack,
      });
      //store.dispatch({ type: "ERROR", payload: err });
    },
  });

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(sagaMiddleware),
      (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose,
    ),
  );
  
sagaMiddleware.run(rootSaga);

export default store;