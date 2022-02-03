import React from "react";

import '../styles/LinksHomeStyle.css'

import placeholderImage from '../images/background-placeholder.png'

const Main = () => {
    return (
        <>
            <div className="linkshome-top-bar"></div>
            <div className="linkshome">
                <div className="title-linkshome">
                    <h1>Links</h1>
                </div>
                <div className="container-box-linkshome">
                    <div className="box-linkshome">
                        <a href="#">
                            <div className="box-img-linkshome">
                                <img src={placeholderImage} alt="Placeholder Image" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>Nacional</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="#">
                            <div className="box-img-linkshome">
                                <img src={placeholderImage} alt="Placeholder Image" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>Internacional</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="#">
                            <div className="box-img-linkshome">
                                <img src={placeholderImage} alt="Placeholder Image" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>Drones</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="#">
                            <div className="box-img-linkshome">
                                <img src={placeholderImage} alt="Placeholder Image" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>Mapas</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
