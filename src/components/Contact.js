import '../styles/contact.css';
import React, { Component } from 'react';
import Menu from './Menu';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Map from '../res/img/map.png';
import {FiHeart} from 'react-icons/fi';
import {Link} from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div className="contact" id="contact">
                <Menu />
                <Container>
                    <Row>
                        <Col xs={1} sm={1} md={2} />
                        <Col xs={3} sm={3} md={4}>
                            <div className="contact-vl" />
                            <i className="arrow-down" />
                        </Col>
                        <Col xs={8} sm={8} md={6} />
                    </Row>
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
                                <p className="contact-paragraph">© 2019 Massagestudio Wallner | Made with <FiHeart /> by Alicia Fritsche.</p>
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
}

export default Contact;
