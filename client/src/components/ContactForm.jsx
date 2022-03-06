import React, { useState } from "react";
import Axios from "axios"

import { object, string } from 'yup'

import '../styles/ContactFormStyle.css'

import 'font-awesome/css/font-awesome.min.css';

const ContactForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const validation = async () => {

        let contactSchema = object({
            name: string().required(),
            email: string().email().required(),
            message: string().required().min(5).max(300)
        })

        const userFormData = {
            name: name,
            email: email,
            message: message
        }

        const validationIsValid = await contactSchema.isValid(userFormData)

        if (validationIsValid) {
            Axios({
                method: "POST",
                url: "/",
                data: {
                    name: userFormData.name,
                    email: userFormData.email,
                    message: userFormData.message
                },
            });
        }
    }

    const submitForm = (event) => {
        event.preventDefault()

        validation()
    }

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
                                    onChange={e => setName(e.target.value)}
                                    placeholder="&#xF007;  | " />
                            </div>
                            <div className="contactform-form-input-single">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="text"
                                    name="email"
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="&#xF0e0;  | " />
                            </div>
                        </div>
                        <div className="contactform-form-rightcontainer">
                            <div className="contactform-form-input-single message">
                                <label htmlFor="message">Mensagem</label>
                                <textarea
                                    name="message"
                                    onChange={e => setMessage(e.target.value)}
                                    placeholder="&#xF0e0;  | "></textarea>
                            </div>
                        </div>
                        <div className="contactform-form-buttonsubmit">
                            <button type="submit" onClick={submitForm}>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default ContactForm