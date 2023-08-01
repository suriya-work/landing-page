import React from 'react'
import './App.css'
// header 
import Header from './components/header/Header';
// banner
import Banner from './components/banner/Banner';
// toolbar
import Toolbars from './components/toolbar/Toolbars';
const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Toolbars />
    </div>
  )
}

export default App

