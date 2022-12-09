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
    


  );

   
}

export default GridComplexExample;