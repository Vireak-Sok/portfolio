import React from 'react';
import MainButton from '../../button/MainButton';
import OutlinedButton from '../../button/OutlinedButton';
// import backgrounCircle from '../../../assets/background-circle.svg'
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1 style={{margin: '24px 0', fontSize: '48px'}}>Want to Bring Your Idea to Reality?</h1>
        <p style={{margin: '16px 0 32px 0', fontSize: '24px', width: '60%'}}>I’m ready to get your idea designed to fit your target customer and growth together in IT industry.</p>
        <div className='btn-holder'>
          <MainButton/>
          <OutlinedButton/>
        </div>
      </div>
      <div className='hero-img-container'>
        <div className='svg-container'>
          <svg width="524" height="512" viewBox="0 0 524 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="268" cy="256" r="256" fill="#0F5E8B" fill-opacity="0.1"/>
            <circle cx="64" cy="100" r="64" fill="#BEDAEA"/>
          </svg>
        </div>
        <img className='hero-img' src={require('../../../assets/hero-image.png')} alt='vireak sok'/>
      </div>
    </div>
  )
}

export default Hero