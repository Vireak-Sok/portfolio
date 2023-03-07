import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/homeComponent/hero/Hero'
import MainProject from '../../components/homeComponent/mainProject/MainProject'
import OtherProject from '../../components/homeComponent/otherProject/OtherProject'
import About from '../../components/homeComponent/about/About'
import Technology from '../../components/homeComponent/technology/Technology'
import Experience from '../../components/homeComponent/experiences/Experience'
import Education from '../../components/homeComponent/education/Education'
import Award from '../../components/homeComponent/award/Award'
import Contact from '../../components/homeComponent/contact/Contact'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <MainProject/>
    <OtherProject/>
    <About/>
    <Technology/>
    <Experience/>
    <Education/>
    <Award/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home