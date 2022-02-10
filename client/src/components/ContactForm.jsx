import React from "react";

import '../styles/ContactFormStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faKeyboard } from '@fortawesome/free-regular-svg-icons'


const ContactForm = () => {
    const namePlaceholder = `${<FontAwesomeIcon icon={faUser} />} | `
    const emailPlaceholder = <FontAwesomeIcon icon={faKeyboard} />

    return (
        <div className="contactform-container">
            <div className="contactform-title">
                <h1>Fale Conosco</h1>
                <h2>Fale conosco para mandar uma mensagem,
                    ajuda ou colaborar com este portal.</h2>
            </div>
            <div className="contactform-container-form">
                <div className="contactform-header">
                    <h4>Formulário de Contato</h4>
                </div>
                <div className="contactform-container-form-inside">
                    <form action="POST">
                        <div className="contactform-form-input-single">
                            <label htmlFor="name">Nome</label>
                            <input type="text" name="name" />
                        </div>
                        <div className="contactform-form-input-single">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" />
                        </div>
                        <div className="contactform-form-input-single message">
                            <label htmlFor="message">Mensagem</label>
                            <textarea name="message"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm