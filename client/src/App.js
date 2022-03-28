import React from 'react';

import { Header, Main, LinksHome, Footer, ProgramsHome } from './components'
import { NacionalPage, MapasPage, DronesPage, InternacionalPage } from './components/links-single'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

export default function App() {

  const componentDidMount = () => {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  const callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  return (
    <BrowserRouter>
      <h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nacionalPage" element={<NacionalPageComponent />} />
          <Route path="/internacionalPage" element={<InternacionalPageComponent />} />
          <Route path="/dronesPage" element={<DronesPageComponent />} />
          <Route path="/mapasPage" element={<MapasPageComponent />} />
        </Routes>

      </h1>
    </BrowserRouter>
  )
}

const Home = () => (
  <>
    <Header />
    <Main />
    <LinksHome />
    <ProgramsHome />
    <Footer />
  </>
)

const NacionalPageComponent = () => (
  <>
    <NacionalPage />
  </>
)

const InternacionalPageComponent = () => (
  <>
    <InternacionalPage />
  </>
)

const DronesPageComponent = () => (
  <>
    <DronesPage />
  </>
)

const MapasPageComponent = () => (
  <>
    <MapasPage />
  </>
)