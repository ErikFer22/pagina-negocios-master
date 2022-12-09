import React from 'react';
import { Container } from 'react-bootstrap';
import "../css-components/style4.css";

const Footer = () => {
    return (
        <Container fluid>
            <footer>
                <div class="container pt-5 border-bottom">
                    <div class="row text-center">
                        <div style={{ textAlign: "center" }}>
                            <marquee direction="left" SCROLLDELAY="30">
                            </marquee>
                        </div>
                        <h5>Mandanos un mensaje via email</h5>
                       <h6><a href="https://www.google.com/intl/es-419/gmail/about/"> AutosBennett@gmail.com</a></h6>
                        <ul class="list-group">
                            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                                
                                <a
                                    href="https://www.google.com/intl/es-419/gmail/about/"
                                    title="gmail"
                                    target="_blank"
                                    style={{ marginRight: 35 + "px" }}>
                                        <img
                                        src="/react-example/Images/facebook.png"
                                        title="Facebook"
                                        alt="Facebook"
                                        width="45"
                                        height="45"/>
                                </a> 
                                <a
                                    href="https://www.google.com/intl/es-419/gmail/about/"
                                    title="gmail"
                                    target="_blank"
                                    style={{ marginRight: 35 + "px" }}>
                                        <img
                                        src="/react-example/Images/instagram.png"
                                        title="Facebook"
                                        alt="Facebook"
                                        width="45"
                                        height="45"/>
                                </a>    
                            </li>
                        </ul>
                    </div>
                </div>
                
                <h4 style={{
                    textAlign: "center",
                    marginTop: "15" + "px"
                }}></h4>
                <p style={{
                        textAlign:"center",
                        marginTop: "15" + "px"
                    }} >
                    </p>
                <div>
                    <ul class="list-group" style={{ textAlign: "center" }}>
                        <li class="list-group-item bg-transparent border-0 p-0 mb-2"
                            style={{ fontSize: "20" + "px" }}>

                            <a
                                href="https://www.google.com/intl/es-419/gmail/about/"
                                title="gmail"
                                alt="gmail"
                                target="_blank"><i
                                    class="fa fa-google-plus mr-1"></i></a>
                                     <h6>© Copyright 2022 | AutosBennett</h6>

                        </li>
                    </ul>
                </div>

                <br></br>
            </footer>
        </Container >
    );

}

export default Footer;