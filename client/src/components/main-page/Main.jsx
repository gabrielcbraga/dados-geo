import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

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
                        <Link
                            to="link"
                            spy={true}
                            smooth={true}
                            duration={700}
                            offset={-80}
                        >Veja os links
                        </Link>
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
