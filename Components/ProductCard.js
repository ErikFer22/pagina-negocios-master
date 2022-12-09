import React, { useState } from 'react';
import { Container, Button, Row, Col, Toast, ToastContainer, Table, Modal, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
//json file
import Autos from "../autos.json";

const ProductCard = () => {
    const location = useLocation();

    const auto=Autos.autos.find(carro => carro.id === location.state.autoID);

    const click = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        modalClose();
    };
    

    const [position, setPosition] = useState('bottom-center');

    const [showToastC, setShowToastC] = useState(false);
    const toastCloseC = () => setShowToastC(false);
    const toastShowC = () => setShowToastC(true);

    const [showToastF, setShowToastF] = useState(false);
    const toastCloseF = () => setShowToastF(false);
    const toastShowF = () => setShowToastF(true);

    const [show, setShow] = useState(false);
    const modalClose = () => setShow(false);
    const modalShow = () => setShow(true);


    return (

        <Container>
            <br /> <br /> <br /> <br />
            <br /> <br /> <br />
            <h1 class="text-center">AUTOS BENNETT</h1>
            <h1 class="text-center">Producto</h1>
            <Row style={{ textAlign: "left" }}>
            <div style={{ textAlign: "center" }}>
                <center><Button className='buttonSeeProducts' onClick={toastShowC}>Añadir al carrito</Button></center>
                <br></br>
                <img alt="Favoritos" title="Favoritos" src="/react-example/Images/Fav.png" width={45} style={{ paddingLeft: "15px" }} onClick={toastShowF}></img>
            </div>
            <br />
            <br />
                
                <br /> <br />  <br /> <br />
                <img alt="ProductCard" title="ProductCar" src={auto.imagen} width={600}></img>
                
                <Col md="5" >
                    <Row></Row>
                        <h2>{auto.modelo}</h2>
                        <h5 style={{ color: "#5664DE" }}>$ {auto.precio} MXN</h5>
                        <h5 style={{ textAlign: "justify" }}>{auto.descripcion}</h5>
                        <h4 style={{ textAlign: "center" }}>Especificaciones</h4>
                        <Row>
                            <Col>
                                <h5> Categoría: {auto.categoria}</h5>
                                <h5>   Año: {auto.year} </h5>
                                <h5>  Longitud: {auto.longitud}</h5>
                                <h5>   Altura: {auto.altura}</h5>
                                <h5>  Anchura: {auto.anchura}</h5>
                            </Col>
                            <Col md="5">
                                <h5> Potencia: {auto.potencia}</h5>
                                <h5> Transmisión: {auto.transmision}</h5>
                                <h5> Marca: {auto.marca}</h5>
                                <h5> Color: {auto.colores}</h5>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <div>
                <h4>Reseñas</h4>
                <Table style={{ backgroundColor: "white" }}>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Andrea Leon</td>
                            <td>Me gustó mucho la atencion de los trabajadores, todos muy atentos, tenian los autos muy limpios si regresaria por otro automovil.
                            </td>
                            <img src="/react-example/Images/estrella 1.jpg" width="150" height="50"></img>
                        </tr>
                    </tbody>
                </Table>

                <Button className='buttonSeeProducts' onClick={modalShow} >Agregar reseña</Button>
                
            </div>

            <br />
            <br />
            
            <ToastContainer className="p-3" position={position}>
            
                <Toast show={showToastC} onClose={toastCloseC}>
                    <Toast.Header>
                        <strong className="me-auto">Añadir al carrito</strong>
                    </Toast.Header>
                    <Toast.Body>Se añadió al carrito.</Toast.Body>
                </Toast>
            </ToastContainer>

            <ToastContainer className="p-3" position={position}>
                <Toast show={showToastF} onClose={toastCloseF}>
                    <Toast.Header>
                        <strong className="me-auto">Añadir a mi lista de deseos</strong>
                    </Toast.Header>
                    <Toast.Body>Se añadió a tu lista de deseos.</Toast.Body>
                </Toast>
                
            </ToastContainer>
            

            <Modal show={show} onHide={modalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingresa tu comentario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Usuario: Andrea</h5>
                    <textarea style={{outline: "#DFEFEF Solid"}}
                                required
                                name="mensaje"
                                type="text"
                                maxLength="150"
                                minLength={15}
                                class="text-area-border" rows="5" cols="60"
                                placeholder="Escribe tu comentario aquí...">
                            </textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={modalClose} >
                        Cancelar
                    </Button>
                    <Button variant="outline-primary" onClick={click}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>


        </Container>
    );
}

export default ProductCard;
