import '../styles/menu.css';
import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: false,
            openMenu: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                animation: !prevState.animation,
                openMenu: !prevState.openMenu
            }
        });
    }

    render() {
        let animationClasses = (this.state.animation ? ' active': '');
        let openMenuClasses = (this.state.openMenu ? ' open': '');

        return (
            <div className="menu">
                <div className="container-menu">
                </div>
                <div className={`button_container${animationClasses}`} onClick={this.handleClick}>
                    <span className="top" />
                    <span className="middle" />
                    <span className="bottom" />
                </div>
                <div className={`overlay${openMenuClasses}`}>
                    <nav className="overlay-menu">
                        <ul>
                            <li><Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={200}
                                onClick={this.handleClick}
                            >Das Studio</Link></li>
                            <li><Link
                                activeClass="active"
                                to="treatments"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={200}
                                onClick={this.handleClick}
                            >Behandlungen</Link></li>
                            <li><Link
                                activeClass="active"
                                to="prices"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={200}
                                onClick={this.handleClick}
                            >Preise</Link></li>
                            <li><Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={200}
                                onClick={this.handleClick}
                            >Kontakt</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Menu;