import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import './styles/HeaderStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
    return (
        <div className="header" onClick={scroll.scrollToTop}>
            <div className="icon-header">
                <FontAwesomeIcon icon={faMap} /> <span>DadosGeo</span>
            </div>
            <div className="links-header">
                <a onClick={scroll.scrollToTop}>Home</a>
                <a><Link
                    to="link"
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-80}
                >Links
                </Link>
                </a>
                <a><Link
                    to="form-contact"
                    spy={true}
                    smooth={true}
                    duration={700}
                >Fale Conosco
                </Link></a>
            </div>
        </div>
    )
}

export default Header