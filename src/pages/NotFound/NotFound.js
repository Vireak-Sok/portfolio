import React from 'react'
import './NotFound.css'
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/404-error.json'

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const goHome = () => {
    window.location.href='/'
  }

  return (
    <div className='error-container'>
      <Lottie 
        style={{width:'80%', maxWidth:'700px', height:'auto'}}
        options={defaultOptions}
      />
      <div className='go-to-homepage-button' onClick={() => goHome()}>Back to Homepage</div>
  </div>
  )
}

export default NotFound