import '../styles/accordion.css';
import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FiChevronDown} from 'react-icons/fi';

function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion-icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion-icon" : "accordion_icon rotate"
        );
    }

    return (
        <div className="accordion-section">
            <div className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <Container>
                    <Row>
                        <Col xs={10} sm={10} md={10} className="accordion">
                            <p className="accordion-title">{props.title}</p>
                        </Col>
                        <Col xs={2} sm={2} md={2} className="accordion-icon">
                            <FiChevronDown className={`${setRotate}`} />
                        </Col>
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                </Container>
            </div>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion-content"
            >
                <div
                    className="accordion-text"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </div>
        </div>
    );
}

export default Accordion;