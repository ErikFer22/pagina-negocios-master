import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import UserEdit from './UserEdit'

export default function Usuario() {

    const [show, setShow] = useState(false);
    const [registroEdit, setRegistroEdit] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [users, setUser] = useState([
        {
            id: 1,
            nombre: "Administrador",
            apellidos: "Admin",
            email: "admin@gmail.com",
            contraseña: "12345678",
            fechaNacimiento: "07/09/2001"
        }
        

    ]);

    function deleteTest(id) {
        setUser(users.filter(user => user.id !== id))
    }

    function editTest(datos) {
        setUser(users.map(user => user.id === datos.id ? datos : user));
        handleClose();
    }

    function dataTransfer(datos) {
        handleShow();
        setRegistroEdit(datos);
    }


    return (
        <>
            <Container fluid>
                <caption align="center">Usuarios</caption>
                <Table responsive="md" striped bordered hover variant="ligth"
                    style={{
                        background: "white",
                        borderColor: "white"
                    }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Correo electrónico</th>
                            <th>Contraseña</th>
                            <th>Fecha de Nacimiento</th>
                        </tr>
                    </thead>
                    <tbody style={{ justifyContent: "center" }}>
                        {
                            users.map((user, i) => {
                                return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.nombre}</td>
                                    <td>{user.apellidos}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contraseña}</td>
                                    <td>{user.fechaNacimiento}</td>
                                    <td><button className="btn btn-danger" onClick={() => deleteTest(user.id)}>Eliminar</button></td>
                                    <td><button className="btn btn-primary" onClick={() => dataTransfer(user)}>Modificar</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
                <UserEdit show={show} handleClose={handleClose} editTest={editTest} registroEdit={registroEdit} />
            </Container>
        </>
    );
}