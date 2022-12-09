import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import POtable from './POtable';

//style
import "../css-components/style2.css";

export default function Purchase() {

    return (
        <Container style={{ justifyContent: 'center' }}>
            <br></br>
            <br></br>
            <br></br>
            <Row style={{ justifyContent: 'center' }} >
                <Col md="auto" lg={10} >
                    <br></br>
                    <br></br>
                    <div style={{ textAlign: 'center' }}>
                        <h5><b>Ordenes de compra.</b></h5>
                    </div>
                    <POtable></POtable>
                </Col>
            </Row>
        </Container >
    );
}