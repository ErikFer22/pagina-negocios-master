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
                    <Modal.Title>Modificar Auto</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form>
                    <Form.Group className="mb-3" controlId="modelo">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control type="text" placeholder="Modelo" value={valores?.modelo} onChange={(e) => setValores({ ...valores, modelo: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Descrip">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" placeholder="Descripción" value={valores?.descripcion} onChange={(e) => setValores({ ...valores, descripcion: e.target.value })} />
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