import React from "react";

import '../styles/ContactFormStyle.css'

import 'font-awesome/css/font-awesome.min.css';

const ContactForm = () => {
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
                        <div className="contactform-form-leftcontainer">
                            <div className="contactform-form-input-single">
                                <label htmlFor="name">Nome</label>
                                <input 
                                type="text" 
                                name="name"
                                placeholder="&#xF007;  | " />
                            </div>
                            <div className="contactform-form-input-single">
                                <label htmlFor="email">E-mail</label>
                                <input
                                type="text"
                                name="email"
                                placeholder="&#xF0e0;  | " />
                            </div>
                        </div>
                        <div className="contactform-form-rightcontainer">
                            <div className="contactform-form-input-single message">
                                <label htmlFor="message">Mensagem</label>
                                <textarea
                                 name="message"
                                 placeholder="&#xF0e0;  | "></textarea>
                            </div>
                        </div>
                        <div className="contactform-form-buttonsubmit">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm