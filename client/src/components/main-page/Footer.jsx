import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import './styles/FooterStyle.css'
import './styles/ResponsiveStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-left-links">
                    <a>
                        <Link
                            to="link"
                            spy={true}
                            smooth={true}
                            duration={700}
                            offset={-80}
                        >Links
                        </Link>
                    </a>
                    <a>
                        <Link
                            to="programs"
                            spy={true}
                            smooth={true}
                            duration={700}
                            offset={-80}
                        >Programas
                        </Link>
                    </a>
                </div>
                <div className="footer-right-logo" onClick={scroll.scrollToTop}>
                    <div className="icon-header">
                        <FontAwesomeIcon icon={faMap} /> <span>DadosGeo</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer