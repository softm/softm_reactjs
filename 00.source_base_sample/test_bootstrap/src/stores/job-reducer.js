import { Map } from 'immutable';
import produce from 'immer';
import StorageManager from '../storages/user-storage';
import { createReducer } from "./common/redux-helper";

/* Define Type & Action --- --- --- --- */
const Job = {
  Type:{
      FETCH_JOB_CYCLE: "job/FETCH_JOB_CYCLE",
      FETCH_JOB_CYCLE_RESULT: "job/FETCH_JOB_CYCLE_RESULT",
      FETCH_JOB_CYCLE_LIST: "job/FETCH_JOB_CYCLE_LIST",
      FETCH_JOB_CYCLE_LIST_RESULT: "job/FETCH_JOB_CYCLE_LIST_RESULT",
      FETCH_JOB_CYCLE_SCHEDULE: "job/FETCH_JOB_CYCLE_SCHEDULE",
      FETCH_JOB_CYCLE_SCHEDULE_RESULT: "job/FETCH_JOB_CYCLE_SCHEDULE_RESULT",
      JOB_CYCLE_ACTION_FAILED: "job/JOB_CYCLE_ACTION_FAILED",
      FETCH_JOB_BORDER: "job/FETCH_JOB_BORDER",
      FETCH_JOB_BORDER_RESULT: "job/FETCH_JOB_BORDER_RESULT",
  },
  Action:{}
};

/* Define Action Creator --- --- --- --- */
// export const actions = {
//   fetchJobCycle: (jobId, start, end) => ({
//     type: Types.FETCH_JOB_CYCLE,
//     jobId,
//     start,
//     end,
//   }),
//   fetchJobCycleList: (start, end, page, limit) => ({
//     type: Types.FETCH_JOB_CYCLE_LIST,
//     start,
//     end,
//     page,
//     limit,
//   }),
//   fetchJobCycleSchedule: () => ({
//     type: Types.FETCH_JOB_CYCLE_SCHEDULE,
//   }),
//   fetchJobBorder: () => ({
//     type: Types.FETCH_JOB_BORDER,
//   }),
// };

Job.Action = {
    // FETCH_JOB_CYCLE
    [Job.Type.FETCH_JOB_CYCLE] : (
        jobId,
        start,
        end,
    ) => {
      return ({
        type: Job.Type.FETCH_JOB_CYCLE,
        jobId,
        start,
        end,
      })
    },
    // FETCH_JOB_CYCLE_LIST
    [Job.Type.FETCH_JOB_CYCLE_LIST] : (
        start,
        end,
        page,
        limit,
    ) => {
      return ({
        type: Job.Type.FETCH_JOB_CYCLE_LIST,
        start,
        end,
        page,
        limit,
      })
    },
    // FETCH_JOB_CYCLE_SCHEDULE
    [Job.Type.FETCH_JOB_CYCLE_SCHEDULE] : (
    ) => {
      return ({
        type: Job.Type.FETCH_JOB_CYCLE_SCHEDULE,
      })
    },
    // FETCH_JOB_BORDER
    [Job.Type.FETCH_JOB_BORDER] : (
    ) => {
      return ({
        type: Job.Type.FETCH_JOB_BORDER,
      })
    },
}
/* --- --- --- --- Define Action Creator */

export {
  Job
};

const initState = {
  error: null,
  loading: false,
  jobCycle: null,
  jobCycleList: [],
  jobCycleStatics: null,
  jobBorder : null,
};

const reducer = createReducer(initState, {
  [Job.Type.FETCH_JOB_CYCLE]: (state, action) =>
    produce(state, (draft) => {
      draft.error = null;
    }),
  [Job.Type.FETCH_JOB_CYCLE_RESULT]: (state, action) =>
    produce(state, (draft) => {
      draft.jobCycle = action.result;
    }),
  [Job.Type.FETCH_JOB_CYCLE_LIST]: (state, action) =>
    produce(state, (draft) => {
      draft.error = null;
    }),
  [Job.Type.FETCH_JOB_CYCLE_LIST_RESULT]: (state, action) =>
    produce(state, (draft) => {
      draft.jobCycleList = action.result;
    }),
  [Job.Type.FETCH_JOB_CYCLE_SCHEDULE]: (state, action) =>
    produce(state, (draft) => {
      draft.error = null;
    }),
  [Job.Type.FETCH_JOB_CYCLE_SCHEDULE_RESULT]: (state, action) =>
    produce(state, (draft) => {
      draft.jobCycleSchedule = action.result;
    }),
  [Job.Type.JOB_CYCLE_ACTION_FAILED]: (state, action) =>
    produce(state, (draft) => {
      draft.error = action.error;
    }),
  [Job.Type.FETCH_JOB_BORDER]: (state, action) =>
    produce(state, (draft) => {
      draft.error = null;
    }),
  [Job.Type.FETCH_JOB_BORDER_RESULT]: (state, action) =>
    produce(state, (draft) => {
      draft.jobBorder = action.result;
    }),
});

export default reducer;
