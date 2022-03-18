import React from "react"
import { Link } from "react-router-dom";

import './style/DronesPage.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import placeholderImage from '../../../images/background-placeholder.png'

import { faCaretSquareLeft } from '@fortawesome/free-regular-svg-icons'

const DronesPage = () => {
    return (
        <>
            <Link to="/">
                <FontAwesomeIcon icon={faCaretSquareLeft} className="back" />
            </Link>
            <div className="linkshome-single">
                <div className="title-linkshome">
                    <h1>Drones</h1>
                </div>
                <div className="container-box-linkshome">
                    <div className="box-linkshome">
                        <a href="#nacional">
                            <div className="box-img-linkshome">
                                <img src={placeholderImage} alt="Placeholder Image" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>Governo</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="#internacional">
                            <div className="box-img-linkshome">
                                <img src={placeholderImage} alt="Placeholder Image" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>Ibrama</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="#drones">
                            <div className="box-img-linkshome">
                                <img src={placeholderImage} alt="Placeholder Image" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>Anvisa</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="#mapas">
                            <div className="box-img-linkshome">
                                <img src={placeholderImage} alt="Placeholder Image" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>Ministério</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="#mapas">
                            <div className="box-img-linkshome">
                                <img src={placeholderImage} alt="Placeholder Image" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>Ministério</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DronesPage