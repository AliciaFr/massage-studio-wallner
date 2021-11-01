import React, {Component} from 'react';
import '../styles/treatments.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "../components/Accordion";
import Menu from './Menu';


class Treatments extends Component {
    render() {
        const treatments = [
            {
                title: "Wellnessmassage",
                description: "Klassische Massage zur Entspannung der Muskulatur, der Psyche, der Haut sowie des Bindegewebes.",
                key: 1
            },
            {
                title: "Energetische Entspannungsmassage",
                description: "Eine sehr sanfte, feinfühlige Rückenmassage, die körperliche, energetische und seelische Blockaden lösen kann.",
                key: 2
            },
            {
                title: "Kosmetische Lymphdrainage",
                description: "Sanfte Handgriffe verhelfen der Unterstützung der körpereigenen Lymphaktivität und sorgen somit zur Auflösung von Stauungen im Lymphsystem.",
                key: 3
            },
            {
                title: "Craniosacrale Basismassage",
                description: "Die ganzheitliche sanfte Massage bringt die Selbstheilungskräfte wieder in Gang.",
                key: 4
            },
            {
                title: "Lomi Lomi",
                description: "Eine Relaxmassage, die durch großflächige Bewegungen über den ganzen Körper zum Abbau von Stress verhilft.",
                key: 5
            }
        ];

        let treatmentsAccordion = function () {
            return (
                treatments.map(treatment => (
                    <Accordion
                        title={treatment.title}
                        content={treatment.description}
                        key={treatment.key}
                    />
                ))
            )
        };

        return (
            <div className="treatments">
                <Menu />
                <Container>
                    <Row>
                        <Col xs={1} sm={1} md={2}/>
                        <Col xs={10} sm={10} md={8}>
                            <div className="headline">
                                <h1>Behandlungen</h1>
                                <svg height="10">
                                    <g fill="none" stroke="black">
                                        <path strokeWidth="4" d="M0 0 l135 0"/>
                                    </g>
                                </svg>
                            </div>
                            <p>Wählen Sie aus einer der folgenden Behandlungen aus:</p>
                            <div className="all-treatments">{treatmentsAccordion()}</div>
                        </Col>
                        <Col xs={1} sm={1} md={2}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Treatments;
