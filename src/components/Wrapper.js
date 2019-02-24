import React, { Component } from 'react';
import Home from './01-Home';
import Navbar from './00-Navbar';
import InfoSection from './02-InfoSection'
import DataSection from './03-DataSection'
import InfographicSection from './04-InfographicsSection'
import ParallaxSection from './05-ParallaxSection'
import Footer from './06-Footer'

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <InfoSection />
        <DataSection />
        <InfographicSection />
        <ParallaxSection />
        <Footer/>
      </div>
    );
  }
}

export default Wrapper;
