import { all, call, put, takeLeading } from "redux-saga/effects";
import { Job } from "../stores/job-reducer";
import { Common } from "../stores/common-reducer";
import { apiHandler, JobApi } from '../apis';

// function* fetchJobCycle({ jobId, start, end }) {
function* fetchJobCycle(action) {
  try {
    console.group("saga - " + action.type);
    console.log("palyload : ", action);  

    const {
      isSuccess,
      resultCode,
      resultMessage,
      totalCount,
      data,
    } = yield call(apiHandler, [JobApi, JobApi.jobcycle, action]);

    const result = { resultCode, resultMessage, totalCount, data };

    if (isSuccess && data) {
      yield put({ type: Job.Type.FETCH_JOB_CYCLE_RESULT, result });
    }
  } catch (error) {
    yield put({ type: Job.Type.JOB_CYCLE_ACTION_FAILED, error });
  }
}

// function* fetchJobCycleList({ start, end, page, limit }) {
function* fetchJobCycleList(action) {
  try {
    console.group("saga - " + action.type);
    console.log("palyload : ", action);  
    // let params = action;
    // delete action.type;
    yield put({
      type: Common.Type.COMMON_LOADING_SHOW,
    });

  // delete config.data.type;
    // delete config.params.type;    
    const a = yield call(apiHandler, [JobApi, JobApi.jobcycleList, action]);
    const {
      isSuccess,
      resultCode,
      resultMessage,
      totalCount,
      data,
    } =a;
    const result = { resultCode, resultMessage, totalCount, data };
    if (isSuccess && data) {
      yield put({ type: Job.Type.FETCH_JOB_CYCLE_LIST_RESULT, result });
    }
  } catch (error) {
    yield put({ type: Job.Type.JOB_CYCLE_ACTION_FAILED, error });
  } finally {
    yield put({
      type: Common.Type.COMMON_LOADING_HIDE,
    });
  }
}

// function* fetchJobCycleStatics() {
function* fetchJobCycleStatics(action) {
  try {
    console.group("saga - " + action.type);
    console.log("palyload : ", action);  

    const {
      isSuccess,
      resultCode,
      resultMessage,
      totalCount,
      data,
    } = yield call(apiHandler, [JobApi, JobApi.schedulerInfo, action]);

    const result = { resultCode, resultMessage, totalCount, data };
    if (isSuccess && data) {
      yield put({ type: Job.Type.FETCH_JOB_CYCLE_SCHEDULE_RESULT, result });
    }
  } catch (error) {
    yield put({ type: Job.Type.JOB_CYCLE_ACTION_FAILED, error });
  }
}

// function* fetchJobBorder() {
function* fetchJobBorder(action) {
  try {
    console.group("saga - " + action.type);
    console.log("palyload : ", action);  

    const {
      isSuccess,
      resultCode,
      resultMessage,
      totalCount,
      data,
    } = yield call(apiHandler, [JobApi, JobApi.borderLadenInfo, action]);

    const result = { resultCode, resultMessage, totalCount, data };
    if (isSuccess && data) {
      yield put({ type: Job.Type.FETCH_JOB_BORDER_RESULT, result });
    }
  } catch (error) {
    yield put({ type: Job.Type.JOB_CYCLE_ACTION_FAILED, error });
  }
}

export default function* () {
  yield all([
    takeLeading(Job.Type.FETCH_JOB_CYCLE, fetchJobCycle),
    takeLeading(Job.Type.FETCH_JOB_CYCLE_LIST, fetchJobCycleList),
    takeLeading(Job.Type.FETCH_JOB_CYCLE_SCHEDULE, fetchJobCycleStatics),
    takeLeading(Job.Type.FETCH_JOB_BORDER, fetchJobBorder),
  ]);
}
