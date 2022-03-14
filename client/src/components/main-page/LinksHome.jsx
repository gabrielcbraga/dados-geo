import React from "react";

import { Link } from "react-router-dom"

import './styles/LinksHomeStyle.css'

import placeholderImage from '../../images/background-placeholder.png'

const Main = () => {
    return (
        <>
            <div className="linkshome" id="link">
                <div className="title-linkshome">
                    <h1>Links</h1>
                </div>
                <div className="container-box-linkshome">
                    <div className="box-linkshome">
                        <Link to="/nacionalPage">
                            <a href="#nacional">
                                <div className="box-img-linkshome">
                                    <img src={placeholderImage} alt="Placeholder Image" />
                                </div>
                                <div className="box-text-linkshome">
                                    <span>Nacional</span>
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
                                <div className="box-text-linkshome">
                                    <span>Internacional</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="box-linkshome">
                        <Link to="/dronesPage">
                            <a href="#drones">
                                <div className="box-img-linkshome">
                                    <img src={placeholderImage} alt="Placeholder Image" />
                                </div>
                                <div className="box-text-linkshome">
                                    <span>Drones</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="box-linkshome">
                        <Link to="/mapasPage">
                            <a href="#mapas">
                                <div className="box-img-linkshome">
                                    <img src={placeholderImage} alt="Placeholder Image" />
                                </div>
                                <div className="box-text-linkshome">
                                    <span>Mapas</span>
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
