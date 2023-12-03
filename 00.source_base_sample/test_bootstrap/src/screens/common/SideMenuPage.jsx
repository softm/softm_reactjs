// React
import React from 'react';
// Bootstrap
import {
  Button,
} from 'react-bootstrap';

// Utils
import { popupWindow } from '../../utils';
import AppConfig from '../../configs/app-config';
import CommonEnums from '../../utils/common-enums';

const SideMenuPage = ({
  listLaneWithErrInfo = [],
}) => {
  // Handlers
  const onClickLane = (item) => {
    popupWindow(`${AppConfig.laneDetailUrl}/${item.laneId}?laneIndex=${item.laneIndex}`, item.laneId, 1100, 910);
    // popupWindow(`/ocrDetail/${item.laneId}?laneIndex=${item.laneIndex}`, item.laneId);
  };

  // Functions
  const getVariant = (gateLane) => {
    if (gateLane?.errInfos?.length > 0) {
      return 'danger';
    }

    if ((gateLane.workingStatus && gateLane.workingStatus !== 'Idle')
       || (gateLane.kioskStatus && gateLane.kioskStatus !== 'Welcome')) {
      return 'info';
    }

    if (gateLane?.laneStatus === CommonEnums.LANE_STATUS.C) {
      return 'outline-light';
    }

    return 'outline-primary';
  };

  // Inner Component
  const GateTypeComponenet = ({ children, isFirst, label }) => {
    const className = `${!isFirst ? 'mt-3' : ''} w-100 font-weight-light border rounded-lg border-secondary p-2`;
    return (
      <div
        className={className}
      >
        <span>
          <h6>{label}</h6>
        </span>
        {children}
      </div>
    );
  };

  const LaneComponent = (category) => listLaneWithErrInfo.filter((item) => {
    if (item.category === category) {
      return true;
    }
    return false;
  }).map((item) => {
    const style = {};

    if (item?.laneStatus === CommonEnums.LANE_STATUS.C) {
      style.backgroundColor = 'var(--dim-gray)';
      style.color = 'var(--lighter-gray)';
    }

    return (
      <div key={item.laneId}>
        <Button
          className={
            item?.errInfos?.length
              ? 'mt-1 w-100 blink-me'
              : 'mt-1 w-100 font-weight-bold'
          }
          style={style}
          size="sm"
          variant={
            getVariant(item) || 'outline-primary'
          }
          onClick={() => onClickLane(item)}
        >
          {item.laneId}
        </Button>
      </div>
    );
  });

  return (
    <div
      id="SideMenuPage"
      className="bg-light flex-grow-1 d-none d-sm-block"
      style={{
        minWidth: '10rem',
        maxWidth: '10rem',
        position: 'sticky',
        top: '0',
        overflow: 'auto',
        paddingTop: '0.5rem',
        paddingRight: '0.5rem',
        paddingLeft: '0.5rem',
      }}
    >
      <GateTypeComponenet label="In Gate" isFirst>
        {LaneComponent('InGate')}
      </GateTypeComponenet>
      <GateTypeComponenet label="Out Gate">
        {LaneComponent('OutGate')}
      </GateTypeComponenet>
      <GateTypeComponenet label="ECO">
        {LaneComponent('ECO')}
      </GateTypeComponenet>
    </div>
  );
};


export default SideMenuPage;
