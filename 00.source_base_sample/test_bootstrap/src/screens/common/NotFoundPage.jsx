import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { EmojiFrown } from 'react-bootstrap-icons';

function NotFoundPage() {
  const message = 'Page Not Found';
  return (
    <Row className="align-items-center h-100">
      <Col />
      <Col className="text-center">
        <EmojiFrown size={72} className="m-3" />
        <h2>{ message }</h2>
      </Col>
      <Col />
    </Row>
  );
}

export default NotFoundPage;
