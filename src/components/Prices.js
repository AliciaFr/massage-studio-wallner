import '../styles/prices.css';
import React, {Component} from 'react';
import {Link, animateScroll as scroll} from "react-scroll";
import Menu from './Menu';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Prices extends Component {
    render() {
        return (
            <div className="prices">
                <Menu />
                <Container>
                    <Row>
                        <Col xs={1} sm={1} md={2} />
                        <Col xs={10} sm={10} md={10}>
                            <div className="headline">
                                <h1>Preise</h1>
                                <svg height="10">
                                    <g fill="none" stroke="black">
                                        <path strokeWidth="4" d="M0 0 l135 0"/>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p className="price">40 Euro / Stunde</p>
                                <p>für alle Behandlungen. Die Massagen sind auf eine Dauer von
                                    circa 60 Minuten ausgelegt.</p>
                            </div>
                        </Col>
                        <Col xs={1} sm={1} md={2}/>
                    </Row>
                    <Row>
                        <Col xs={1} sm={1} md={2} ld={2} />
                        <Col xs={3} sm={1} md={1}>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <div className="price-vl"/>
                            </Link>
                        </Col>
                        <Col xs={7} sm={10} md={8}>
                            <div className="quote appointment">
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    <p className="quote-line">Jetzt</p>
                                    <p className="quote-line">Termin</p>
                                    <p className="quote-line">vereinbaren</p>
                                </Link>
                            </div>
                        </Col>
                        <Col xs={0} sm={0} md={1}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Prices;
