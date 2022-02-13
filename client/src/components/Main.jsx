import React from "react";

import '../styles/MainStyle.css'

import ImageHome from '../images/homepage.png'

const Main = () => {
    return (
        <>
            <div className="main">
                <div className="titles-main">
                    <h3>Seu portal de geoprocessamento.</h3>
                    <h6>Conjunto de links de sites com dados georreferenciados, feito para te ajudar!</h6>
                    <div className="button-main">
                        <a href="#links">Veja os links</a>
                    </div>
                </div>
                <div className="image-main">
                    <img src={ImageHome} alt="" />
                </div>
            </div>
            <div className="main-separator"></div>
        </>
    )
}

export default Main
