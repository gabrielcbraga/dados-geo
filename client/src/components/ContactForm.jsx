import React from "react";

import '../styles/ContactFormStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faKeyboard } from '@fortawesome/free-regular-svg-icons'


const ContactForm = () => {
    const namePlaceholder = `${<FontAwesomeIcon icon={faUser} />} | `
    const emailPlaceholder = <FontAwesomeIcon icon={faKeyboard} />

    return (
        <div class="background">
            <div class="container">
                <div class="screen">
                    <div class="screen-header">
                        <div class="screen-header-left">
                            <div class="screen-header-button close"></div>
                            <div class="screen-header-button maximize"></div>
                            <div class="screen-header-button minimize"></div>
                        </div>
                        <div class="screen-header-right">
                            <div class="screen-header-ellipsis"></div>
                            <div class="screen-header-ellipsis"></div>
                            <div class="screen-header-ellipsis"></div>
                        </div>
                    </div>
                    <div class="screen-body">
                        <div class="screen-body-item left">
                            <div class="app-title">
                                <span>FALE</span>
                                <span>CONOSCO</span>
                            </div>
                        </div>
                        <div class="screen-body-item">
                            <div class="app-form">
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="NAME" value="DadosGeo" />
                                </div>
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="EMAIL" />
                                </div>
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="NOME" />
                                </div>
                                <div class="app-form-group message">
                                    <input class="app-form-control" placeholder="MENSAGEM" />
                                </div>
                                <div class="app-form-group buttons">
                                    <button class="app-form-button">CANCELAR</button>
                                    <button class="app-form-button">ENVIAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm