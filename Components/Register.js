import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Register = () => {
    const navigate = useNavigate();

    const [Register, setRegister] = useState({
        name: '',
        last_name: '',
        email: '',
        password: '',
        date_birth:'',
        flag: false
    });

    const onChangeRegister = (e) => {
        e.persist();
        setRegister({ ...Register, [e.target.name]: e.target.value });
    };

    const click = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        navigate('/react-example/Login');

    };

    return (
        
    );
}

export default Register;