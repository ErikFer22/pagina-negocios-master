import React from 'react';
import { Button, Container } from 'react-bootstrap';
import "../css-components/style3.css";
import { useNavigate } from 'react-router-dom';

//json file
import Autos from "../autos.json";

const HomeProducts = () => {
    const navigate = useNavigate();    
    return (
        <Container fluid>
            <br/>
            <h1 class="text-center">INVENTARIO</h1>
            <br></br>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    Autos.autos.map(auto => {
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
                                            //console.log(auto.id);
                                            navigate('/react-example/ProductCard',{state:{autoID:auto.id}});
                                        }}>Ver detalles</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <br></br>
        </Container>
    );

}

export default HomeProducts;