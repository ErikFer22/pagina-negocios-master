import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Row, Col, Modal, Form } from 'react-bootstrap';


function Example(props) {

    const [valores, setValores] = useState(props.registroEdit);

    useEffect(() => {
        setValores(props.registroEdit);
    }, [props.registroEdit]);


    console.log(props);

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar mercancía</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form>
                    <Form.Group className="mb-3" controlId="modelo">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control type="text" placeholder="Modelo" value={valores?.modelo} onChange={(e) => setValores({ ...valores, modelo: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="year">
                        <Form.Label>Año</Form.Label>
                        <Form.Control type="text" placeholder="Año" value={valores?.year} onChange={(e) => setValores({ ...valores, year: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Price">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="text" placeholder="Precio" value={valores?.precio} onChange={(e) => setValores({ ...valores, precio: e.target.value })} />
                    </Form.Group>
                </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => props.editTest(valores)}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example