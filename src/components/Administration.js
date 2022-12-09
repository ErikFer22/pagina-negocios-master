import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import Usuario from './Usuario';
import Product from './Product';
//style

export default function Administration() {
    return (
        <Container>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <h4 align="center">Usuarios</h4>
           <Usuario></Usuario>

           <br></br>
           <br></br>
           <h4 align="center">Inventario</h4>
           <Product></Product>
        </Container>
    );
}