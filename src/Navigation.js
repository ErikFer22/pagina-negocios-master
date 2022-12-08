import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'

//'linear-gradient(#AADEE0, #FFFFFF)' #0044FF"

const Navigation = () => {
    return (
        <div clas="container-fluid">
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="light"
                style={{ background: 'linear-gradient(#C0C0C0, #FFFFFF)' }}>
                <Container >
                    <center>
                    <Navbar.Brand style={{ color: "#006655", fontSize: 18 + "pt" }} as={Link} to="/react-example/Home" title="Logo">
                        <img src="/react-example/Images/oldcar.png" title="Logo" alt="Logo del proyecto" width="120" height="100"/>
                    </Navbar.Brand>
                    </center>
                    <center>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ borderColor: "#006655" }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand as={Link} to="/react-example/Catalog" title="Catalogo"><h4 style={{ color: "#000000" }} >Catálogo</h4></Navbar.Brand>
                        <Navbar.Brand as={Link} to="/react-example/Contact" title="Contacto"><h4 style={{ color:  "#000000" }} >Contacto</h4></Navbar.Brand>
                        <Container>
                        <Nav className="me-auto">
                            <NavDropdown title={<Navbar.Brand style={{ color:  "#000000", fontSize: 18 + "pt" }}>Perfil</Navbar.Brand>} id="nav-dropdown" >
                                <NavDropdown.Item as={Link} to="/react-example/UserProfile" title="Perfil" style={{ color:  "#000000" }}><b>Perfil</b></NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/react-example/Login" title="Inicio sesión" style={{ color:  "#000000" }}><b>Inicio sesión</b></NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/react-example/Home" title="Cerrar sesión" style={{ color:  "#000000" }}><b>Cerrar sesión</b></NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/react-example/AdminLogin" title="Administracion" style={{ color:  "#000000" }}> <b>Administrador</b></NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/react-example/PurchaseOrder" title="Orden de Compra" style={{ color:  "#000000" }}><b>Órdenes de Compra</b></NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/react-example/ShoppingCart" title="Carrito" style={{ color:  "#000000" }}><b>🛒</b></NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/react-example/Favorites" title="Lista de deseos" style={{ color:  "#000000" }}><b>❤</b></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Container>
                    </Navbar.Collapse>
                    </center>
                </Container>
            </Navbar>
            
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    )
}

export default Navigation;