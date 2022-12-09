import React, { useState } from 'react';
import { Button, Modal, Table, Col, Row } from 'react-bootstrap';

export default function POtable() {
    const [showAlert, setShowAlert] = useState(false);
    const alertClose = () => setShowAlert(false);
    const alertShow = () => setShowAlert(true);

    const [Pedido1, setPedido1] = useState({
        codigo: "AA2",
        fecha: "2021/01/07",
        precio: 125000,
        metodo: "Electronico",
        estatus: "Entregado",
        factura: "Si"
    })

    const [Pedido2, setPedido2] = useState({
        codigo: "AA1",
        fecha: "2020/05/08",
        precio: 205000,
        metodo: "Efectivo",
        estatus: "Entregado",
        factura: "Sí"
    })

    const [Pedido3, setPedido3] = useState({
        codigo: "AA3",
        fecha: "2019/05/08",
        precio: 245000,
        metodo: "Efectivo",
        estatus: "Entregado",
        factura: "Sí"
    })
    const [Pedido4, setPedido4] = useState({
        codigo: "AA4",
        fecha: "2018/05/08",
        precio: 188000,
        metodo: "Electronico",
        estatus: "Entregado",
        factura: "Sí"
    })

    const VerDetalles = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        alertShow();
    }

    return (
        <>
            <Table striped bordered hover variant="ligth" 
                style={{
                    background: "white",
                }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Referencia de factura</th>
                        <th>Fecha</th>
                        <th>Precio (MXN)</th>
                        <th>Método de Pago</th>
                        <th>Estatus</th>
                        <th>Factura</th>
                    </tr>
                </thead>
                <tbody style={{ justifyContent: "center" }}>
                    <tr>
                        <td>1</td>
                        <td>{Pedido1.codigo}</td>
                        <td>{Pedido1.fecha}</td>
                        <td>{Pedido1.precio}</td>
                        <td>{Pedido1.metodo}</td>

                        <td>
                            <div style={{
                                background: "#14A44D",
                                borderRadius: 5 + "px",
                                color: "white"
                            }}>{Pedido1.estatus}
                            </div>
                        </td>
                        <td><Button onClick={VerDetalles} variant="link" style={{ color: "blue" }}>Ver</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{Pedido2.codigo}</td>
                        <td>{Pedido2.fecha}</td>
                        <td>{Pedido2.precio}</td>
                        <td>{Pedido2.metodo}</td>

                        <td>
                            <div style={{
                                background: "#14A44D",
                                borderRadius: 5 + "px",
                                color: "white"
                            }}>{Pedido2.estatus}
                            </div>
                        </td>
                        <td><Button onClick={VerDetalles} variant="link" style={{ color: "blue" }}>Ver</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{Pedido3.codigo}</td>
                        <td>{Pedido3.fecha}</td>
                        <td>{Pedido3.precio}</td>
                        <td>{Pedido3.metodo}</td>

                        <td>
                            <div style={{
                                background: "#14A44D",
                                borderRadius: 5 + "px",
                                color: "white"
                            }}>{Pedido3.estatus}
                            </div>
                        </td>
                        <td><Button onClick={VerDetalles} variant="link" style={{ color: "blue" }}>Ver</Button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>{Pedido4.codigo}</td>
                        <td>{Pedido4.fecha}</td>
                        <td>{Pedido4.precio}</td>
                        <td>{Pedido4.metodo}</td>

                        <td>
                            <div style={{
                                background: "#14A44D",
                                borderRadius: 5 + "px",
                                color: "white"
                            }}>{Pedido4.estatus}
                            </div>
                        </td>
                        <td><Button onClick={VerDetalles} variant="link" style={{ color: "blue" }}>Ver</Button></td>
                    </tr>
                </tbody>
            </Table>
            <Modal size="lg" show={showAlert} onHide={alertClose}>
                <Modal.Header closeButton style={{
                    background: "#white"
                }} >
                    <Modal.Title>Factura num:  {Pedido1.codigo}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: 'white' }}>
                    <div style={{
                        background: "white",
                        color: "white",
                        padding: "12px",
                    }}>
                        <h5><b>Referencia de factura {Pedido1.codigo} - {Pedido1.fecha}</b></h5>
                    </div>

                    <br></br>
                    <h5> <b>Detalles </b></h5>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Tipo de entrega</th>
                                    <th>Tipo de pago</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Personal</td>
                                    <td>Efectivo</td>
                                </tr>
                            </tbody>
                        </Table>

                    <br></br>
                    <div style={{
                        background: "white",
                        color: "white",
                        padding: "12px",
                    }}>
                        <h5> <b>Equipamiento </b></h5>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Modelo</th>
                                    <th>Version</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ibiza 2012</td>
                                    <td>SportCoupe</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <br></br>

                    <Row>
                        <Col>
                            <div style={{
                                background: "white",
                                color: "white",
                                padding: "12px",
                            }}>
                                <h5> <b>Dirección de entrega y facturación</b></h5>
                                <h5>Talavera 232</h5>
                                <h5>Rncho san miguel</h5>
                                <h5>Aguascalientes</h5>
                                <h5>México</h5>
                            </div>
                        </Col>

                    </Row>

                    <br></br>
                    <div style={{
                        background: "white",
                        color: "white",
                        padding: "12px",
                    }}>
                        <h5> <b>Producto</b></h5>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Tipo</th>
                                    <th>Precio Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ibiza</td>
                                    <td>Seminuevo</td>
                                    <td>{Pedido1.precio}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}