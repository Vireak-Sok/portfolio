import React from 'react';
import MainButton from '../../button/MainButton';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-container'>
      <h1 style={{margin: 0, fontSize: '3rem', textTransform: 'uppercase', letterSpacing: '.5rem'}}>Sok Vireak</h1>
      <p style={{margin: 0, fontSize: '1.2rem', fontWeight: 'light', textTransform: 'uppercase', letterSpacing: '.25rem'}}>Full Stack Designer</p>
      <div className='btn-container'>
      <MainButton/>
      </div>
    </div>
  )
}

export default Hero