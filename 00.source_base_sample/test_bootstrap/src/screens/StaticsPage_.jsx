import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import { ResponsiveLine } from '@nivo/line';

import DataTableComponent from '../components/DataTableComponent';
// import HistoryTitle from './HistoryTitle';
// import CriteriaComponentLaneDate from './CriteriaComponentLaneDate';
import { dateTimeToFomatting, diffDate, Logger } from '../utils';

const Log = Logger.create('StaticsPage');
const StaticsPage_ = ({
  listLane,
  match,
}) => {
  // Consts
  const keyField = 'visitIndex';
  const columns = [{
    name: 'Index',
    selector: 'visitIndex',
  }, {
    name: 'Visit No',
    selector: 'visitNo',
  }, {
    name: 'License No',
    selector: 'lpNo',
  }, {
    name: 'Driver',
    selector: 'driver',
  }, {
    name: 'R.Rate',
    selector: 'lpNoRecogRate',
  }, {
    name: 'In at',
    selector: 'inAt',
    format: (row) => `${dateTimeToFomatting(row.inAt)}`,
  }, {
    name: 'Out at',
    selector: 'outAt',
    format: (row) => `${dateTimeToFomatting(row.outAt)}`,
  }, {
    name: 'Elapsed Time',
    selector: 'elapsedTime',
    format: (row) => {
      return row.outAt && row.inAt
        ? `${(diffDate(row.outAt, row.inAt) / (60 * 1000)).toFixed(0)} min`
        : '';
    },
  }];

  // States
  const [rawData, setRawData] = useState([]);
  const [chartData, setChartData] = useState([]);

  // History
  const history = useHistory();
/* 
  // Effects
  useEffect(() => {
    Log.effect('rawData');

    const arr = listLane.map((lane) => {
      return {
        id: lane.laneId,
        data: rawData
          .filter((historyItem) => lane.laneIndex === historyItem.laneIndex)
          .flatMap((historyItem) => {
            if (historyItem.outAt) {
              return [
                {
                  x: dateTimeToFomatting(historyItem.inAt),
                  y: 0,
                  visitIndex: historyItem.visitIndex,
                  laneIndex: historyItem.laneIndex,
                }, {
                  x: dateTimeToFomatting(historyItem.inAt),
                  y: (diffDate(historyItem.outAt, historyItem.inAt) / (60 * 1000)).toFixed(0),
                  visitIndex: historyItem.visitIndex,
                  laneIndex: historyItem.laneIndex,
                }, {
                  x: dateTimeToFomatting(historyItem.outAt),
                  y: (diffDate(historyItem.outAt, historyItem.inAt) / (60 * 1000)).toFixed(0),
                  visitIndex: historyItem.visitIndex,
                  laneIndex: historyItem.laneIndex,
                }, {
                  x: dateTimeToFomatting(historyItem.outAt),
                  y: 0,
                  visitIndex: historyItem.visitIndex,
                  laneIndex: historyItem.laneIndex,
                },
              ];
            }
            return [
              {
                x: dateTimeToFomatting(historyItem.inAt),
                y: 0,
                visitIndex: historyItem.visitIndex,
                laneIndex: historyItem.laneIndex,
              },
            ];
          }),
      };
    });

    setChartData(arr);
  // eslint-disable-next-line
  }, [rawData]);
 */
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

  return (
    <>
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
          <div className="my-2 mx-2">
            <DataTableComponent
              keyField={keyField}
              data={rawData}
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

export default StaticsPage_;
