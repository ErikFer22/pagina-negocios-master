import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import MerchEdit from './MerchEdit';

export default function Producto() {

    const [show, setShow] = useState(false);
    const [registroEdit, setRegistroEdit] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [merchs, setMerch] = useState([
        {
            id: 1,
            modelo: "Ibiza",
            year: "2012",
            precio: "125000"
        },
        {
            id: 2,
            modelo: "Mazda 3",
            year: "2015",
            precio: "205000"
        },
        {
            id: 3,
            modelo: "Accord",
            year: "2013",
            precio: "205000"
        },
        {
            id: 4,
            modelo: "Sentra",
            year: "2012",
            precio: "105000"
        },
        {
            id: 5,
            modelo: "Saab 9-3",
            year: "2005",
            precio: "52000"
        },
        {
            id: 6,
            modelo: "Mx5",
            year: "2008",
            precio: "149000"
        },
        {
            id: 7,
            modelo: "Suburban",
            year: "2011",
            precio: "240000"
        },
        {
            id: 8,
            modelo: "Yaris",
            year: "2010",
            precio: "110000"
        },
        {
            id: 9,
            modelo: "Gol",
            year: "2012",
            precio: "95000"
        },
        {
            id: 10,
            modelo: "Swift",
            year: "2012",
            precio: "120000"
        }
    ]);

    function deleteTest(id) {
        setMerch(merchs.filter(merch => merch.id !== id))
    }

    function editTest(datos) {
        setMerch(merchs.map(merch => merch.id === datos.id ? datos : merch));
        handleClose();
    }

    function dataTransfer(datos) {
        handleShow();
        setRegistroEdit(datos);
    }


    return (
        <>
            <Container fluid>
                <caption align="center">Mercancía</caption>
                <Table striped bordered hover variant="ligth"
                    style={{
                        background: "#c0c0c0",
                        borderColor: "white"
                    }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Modelo</th>
                            <th>Año</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody style={{ justifyContent: "center" }}>
                        {
                            merchs.map((merch, i) => {
                                return <tr>
                                    <td>{merch.id}</td>
                                    <td>{merch.modelo}</td>
                                    <td>{merch.year}</td>
                                    <td>{merch.precio}</td>
                                    <td><button className="btn btn-danger" onClick={() => deleteTest(merch.id)}>Eliminar</button></td>
                                    <td><button className="btn btn-primary" onClick={() => dataTransfer(merch)}>Modificar</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
                <MerchEdit show={show} handleClose={handleClose} editTest={editTest} registroEdit={registroEdit} />
            </Container>
        </>
    );
}