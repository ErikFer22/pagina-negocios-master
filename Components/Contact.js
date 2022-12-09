import React, { useState } from 'react';
import { Container, Form, Button, Row, Col,Modal } from 'react-bootstrap';

//style
import "../css-components/style2.css";

const Contact = () => {
    const [Contacto, setContacto] = useState({
        mensaje: ''
    });

    const [showAlert, setShowAlert] = useState(false);
    const alertClose = () => setShowAlert(false);
    const alertShow = () => setShowAlert(true);

    const onChange = (e) => {
        e.persist();
        setContacto({ ...Contacto, [e.target.name]: e.target.value });
    };

    const sendMessage=(e)=>{
        if (e && e.preventDefault()) e.preventDefault();
        alertShow();
        Contacto.mensaje="";
    }
    return (
        <Container>
            <Row style={{ justifyContent: 'left' }} >
                <Col md={5}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>AUTOS BENNETT</h1>
                    <br></br>
                    
                    <h3>CONTACTA A UN ASESOR</h3>
                    <Form onSubmit={sendMessage} style={{ textAlign: "left" }}>
                        <br></br>
                        <Form.Label><h5>Escribe tu mensaje...</h5></Form.Label>
                        <br></br>
                        <Form.Group className="mb-3" controlId="mensaje">
                            <Form.Label><h5>Mensaje</h5></Form.Label>
                            <textarea
                                required
                                name="mensaje"
                                value={Contacto.mensaje}
                                onChange={onChange}
                                type="text"
                                maxLength="250"
                                minLength={15}
                                class="text-area-border" rows="5" cols="55"
                                placeholder="">
                            </textarea>
                        </Form.Group>
                        <Button className='buttonSeeProducts' type='submit'><h6>Enviar</h6></Button>
                        <br></br> <br></br>
                        <Form.Label><h5>¿Te podemos ayudar?</h5></Form.Label>
                        <Form.Label><h5>Ponte en contacto con nosotros y con gusto un asesor te atenderá.</h5></Form.Label>
                        <br></br>
                        <img src="/react-example/Images/hora.jpg"></img>
                    </Form>
                </Col>
                <Col>
                        <br></br>
                        <img
                        width="100%"
                        height="100%"
                        alt='GMAIL'
                        title='GMAIL'
                        src="/react-example/Images/logito.jpeg">
                        </img>
                        </Col>
            </Row>
            <br></br>
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

            <Modal show={showAlert} onHide={alertClose}>
        <Modal.Header style={{
            background:"#fffff"
          }} closeButton>
          <Modal.Title>Mensaje enviado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Agradecemos todos tus comentarios a AutosBennett.Responderemos lo mas pronto posible.</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={alertClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

        </Container>
    );
}

export default Contact;