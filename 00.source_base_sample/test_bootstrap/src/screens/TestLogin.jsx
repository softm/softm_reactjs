import { Button, Col, Form, Row, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { getTitle, getContent } from '../apis/common-api';

function TestLogin({showLoading}) {

    const [authLogin, setAuthLogin] = useState({
        userId:"",
        password:""
    });
  
    const [testData, setData] = useState({
        id:"",
        title:"",
        content:""
    });

    const handleAuthLogin = () => {
    //ToastManager.top.error("test");
    //ToastManager.top.info("login");
        getAuthLogin();
    }

    const getAuthLogin = async (id) => {
        /* eslint-enable no-debugger */
        // setLoading(true);
        showLoading(true);
        const info = await Promise.all(
            [
                getTitle(id),
                getContent(id)
            ]
        );
        console.log(info);

        Promise.all(
            [
                getTitle(id),
                getContent(id)
            ]
        ).then(values => {
            console.log(values);
            let info = values;
            setData(
                { id: id, 
                    title: info[0]?.title,
                    content: info[1]?.content
                }
            );
            showLoading(false);
        });
    }
  
    // expected output: Array [3, 42, "foo"]
    return (
        <Container>

            <Row className="p-1">
                <Col className="p-2" sm={1}>Id</Col>
                <Col className="p-2 border">
                    <Form.Control
                        size="sm"
                        value={authLogin?.userId} 
                        onChange={(e) => setAuthLogin({ ...authLogin, userId: e.target.value })}
                        />
                </Col>
            </Row>
            <Row className="p-10">
                <Col className="p-2" sm={1}>Password</Col>
                <Col className="p-2 border">
                    <Form.Control
                        size="sm"
                        value={authLogin?.password} 
                        onChange={(e) => setAuthLogin({ ...authLogin, password: e.target.value })}
                        />
                </Col>
            </Row>

            <Row className="p-10">
                <Form.Control value={JSON.stringify(authLogin)} 
                    onChange={(e) => setAuthLogin({ ...authLogin, password: e.target.value })}     
                    readOnly={true} 
                    />
            </Row>      

            <Row className="p-10">
                <Button onClick={handleAuthLogin}>Login</Button>      
            </Row>

            {/* <ToastContainer limit={1} /> */}
            <Row className="p-10">
            </Row>
        </Container>
    );
}
export default TestLogin;
