import React from "react";

import '../styles/FooterStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-left-links">
                    <a href="#">Links</a>
                    <a href="#">Comunidade</a>
                    <a href="#">Fale Conosco</a>
                </div>
                <div className="footer-right-logo">
                    <div className="icon-header">
                        <FontAwesomeIcon icon={faMap} /> <span>DadosGeo</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer