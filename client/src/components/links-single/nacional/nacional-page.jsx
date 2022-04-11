import React from "react"
import { Link } from "react-router-dom";

import './style/nacionalPage.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import placeholderImage from '../../../images/background-placeholder.png'
import GeoPortalDF from './images/geoportaldf.png'
import FipCerrado from './images/fip-cerrado.png'
import TerraMa from './images/terrama.png'
import Sisam from './images/sisam.png'
import TerraBrasilis from './images/terra-brasilis.png'
import Inde from './images/inde.png'
import SatVeg from './images/satveg.png'
import Prf from './images/prf.png'
import Mas from './images/mas.png'
import Prodes from './images/prodes.png'
import Idesp from './images/idesp.png'
import Ciman from './images/ciman.png'
import Datageo from './images/datageo.png'
import Bdgex from './images/bdgex.png'
import CerradoDPAT from './images/cerradodpat.png'
import Iedemg from './images/iedemg.png'

import { faCaretSquareLeft } from '@fortawesome/free-regular-svg-icons'

const NationalPage = () => {
    return (
        <>
            <Link to="/">
                <FontAwesomeIcon icon={faCaretSquareLeft} className="back" />
            </Link>
            <div className="linkshome-single">
                <div className="title-linkshome">
                    <h1>Nacional</h1>
                </div>
                <div className="container-box-linkshome">
                    <div className="box-linkshome">
                        <a href="https://www.geoportal.seduh.df.gov.br/geoportal/" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={GeoPortalDF} alt="GeoPortal DF" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>GeoPortal DF</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="https://csr.ufmg.br/fipcerrado/pt/" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={FipCerrado} alt="FIP Cerrado" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>FIP Cerrado</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="http://www.terrama2.dpi.inpe.br/" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={TerraMa} alt="TerraMa" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>TerraMa²</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="https://queimadas.dgi.inpe.br/queimadas/sisam/v2/" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={Sisam} alt="Sisam" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>Sisam</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="http://terrabrasilis.dpi.inpe.br/" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={TerraBrasilis} alt="Terra Brasilis" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>Terra Brasilis</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="https://www.inde.gov.br/" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={Inde} alt="INDE" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>INDE</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="https://www.satveg.cnptia.embrapa.br/satveg/login.html" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={SatVeg} alt="SatVeg" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>SatVeg</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="https://suportebr.prf.gov.br/dashboard#/dashboard" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={Prf} alt="PRF" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>Suporte PRF</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="http://terrabrasilis.dpi.inpe.br/ams/" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={Mas} alt="MAS" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>MAS</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="http://terrabrasilis.dpi.inpe.br/app/map/deforestation?hl=pt-br" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={Prodes} alt="PRODES" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>PRODES</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="http://www.idesp.sp.gov.br/" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={Idesp} alt="IDESP" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>IDESP</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="http://queimadas.dgi.inpe.br/queimadas/ciman" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={Ciman} alt="CIMAN" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>CIMAN</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="https://datageo.ambiente.sp.gov.br/" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={Datageo} alt="DataGEO" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>DataGEO</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="https://bdgex.eb.mil.br/bdgexapp" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={Bdgex} alt="BDGEx" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>BDGEx</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="https://www.cerradodpat.ufg.br/#/" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={CerradoDPAT} alt="Cerrado DPAT" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>Cerrado DPAT</span>
                            </div>
                        </a>
                    </div>
                    <div className="box-linkshome">
                        <a href="http://iede.fjp.mg.gov.br/" target="_blank" rel="noreferrer">
                            <div className="box-img-linkshome">
                                <img src={Iedemg} alt="IEDE-MG" />
                            </div>
                            <div className="box-text-linkshome">
                                <span>IEDE-MG</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NationalPage