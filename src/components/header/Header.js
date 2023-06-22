import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({scrollToFunction, workRef, aboutRef, contactRef}) => {
  const [hide, setHide] = useState(true)

  const controlNavbar = () => {
    
    if(window.scrollY<150){
      setHide(true)
    }else{
      setHide(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  const goHome = () => {
    window.location.href='/'
  }
  return (
    <div className='header-container' style={hide ? { opacity: 0, pointerEvents: 'none'} : {}}>
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