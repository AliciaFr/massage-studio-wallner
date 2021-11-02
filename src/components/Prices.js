import '../styles/prices.css';
import React, {Component} from 'react';
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
                                <p className="price">40 Euro / Stunde - Derzeit nicht verf&uuml;gbar</p>
                                <p>für alle Behandlungen. Die Massagen sind auf eine Dauer von
                                    circa 60 Minuten ausgelegt.</p>
                            </div>
                        </Col>
                        <Col xs={1} sm={1} md={2}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Prices;
