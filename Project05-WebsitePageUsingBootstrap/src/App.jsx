import React from 'react'
import Header from './components/header/navbar';
import HeroSlider from './components/main/heroSection';
import SportsCategory from "./components/main/SportsCategory";
import ShopSection from './components/main/shopSection';
import './App.css'

function App() {

  return (
    <>
     <Header />
     <HeroSlider />
     <SportsCategory />
     <ShopSection />
    </>
  )
}

export default App
