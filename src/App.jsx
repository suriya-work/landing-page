import React from 'react'
import './App.css'
// header 
import Header from './components/header/Header';
// banner
import Banner from './components/banner/Banner';
// hero
import HeroSection from './components/herosection/HeroSection';
// toolbar
import Toolbars from './components/toolbar/Toolbars';
// card
import Card from './components/card/Card';
// travel
import Travel from './components/travel/Travel';
// services
import Services from './components/services ofer/Services';
const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Toolbars />
      <HeroSection />
      <Card />
      <Travel />
      <Services />
    </div>
  )
}

export default App

