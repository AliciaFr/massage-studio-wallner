import '../styles/landingPage.css';
import React, {Component} from 'react';
import logo from '../res/img/logo.png';
import plantLeftTop from '../res/img/plant1.png';
import plantLeftBottom from '../res/img/plant2.png';
import plantRightTop from '../res/img/plant3.png';
import plantRightBottom from '../res/img/plant4.png';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        if(window.scrollY >= 130) {
            this.setState(() => {
                return {
                    animation: true
                }
            });
        } else {
            this.setState(() => {
                return {
                    animation: false
                }
            });
        }
    }

    render() {
        let animationClasses = (this.state.animation ? ' active' : '');
        return (
            <div className="landing-page">
                <div className="background" onScroll={this.handleScroll}>
                    <img className={`plant-img plant-1${animationClasses}`} src={plantLeftTop}
                         alt="decoration element"/>
                    <img className={`plant-img plant-2${animationClasses}`} src={plantRightTop}
                         alt="decoration element"/>
                    <img className={`plant-img plant-3${animationClasses}`} src={plantLeftBottom}
                         alt="decoration element"/>
                    <img className={`plant-img plant-4${animationClasses}`} src={plantRightBottom}
                         alt="decoration element"/>
                    <img className="logo" src={logo} alt="Logo"/>

                </div>
            </div>
        );
    }
}

export default LandingPage;
