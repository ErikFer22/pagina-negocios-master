import React, { useState } from 'react';
import { Container, Row, Form, Button, Dropdown, DropdownButton, Col } from 'react-bootstrap';
import "../css-components/style3.css";
import { useNavigate } from 'react-router-dom';



//json file
import Autos from "../autos.json";

const Catalog = () => {
    const navigate = useNavigate();

    const [autosOriginales, setAutosOriginales] = useState(Autos.autos);

    const [autosTodos, setAutosTodos] = useState(Autos.autos);
    const [camionetas, setCamionetas] = useState([Autos.autos[6]]);

    const [automoviles, setAutomoviles] = useState([Autos.autos[0], Autos.autos[1], Autos.autos[2], Autos.autos[3], Autos.autos[4], Autos.autos[5], Autos.autos[7], Autos.autos[8], Autos.autos[9]]);

    const [menorMayorCar, setMenorMayorCar] = useState([Autos.autos[4], Autos.autos[8], Autos.autos[3], Autos.autos[7], Autos.autos[9], Autos.autos[0], Autos.autos[5], Autos.autos[2], Autos.autos[1], Autos.autos[6]]);

    const [mayorMenorCar, setMayorMenorCar] = useState([Autos.autos[6], Autos.autos[1], Autos.autos[2], Autos.autos[5], Autos.autos[0], Autos.autos[9], Autos.autos[7], Autos.autos[3], Autos.autos[8], Autos.autos[4]]);

    const selectMenorMayor = () => {
        buscarPalabra.palabra="";
        setAutosOriginales(menorMayorCar);
    }

    const selectMayorMenor = () => {
        buscarPalabra.palabra="";
        setAutosOriginales(mayorMenorCar);
    }

    const selectTodos = () => {
        buscarPalabra.palabra="";
        setAutosOriginales(autosTodos);
    }

    const selectCamionetas = () => {
        buscarPalabra.palabra="";
        setAutosOriginales(camionetas);
    }

    const selectAutomoviles = () => {
        buscarPalabra.palabra="";
        setAutosOriginales(automoviles);
    }
    //buscar
    const [buscarPalabra, SetBuscarPalabra] = useState({ palabra: '' });

    const buscar = () => {
        console.log("buscando:" + buscarPalabra.palabra);
        const arrCopy = Array.from(autosTodos);
        const objWithIdIndex = arrCopy.findIndex((obj) => obj.modelo === buscarPalabra.palabra);
        console.log("Posicion:" + objWithIdIndex);
        if (objWithIdIndex == -1) {
            setAutosOriginales([]);
        } else {
            console.log(Autos.autos[objWithIdIndex]);
            setAutosOriginales([Autos.autos[objWithIdIndex]]);
        }
    }
    const onChangePalabra = (e) => {
        e.persist();
        SetBuscarPalabra({ ...buscarPalabra, [e.target.name]: e.target.value });
    };

    const productosVacio = (autosOriginales.length > 0)

    return (

        <Container fluid>

            <br />
            <br></br>
            <br></br>
            <br></br>
            <h1>AUTOS BENNETT</h1>
            <h1 class="text-center">Catálogo de productos</h1>
            <Row>
                <Row style={{ textAlign: "right" }}  >
                    <Col>
                        <DropdownButton style={{ maxWidth: 200 + "px" }} id="dropdown-item-button" title="Filtrar" variant="outline-primary">
                            <Dropdown.Item as="button" onClick={selectTodos}>Todos</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={selectAutomoviles}>Automóvil</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={selectCamionetas}>Camioneta</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={selectMenorMayor} >Menor precio</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={selectMayorMenor}>Mayor precio </Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col>
                        <Button variant="dark" onClick={buscar} style={{ marginLeft: "0px", maxWidth: 80 + "px" }}>Buscar</Button>
                    </Col>
                    <Col>
                        <Form.Group style={{ maxWidth: 200 + "px" }} controlId="buscar" >
                            <Form.Control
                                type="text"
                                value={buscarPalabra.palabra}
                                onChange={onChangePalabra}
                                placeholder="Buscar producto..."
                                name="palabra"
                            />
                        </Form.Group>
                    </Col>

                    <Row style={{ textAlign: "right" }}>
                        <br></br>
                    </Row>
                </Row>
            </Row>


            <div class="row row-cols-1 row-cols-md-4 g-4">

                {
                    productosVacio ? autosOriginales.map(auto => {
                        return (
                            <div class="col">
                                <div class="card border-info mb-3 card text-center" >
                                    <img
                                        width="50"
                                        height="100%"
                                        src={auto.imagen}
                                        title={auto.modelo}
                                        class="card-img-top"
                                        alt={auto.modelo + ". " + auto.year} />
                                    <div class="card-body">
                                        <h3 class="card-title">{auto.modelo}</h3>
                                        <h6 class="card-text">{"$" + auto.precio + " mxn"}</h6>
                                        <br />
                                        <Button className='buttonSeeProducts' 
                                        onClick={()=>{
                                            //Escuchando el id
                                            navigate('/react-example/ProductCard',{state:{autoID:auto.id}});
                                        }}>Ver detalles</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                        :
                        <h2>
                            <br></br>
                            Porfavor escribir correctamente el nombre del producto.</h2>
                }
            </div>
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

export default Catalog;