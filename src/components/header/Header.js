import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <h3 style={{display: 'flex', margin: 0}}>Vireak Sok</h3>
      <div className='nav-link'>
        <Link hrefLang='/' className='link'>Work</Link>
        <Link hrefLang='/' className='link'>About</Link>
        <Link hrefLang='/' className='link'>Contact</Link>
      </div>
    </div>
  )
}

export default Header