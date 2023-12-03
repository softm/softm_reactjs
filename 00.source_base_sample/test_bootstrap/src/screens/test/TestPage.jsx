import React, { useState } from 'react';
import {
  Row,
  Button,
} from 'react-bootstrap';

import {
  UserLoginApi,
} from '../../apis';

import { ErrorHandler, Logger, ToastManager } from '../../utils';

const Log = Logger.create('TestPage');
function TestPage() {
  // States
  const [list, setList] = useState([]);
  const [assign, setAssign] = useState({});
  const [deassign, setDeassign] = useState({});

  // Handlers
  const handleClick1 = () => {
    UserLoginApi.findAllByEndAtIsNull().then((res) => {
      Log.debug(res);
      setList(res.data);
    }).catch((err) => {
      Log.error(err);
      ToastManager.top.error(ErrorHandler.errorToString(err));
    });
  };

  return (
    <div>
      <Row>
        <Button
          className="m-1"
          variant="primary"
          onClick={handleClick1}
        >
          Assignable List
        </Button>
      </Row>
      <Row>
        <p>{JSON.stringify(list)}</p>
      </Row>
      <Row>
      </Row>
      <Row>
      </Row>
      <Row>
      </Row>
    </div>
  );
}


export default TestPage;
