import '../styles/contact.css';
import React from 'react';
import Menu from './Menu';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Map from '../res/img/map.png';
import { Link } from "react-router-dom";

const Contact = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <div className="contact" id="contact">
            <Menu />
            <Container>
                <Row>
                    <Col xs={1} sm={1} md={2} />
                    <Col xs={10} sm={10} md={8}>
                        <div className="headline">
                            <h1>Kontakt</h1>
                            <svg height="10">
                                <g fill="none" stroke="white">
                                    <path strokeWidth="4" d="M0 0 l135 0"/>
                                </g>
                            </svg>
                        </div>
                        <div className="info">
                            <p className="info-header">Keine Terminvergabe</p>
                            <p className="contact-paragraph">Das Massagestudio ist vor&uuml;bergehend geschlossen. Deshalb werden derzeit leider keine weiteren Termine angeboten.</p>
                        </div>
                        <div className="address">
                            <a href="https://goo.gl/maps/5iL9uUZtboGaGDDV7" target="_blank" rel="noopener noreferrer">
                                <p className="contact-paragraph">Abensberger Straße 25 b</p>
                                <p className="contact-paragraph">84048 Mainburg</p>
                            </a>
                        </div>
                        <div className="phone-number">
                            <p className="contact-paragraph">08751 8462850</p>
                            <p className="contact-paragraph">0171 8135785</p>
                        </div>
                        <div className="e-mail">
                            <p className="contact-paragraph"><a href={"mailto:annette.wallner@t-online.de"}>annette.wallner@t-online.de</a></p>
                        </div>
                        <div className="map">
                            <a href="https://goo.gl/maps/5iL9uUZtboGaGDDV7" target="_blank" rel="noopener noreferrer">
                            <img className="map" src={Map} alt="Karte"/>
                            </a>
                        </div>
                        <div className="copyright">
                            <p className="contact-paragraph">{`© ${ currentYear } Massagestudio Wallner | By Alicia Fritsche.`}</p>
                        </div>
                        <div className="imprint">
                            <p className="contact-paragraph"><Link to={"/impressum"}>Impressum</Link> & <Link to={"/datenschutzerklaerung"}>Datenschutzerklärung</Link></p>
                        </div>
                    </Col>
                    <Col xs={1} sm={1} md={2}/>
                </Row>
            </Container>
        </div>
    );
    }

export default Contact;
