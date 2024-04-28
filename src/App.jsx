
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
// explor
import Explor from './components/explor/Explor';
// footer
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <div className=" min-h-screen grid grid-rows-[100px_1fr_auto]">
      <Header />
      <Banner />
      <Toolbars />
      <HeroSection />
      <Card />
      <Travel />
      <Services />
      <Explor />
      <Footer />
    </div>
  )
}

export default App

