import '../styles/about.css';
import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profileImg from '../res/img/profile_img.jpg';
import waitingRoom from '../res/img/img_wartebereich_hp.jpg';
import closeupTowel from '../res/img/img_closeup_towel_hp.jpg';
import massageTable from '../res/img/img_massage_liege_hp.jpg';
import Menu from './Menu';


class About extends Component {
    render() {
        return (
            <div className="about">
                <Menu />
                <Container>
                    <Row>
                        <Col xs={1} sm={1} md={2}/>
                        <Col xs={10} sm={10} md={8}>
                            <div className="quote">
                                <p className="quote-line">Neue Energie.</p>
                                <p className="quote-line">Mehr Wohlbefinden.</p>
                                <p className="quote-line">Rundum entspannt.</p>
                            </div>
                        </Col>
                        <Col xs={1} sm={1} md={2}/>
                    </Row>
                    <Row>
                        <Col xs={4} sm={4} md={4}>
                            <div className="verticalLine"></div>
                        </Col>
                        <Col xs={4} sm={4} md={4}>
                            <div className="profile">
                                <img className="profile-img" src={profileImg} alt="Annette Wallner"/>
                            </div>
                        </Col>
                        <Col xs={4} sm={4} md={4}/>
                    </Row>
                    <Row>
                        <Col xs={1} sm={1} md={2}/>
                        <Col xs={10} sm={10} md={8}>
                            <p className="about-text">Mein Ziel ist es, Ihr Wohl&shy;be&shy;finden zu
                                ver&shy;bessern. Dazu biete ich in meinem
                                modernen Massage&shy;studio energie&shy;spendende
                                und er&shy;holsame Wellness&shy;massagen an,
                                bei denen Sie voll&shy;kommen ab&shy;schalten
                                und jeg&shy;lichen Stress ver&shy;gessen können.
                                Die da&shy;durch neu&shy;ge&shy;won&shy;nene Ener&shy;gie
                                wird Ihr Wohl&shy;befinden ver&shy;bessern und Ihr
                                Lei&shy;stungs&shy;ver&shy;mögen steigern.</p>
                            <p className="signature">Annette Wallner</p>
                        </Col>
                        <Col xs={1} sm={1} md={2}/>
                    </Row>
                    <Row>
                        <Col className="small-pictures" xs={6} sm={6} md={6}>
                            <img className="img-waiting" src={waitingRoom} alt="Annette Wallner"/>
                        </Col>
                        <Col className="small-pictures" xs={6} sm={6} md={6}>
                            <img className="img-closeup" src={closeupTowel} alt="Annette Wallner"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="small-pictures" xs={12} sm={12} md={12}>
                        <img className="img-massage" src={massageTable} alt="Annette Wallner"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;
