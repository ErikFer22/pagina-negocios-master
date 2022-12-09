import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';


function GridComplexExample() {
  const [disable, setDisable] = useState(true);
  const disableFalse = () => setDisable(false);
  const disableTrue = () => setDisable(true);

  const [editUsuario, setEditUsuario] = useState({
    nombre: "Bennett",
    apellidoP: "Martínez",
    apellidoM: "Terán",
    direccion: "Rancho San Miguel",
    correo: "bennett@ita.com",
    
  })

  const cli = (e) => {
    if (e && e.preventDefault()) e.preventDefault();
    disableFalse();
  }
  return (
    <Form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
      <Col className="mb-3 mx-5" >
      <Col>
                  <img
                        width="100"
                        height="100"
                        alt='GMAIL'
                        title='GMAIL'
                        src="/react-example/Images/Perfil.JPG">
                  </img>
      </Col>
      <center>
        <h2>Mi perfil</h2>
        <br></br>
      <Form.Group as={Col} className="col-md-4" controlId="formGridName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control placeholder={editUsuario.nombre}  disabled={disable}/>
      </Form.Group>

  
      
        <Form.Group as={Col} className="col-md-4" controlId="formGridLastname1">
          <Form.Label>Apellido paterno</Form.Label>
          <Form.Control placeholder={editUsuario.apellidoP} disabled={disable}/>
        </Form.Group>
     

     
        <Form.Group as={Col} className="col-md-4" controlId="formGridLastname2">
          <Form.Label>Apellido materno</Form.Label>
          <Form.Control placeholder={editUsuario.apellidoM}  disabled={disable}/>
        </Form.Group>
        <Form.Group as={Col}  className="col-md-4" controlId="formGridEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            placeholder={editUsuario.correo}
            disabled={disable} />
        </Form.Group>
        <Form.Group as={Col} className="col-md-4" controlId="formGridAddress">
        <Form.Label>Dirección</Form.Label>
        <Form.Control placeholder={editUsuario.direccion} disabled={disable} />
        </Form.Group>
        </center>
      </Col>
    
    </Form>


  );

   
}

export default GridComplexExample;