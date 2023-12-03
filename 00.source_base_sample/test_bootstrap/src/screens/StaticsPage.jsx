import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector,  } from 'react-redux';
import { ResponsiveLine } from '@nivo/line';

import DataTableComponent from '../components/DataTableComponent';
import SimpleModal from '../components/SimpleModal';
// import HistoryTitle from './HistoryTitle';
// import CriteriaComponentLaneDate from './CriteriaComponentLaneDate';
import { dateTimeToFomatting, diffDate, Logger } from '../utils';

import { Job } from '../stores/job-reducer';
import { setToken } from '../axios/index';
import initCommon, {dispatch, loadingHide, loadingShow} from '../utils/common-util';
import CONSTANTS from '../utils/constants';

const Log = Logger.create('StaticsPage');
const StaticsPage = ({
  listLane=[],
  match,
}) => {
  initCommon({
    dispatch : useDispatch()
  });

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [page, setPage] = useState(1);

  // Consts
  const keyField = 'jobKey';
  const columns = [{
    name: 'startTime',
    selector: 'startTime',
  }, {
    name: 'startTime',
    selector: 'startTime',
  }, {
    name: 'contNo',
    selector: 'contNo',
  }];

  // States
  const [rawData, setRawData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const jobCycleList = useSelector((state) => state.job.jobCycleList);  
  const jobCycleList2 = {
    data:[
    {
      "duration":3040,
      "total":{
         "workingTime":"54.47"
      },
      "qcStatus":{
         "workingTime":"3.00"
      },
      "ycStatus":{
         "workingTime":"1.07"
      },
      "itvStatus":{
         "waitingTime":"34.26",
         "workingTime":"16.14"
      },
      "jobKey":"T1011VMRT3000016",
      "startTime":"1599156171000",
      "endTime":"1599159211000",
      "contNo":"VMRT3000016",
      "jobType":"DS",
      "timeChart":[
         {
            "duration":368,
            "color":"1",
            "seq":1,
            "desc":"ITV Working Time"
         },
         {
            "duration":787,
            "color":"2",
            "seq":2,
            "desc":"ITV Waiting Time"
         },
         {
            "duration":180,
            "color":"3",
            "seq":3,
            "desc":"QC Working Time"
         },
         {
            "duration":665,
            "color":"1",
            "seq":4,
            "desc":"ITV Working Time"
         },
         {
            "duration":424,
            "color":"2",
            "seq":5,
            "desc":"ITV Waiting Time"
         },
         {
            "duration":549,
            "color":"4",
            "seq":6,
            "desc":"YC Working Time"
         },
         {
            "duration":67,
            "color":"1",
            "seq":7,
            "desc":"ITV Working Time"
         }
      ]
   },
   {
      "duration":2027,
      "total":{
         "workingTime":"44.54"
      },
      "qcStatus":{
         "workingTime":"4.02"
      },
      "ycStatus":{
         "workingTime":"7.05"
      },
      "itvStatus":{
         "waitingTime":"21.33",
         "workingTime":"12.14"
      },
      "jobKey":"250752021",
      "startTime":"1613975011000",
      "endTime":"1613977038000",
      "contNo":"VMRT3000255",
      "jobType":"DS",
      "timeChart":[
         {
            "duration":123,
            "color":"1",
            "seq":1,
            "desc":"ITV Working Time"
         },
         {
            "duration":195,
            "color":"2",
            "seq":2,
            "desc":"ITV Waiting Time"
         },
         {
            "duration":242,
            "color":"3",
            "seq":3,
            "desc":"QC Working Time"
         },
         {
            "duration":426,
            "color":"1",
            "seq":4,
            "desc":"ITV Working Time"
         },
         {
            "duration":547,
            "color":"2",
            "seq":5,
            "desc":"ITV Waiting Time"
         },
         {
            "duration":69,
            "color":"4",
            "seq":6,
            "desc":"YC Working Time"
         },
         {
            "duration":425,
            "color":"1",
            "seq":7,
            "desc":"ITV Working Time"
         }
      ]
   },
  ]
};  

  // History
  const history = useHistory();
/*  */

  // Effects
  useEffect(() => {
    // http://172.21.4.63:20200/jobcycle/?start=1598061377&end=1616464577&page=1&limit=20
    setStart(1598061377);
    setEnd(1616464577);
    setPage(1);
  }, []);

  useEffect(() => {
    if (start > 0 && end > 0)
      dispatch(Job.Type.FETCH_JOB_CYCLE_LIST,
        start, end, page, CONSTANTS.PAGE_PRE_LIMIT
      );
  }, [start, end, page]);

  useEffect(() => {
    Log.effect('rawData');
    // const arr = listLane.map((lane) => {
    //   return {
    //     id: lane.laneId,
    //     data: rawData
    //       .filter((historyItem) => lane.laneIndex === historyItem.laneIndex)
    //       .flatMap((historyItem) => {
    //         if (historyItem.outAt) {
    //           return [
    //             {
    //               x: dateTimeToFomatting(historyItem.inAt),
    //               y: 0,
    //               visitIndex: historyItem.visitIndex,
    //               laneIndex: historyItem.laneIndex,
    //             }, {
    //               x: dateTimeToFomatting(historyItem.inAt),
    //               y: (diffDate(historyItem.outAt, historyItem.inAt) / (60 * 1000)).toFixed(0),
    //               visitIndex: historyItem.visitIndex,
    //               laneIndex: historyItem.laneIndex,
    //             }, {
    //               x: dateTimeToFomatting(historyItem.outAt),
    //               y: (diffDate(historyItem.outAt, historyItem.inAt) / (60 * 1000)).toFixed(0),
    //               visitIndex: historyItem.visitIndex,
    //               laneIndex: historyItem.laneIndex,
    //             }, {
    //               x: dateTimeToFomatting(historyItem.outAt),
    //               y: 0,
    //               visitIndex: historyItem.visitIndex,
    //               laneIndex: historyItem.laneIndex,
    //             },
    //           ];
    //         }
    //         return [
    //           {
    //             x: dateTimeToFomatting(historyItem.inAt),
    //             y: 0,
    //             visitIndex: historyItem.visitIndex,
    //             laneIndex: historyItem.laneIndex,
    //           },
    //         ];
    //       }),
    //   };
    // });

    // setChartData(arr);
  // eslint-disable-next-line
  }, [rawData]);

  // Functions
  const onClickChart = (item) => {
    if (!item || !item.data) {
      return;
    }

    history.push(`/history/visit-log/${item.data.laneIndex}/${item.data.visitIndex}`);
  };

  const onClickRow = (row) => {
    if (!row.laneIndex || !row.visitIndex) {
      return;
    }

    history.push(`/history/visit-log/${row.laneIndex}/${row.visitIndex}`);
  };

  const [confirmModal, setConfirmModal] = useState({
    show: false,
    message: "확인하시겠습니까?",
    callback: function () {
        onHideConfirmModal();
    },
  });

  const onHideConfirmModal = () => {
    setConfirmModal({ ...confirmModal, show: false });
  };

  const onShowConfirmModal = () => {
    setConfirmModal({ ...confirmModal, show: true });
    // 
  };

  // setConfirmModal({
  //   ...confirmModal,
  //   show: true
  // });

  // setConfirmModal({ show: true });

    // callback : ()=>{
    //   // alert("test");
    //   onHideConfirmModal();
    // }

  return (
    <>
      <SimpleModal
        show={confirmModal.show}
        onHide={onHideConfirmModal}
        onCancel={onHideConfirmModal}
        title="Confirm"
        onOk={confirmModal.callback}
        message={confirmModal.message}
      />
      <Button onClick={onShowConfirmModal}>Modal</Button>
      <Row className="align-items-center h-100">
        <Col className="p-0">
          {/* <HistoryTitle>Visit Count</HistoryTitle> */}
          <div className="my-2 mx-2 p-0">
            {/* <CriteriaComponentLaneDate
              listLane={listLane}
              selectedLaneIndex={match.params.laneIndex}
              setRawData={setRawData}
            /> */}
          </div>
          <textarea value={jobCycleList.data?JSON.stringify(jobCycleList.data):""} rows="2" cols="200"/>
          <div className="my-2 mx-2">
            <DataTableComponent
              keyField={keyField}
              data={jobCycleList.data}
              columns={columns}
              onRowClicked={onClickRow}
            />
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col style={{ height: '300px', width: '300px' }}>
          <ResponsiveLine
            onClick={onClickChart}
            data={chartData}
            margin={{
              top: 50, right: 110, bottom: 50, left: 60,
            }}
            xScale={{
              type: 'time',
              format: '%Y-%m-%d %H:%M:%S',
              useUTC: false,
              precision: 'minute',
            }}
            xFormat="time:%H:%M"
            yScale={{
              type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false,
            }}
            // curve="step"
            axisBottom={{
              orient: 'bottom',
              format: '%Hh %M',
              legend: 'Gate in at',
              // legendOffset: -80,
              legendPosition: 'middle',
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Elapsed Minute',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            colors={{ scheme: 'nivo' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemBackground: 'rgba(0, 0, 0, .03)',
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </Col>
      </Row>
    </>
  );
};

export default StaticsPage;
