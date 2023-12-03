import React from "react";
import { Spinner } from "react-bootstrap";

function Loading({ loading, message ="Loading..." }) {
    console.log("loading",loading);
    if (!loading) return null;

    return (
        <div className="loading">
            <Spinner animation="border" variant="primary" role="status">
                <span className="sr-only">{message}</span>
            </Spinner>
            <h4>{message}</h4>
        </div>
    );

    // return (
    //     <Row className="align-items-center vh-100" show={show}>
    //       <Col />
    //       <Col className="text-center">
    //         <Spinner animation="border" className="m-4" />
    //         <h4>Loading pages</h4>
    //       </Col>
    //       <Col />
    //     </Row>
    // );

}

export default Loading;
