/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { actions as jobActions } from "../../../common/reducer/job";
// import JCTable from "../../../component/Table/JCTable";
// import { JCTColumns } from "../utils/table";
// import Detail from "./Detail";
// import DateRange from "../../../component/DateRange";
// import {
//   currentDateString,
//   currentDateTimeString,
//   currentTimeString,
//   dateStringToUTCEpoch,
//   prevDateString,
// } from "../../../common/util/dateUtil";
// import JCTPagination from "../../../component/Table/JCTPagination";
// import styles from "./styles.module.scss";
// import { PAGE_PRE_LIMIT, UPDATE_PERIOD } from "../../../common/constant";

// import useBreadCrumb from "../../../common/hook/useBreadCrumb";
import { Button } from 'react-bootstrap';
import CONSTANTS from '../utils/constants';

const Statics = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [page, setPage] = useState(1);
  const [showDetail, setShowDetail] = useState(false);
  const [selected, selectItem] = useState(null);

  const [initialDate, setInitialDate] = useState({
    // startDate: prevDateString(1),
    // startTime: currentTimeString(),
    // endDate: currentDateString(),
    // endTime: currentTimeString(),
  });

  const dispatch = useDispatch();
  // const jobCycleList = useSelector((state) => state.job.jobCycleList);
  // useBreadCrumb("statics");

  useEffect(() => {
    const start = initialDate.startDate + " " + initialDate.startTime;
    const end = initialDate.endDate + " " + initialDate.endTime;
    // setStart(dateStringToUTCEpoch(start));
    // setEnd(dateStringToUTCEpoch(end));
  }, []);

  useEffect(() => {
    if (start > 0 && end > 0) {
      //  dispatch(jobActions.fetchJobCycleList(start, end, page, CONSTANTS.PAGE_PRE_LIMIT));
    }
  }, [start, end, page]);

  // refresh timer
  /*
  useEffect(() => {
    const refreshIntervalId = setInterval(() => {
      const updated = currentDateTimeString();
      console.log("updated", updated);
      const e = dateStringToUTCEpoch(updated);

      // fetchData
      setEnd(e);
    }, UPDATE_PREIOD);
    return () => {
      // clean up
      clearInterval(refreshIntervalId);
    };
  });
  */

  const onItemClick = (index, row) => {
    //console.log("onItemClick", index, row);

    selectItem(row);
    setShowDetail(true);
  };

  const onChangeStart = (value) => {
    setStart(value);
  };

  const onChangeEnd = (value) => {
    setEnd(value);
  };

  const onPageChange = ({ selected }) => {
    console.log("selected page", selected);

    setPage(selected + 1);
  };

  const onSearch = () => {
    // if (start > 0 && end > 0)
      // dispatch(jobActions.fetchJobCycleList(start, end, page, CONSTANTS.PAGE_PRE_LIMIT));
  };

  return (
    <div title="Job Cycle Time">
      <div>
        {initialDate && (
          "datepicker"
        )}
        <div style={{ marginTop: "48px", marginLeft: "20px" }}>
          <Button variant="primary" text="Search" onClick={onSearch} />
        </div>
      </div>
      {/* <JCTable
        headers={JCTColumns}
        data={jobCycleList?.data?.data}
        page={page}
        onItemClick={onItemClick}
      /> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
      JCTPagination
      </div>
      {/* <Detail show={showDetail} setShow={setShowDetail} selected={selected} /> */}
    </div>
  );
};

export default Statics;
