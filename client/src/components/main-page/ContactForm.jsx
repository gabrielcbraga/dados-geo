import React from "react";
/* import { GoogleMap, useJsApiLoader } from '@react-google-maps/api' */

import './styles/ContactFormStyle.css'

const ContactForm = () => {

    /*         const { isLoaded } = useJsApiLoader({
                id: 'google-map-script',
                googleMapsApiKey: "AIzaSyBaB_VZF_k7_HTq9t9MHtie6r-i9KtIYrI"
              }) */

    return (
        <>
            <div className="contactform">
                <div className="title-contactform">
                    <h1>Contato</h1>
                </div>
                <div className="contactform-container-infos">
                    <div className="contactform-maps">
                        {/*                     { isLoaded ? (
                        <GoogleMap
                            center={{
                                lat: -15.793721,
                                lng: -47.891317
                            }}
                            zoom={15}
                        ></GoogleMap>
                    ) : <></>} */}
                    </div>
                    <div className="contactform-infos">
                        <div className="contactform-infos-texts">
                            <div className="contactform-infos-texts-mail">
                                <h4>E-mail</h4>
                                <p>contato@dadosgeo.com.br</p>
                            </div>
                            <div className="contactform-infos-texts-fone">
                                <h4>Telefone</h4>
                                <p>(61) 99999-9999</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm
