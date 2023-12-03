import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styled from 'styled-components';
import AppConfig from '../../configs/app-config';

const FooterContainer = styled(Container)`
  padding: 0;
  background-color: var(--zodiac-dark-gray);
  color: #fff;
`;
const FooterRow = styled(Row)`
  height: 56px;
  padding: 0 10px;
`;

const FooterPage = ({
  account,
}) => {
  return (
    <FooterContainer
      fluid
      className="justify-content-center fixed-bottom"
      style={!account ? {
        textShadow: '1px 1px 0px black',
        backgroundColor: 'transparent',
      } : {}}
    >
      <FooterRow>
        <Col className="align-self-center">
          <h6><small>2020 Copyright ⓒ DP World. All rights reserved.</small></h6>
        </Col>
        <Col className="text-right align-self-center">
          <h6 title={
            `apiServer(${process.env.REACT_APP_API_SERVER}) zodiacServer(${process.env.REACT_APP_ZODIAC_SERVER}) fileServer(${process.env.REACT_APP_FILE_SERVER}) wsServer(${process.env.REACT_APP_WS_SERVER})`
            }
          >
            <small>
              {`${AppConfig.version} | AGS | ${process.env.NODE_ENV}`}
            </small>
          </h6>
        </Col>
      </FooterRow>
    </FooterContainer>
  );
};


export default FooterPage;
