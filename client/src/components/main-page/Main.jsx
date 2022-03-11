import React from "react";

import './styles/MainStyle.css'

import ImageHome from '../../images/homepage.png'

const Main = () => {
    return (
        <>
            <div className="main">
                <div className="titles-main">
                    <span>Seu portal de geoprocessamento.</span>
                    <p>Conjunto de links de sites com dados georreferenciados, feito para te ajudar!</p>
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
