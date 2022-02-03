import React from "react";

import '../styles/HeaderStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
    return (
            <div className="header">
                <div className="icon-header">
                    <FontAwesomeIcon icon={faMap} /> <span>DadosGeo</span>
                </div>
                <div className="links-header">
                    <a href="#">Home</a>
                    <a href="#">Links</a>
                    <a href="#">Comunidade</a>
                    <a href="#">Fale Conosco</a>
                </div>
                <div className="signup-header">
                    <a href="#">Crie sua conta</a>
                </div>
            </div>
    )
}

export default Header