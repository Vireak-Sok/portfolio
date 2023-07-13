import React, { useRef } from 'react'
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
  const work = useRef(null)
  const about = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Header scrollToFunction={scrollToSection} workRef={work} aboutRef={about} contactRef={contact}/>
      <Hero scrollToFunction={scrollToSection} workRef={work}/>
      <div ref={work} className='work'>
        <MainProject/>
        <OtherProject/>
      </div>
      <div ref={about} className='about'>
        <About/>
        <Technology/>
        <Experience/>
        <Education/>
        <Award/>
      </div>
      <div ref={contact} className='contact'>
        <Contact/>
      </div>
      <hr style={{width: '80%', backgroundColor: 'red', height: '1px', color: 'none', margin: '0 auto'}}/>
      <Footer/>
    </>
  )
}

export default Home