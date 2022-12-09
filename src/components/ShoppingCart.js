import React, { useEffect, useState } from 'react';
import { Container, Card, Button, CardGroup, Row, Col, Table, InputGroup, Form, CloseButton } from 'react-bootstrap'; import "../css-components/style3.css";

import PayPal from "./PayPal";
//json file
import Autos from "../autos.json";
import Paypal from './PayPal';

function Carrito() {
    const [carros, setCarros] = useState([Autos.autos[0], Autos.autos[1], Autos.autos[2]]);
    const [total, settotal] = useState('');

    useEffect(() => {
        pago();
      });
    const pago = () => {
        let pay = (carros.reduce((acumulador, actual) => acumulador + actual.precio, 0));
        console.log(pay)
        settotal(pay);
    }

    function removeObjectWithId(arr, id) {
        // Making a copy with the Array from() method
        const arrCopy = Array.from(carros);
        const objWithIdIndex = arrCopy.findIndex((obj) => obj.id === id);
        arrCopy.splice(objWithIdIndex, 1);
        setCarros(arrCopy);
        return arrCopy;
    }

    return (
        <Container fluid>
            <br></br>
            <br></br>
            <br></br>
            
            <br />
            <Row>
                <center>
                <br></br>
                <h1>Carrito de compras</h1>
                <br></br>
                <Col md="auto" lg={8}>
                    {
                        carros.map(producto => {
                            return (
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td><img
                                                width="220 px"
                                                height="120 px"
                                                src={producto.imagen}
                                                title="Producto"
                                                alt="Producto" /></td>
                                            <td><b>{producto.modelo}
                                                <br />{producto.year}
                                                <br />${producto.precio} mxn
                                            </b></td>
                                            <td>
                                                <InputGroup className="mb-3">
                                                    <CloseButton variant='black'
                                                        onClick={() => {
                                                            console.log("HoLa" + producto.modelo);
                                                            let car = carros.find(carro => carro.modelo === producto.modelo);
                                                            console.log(car);
                                                            const newArr = removeObjectWithId(carros, producto.id);
                                                        }

                                                        }>
                                                    </CloseButton>
                                                </InputGroup>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            );
                        })
                    }
                <h1>Cantidad a pagar:<br></br>$ {total}.00 mxn</h1>
                    <br></br>
                    <PayPal total={total}></PayPal>
                </Col>
                </center>

            </Row>
            <br></br>
            <br></br>
            <Form.Group className="mb-3">
                            <Form.Label><h5>Mandanos un mensaje via email</h5></Form.Label>
                            <br></br>
                            <h6><a href="https://www.google.com/intl/es-419/gmail/about/"> AutosBennett@gmail.com</a></h6>
                            <img
                            width="5%"
                            height="5%"
                            alt='facebook'
                            title='facebook'
                            src="/react-example/Images/facebook.png">
                            </img>
                            <img
                            width="5%"
                            height="5%"
                            alt='instagram'
                            title='instagram'
                            src="/react-example/Images/instagram.png">
                            </img>
                            <br></br>
                            <br></br>
                            <h6>© Copyright 2022 | AutosBennett</h6>
                        </Form.Group>
        </Container>
        
    );
}
export default Carrito;

/*
botnes perrones mas y menos cantidad
<Button variant="outline-danger"><b>-</b></Button>
                                                    <Form.Control class="form-control-sm" style={{ maxWidth: 40 + "px" }}></Form.Control>
                                                    <Button variant="outline-success" ><b>+</b></Button>
*/