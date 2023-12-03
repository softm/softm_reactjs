import { all, fork } from 'redux-saga/effects';

import auth from './auth-saga';
import job from './job-saga';

export default function* rootSaga() {
  yield all([
    fork(auth),
    fork(job),
  ]);
}
