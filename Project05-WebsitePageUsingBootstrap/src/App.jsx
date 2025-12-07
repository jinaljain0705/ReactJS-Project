import React from 'react'
import Header from './components/header/navbar';
import HeroSlider from './components/main/heroSection';
import SportsCategory from "./components/main/SportsCategory";
import ShopSection from './components/main/shopSection';
import TeamSection from './components/main/TeamSection';
import SignupForm from './components/main/SignupForm';
import Testimonials from './components/main/Testimonials';
import BlogSection from './components/main/BlogSection';
import PromoBanner from './components/main/PromoBanner';
import Footer from './components/footer/footer';
import './App.css'

function App() {

  return (
    <>
     <Header />
     <HeroSlider />
     <SportsCategory />
     <ShopSection />
     <TeamSection />
     <SignupForm />
     <Testimonials />
     <BlogSection />
     <PromoBanner />
     <Footer />
    </>
  )
}

export default App
