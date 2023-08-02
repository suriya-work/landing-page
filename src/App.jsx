import React from 'react'
import './App.css'
// header 
import Header from './components/header/Header';
// banner
import Banner from './components/banner/Banner';
// toolbar
import Toolbars from './components/toolbar/Toolbars';
// card
import Card from './components/card/Card';
const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Toolbars />
      <Card />
    </div>
  )
}

export default App

