import React from "react";

import '../styles/HeaderStyle.css'
import '../styles/ResponsiveStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
    return (
            <div className="header">
                <div className="icon-header">
                    <FontAwesomeIcon icon={faMap} /> <span>DadosGeo</span>
                </div>
                <div className="links-header">
                    <a href="#home">Home</a>
                    <a href="#links">Links</a>
                    <a href="#comunidade">Comunidade</a>
                    <a href="#contato">Fale Conosco</a>
                </div>
                <div className="signup-header">
                    <a href="#">Crie sua conta</a>
                </div>
            </div>
    )
}

export default Header