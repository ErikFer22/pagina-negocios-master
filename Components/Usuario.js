import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import UserEdit from './UserEdit'

export default function Usuario() {

    const [show, setShow] = useState(false);
    const [registroEdit, setRegistroEdit] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [users, setUser] = useState([

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
       
    );
}