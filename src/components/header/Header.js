import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({scrollToFunction, workRef, aboutRef, contactRef}) => {
  const goHome = () => {
    window.location.href='/'
  }
  return (
    <div className='header-container'>
      <h3 style={{display: 'flex', margin: 0}} onClick={() => goHome()}>Vireak Sok</h3>
      <div className='nav-link'>
        <Link hrefLang='/' className='link' onClick={() => scrollToFunction(workRef)}>Work</Link>
        <Link hrefLang='/' className='link' onClick={() => scrollToFunction(aboutRef)}>About</Link>
        <Link hrefLang='/' className='link'onClick={() => scrollToFunction(contactRef)}>Contact</Link>
      </div>
    </div>
  )
}

export default Header