import React from "react";

import { Link } from "react-router-dom"

import './styles/LinksHomeStyle.css'
import './styles/ProgramsHome.css'

import placeholderImage from '../../images/background-placeholder.png'

const Main = () => {
    return (
        <>
            <div className="linkshome bg-black top-mt footer-mb" id="programs">
                <div className="title-linkshome tl-light txt-mt">
                    <h1>Programas</h1>
                </div>
                <div className="container-box-linkshome">
                    <div className="box-linkshome">
                        <Link to="/nacionalPage">
                            <a href="#nacional">
                                <div className="box-img-linkshome">
                                    <img src={placeholderImage} alt="Placeholder Image" />
                                </div>
                                <div className="box-text-linkshome tl-light">
                                    <span>Google Earth</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="box-linkshome">
                        <Link to="/internacionalPage">
                            <a href="#internacional">
                                <div className="box-img-linkshome">
                                    <img src={placeholderImage} alt="Placeholder Image" />
                                </div>
                                <div className="box-text-linkshome tl-light">
                                    <span>CIS EARTH</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
