import React from 'react';
import MainButton from '../../button/MainButton';
import OutlinedButton from '../../button/OutlinedButton';
// import backgrounCircle from '../../../assets/background-circle.svg'
import './Hero.css';
import Lottie from 'react-lottie';
import animationData from '../../../assets/lotties/122224-profile-avatar-of-older-man'

const Hero = ({scrollToFunction, workRef}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const dotBg = <svg width="121" height="121" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="5" height="5" fill="#0075B7"/>
  <rect x="29" width="5" height="5" fill="#0075B7"/>
  <rect x="58" width="5" height="5" fill="#0075B7"/>
  <rect x="87" width="5" height="5" fill="#0075B7"/>
  <rect x="116" width="5" height="5" fill="#0075B7"/>
  <rect y="29" width="5" height="5" fill="#0075B7"/>
  <rect x="29" y="29" width="5" height="5" fill="#0075B7"/>
  <rect x="58" y="29" width="5" height="5" fill="#0075B7"/>
  <rect x="87" y="29" width="5" height="5" fill="#0075B7"/>
  <rect x="116" y="29" width="5" height="5" fill="#0075B7"/>
  <rect y="58" width="5" height="5" fill="#0075B7"/>
  <rect x="29" y="58" width="5" height="5" fill="#0075B7"/>
  <rect x="58" y="58" width="5" height="5" fill="#0075B7"/>
  <rect x="87" y="58" width="5" height="5" fill="#0075B7"/>
  <rect x="116" y="58" width="5" height="5" fill="#0075B7"/>
  <rect y="87" width="5" height="5" fill="#0075B7"/>
  <rect x="29" y="87" width="5" height="5" fill="#0075B7"/>
  <rect x="58" y="87" width="5" height="5" fill="#0075B7"/>
  <rect x="87" y="87" width="5" height="5" fill="#0075B7"/>
  <rect x="116" y="87" width="5" height="5" fill="#0075B7"/>
  <rect y="116" width="5" height="5" fill="#0075B7"/>
  <rect x="29" y="116" width="5" height="5" fill="#0075B7"/>
  <rect x="58" y="116" width="5" height="5" fill="#0075B7"/>
  <rect x="87" y="116" width="5" height="5" fill="#0075B7"/>
  <rect x="116" y="116" width="5" height="5" fill="#0075B7"/>
  </svg>
  
  return (
    <div className='hero-container'>
      <div className='left-dot-bg'>{dotBg}</div>
      <div className='left-container'>
        <p>Browse the projects that I’ve worked on</p>
        <MainButton scrollToFunction={scrollToFunction} workRef={workRef}/>
      </div>
      <div className='middle-container'>
        <div style={{width: '20rem', height: '20rem', position: 'absolute', left: '50%', top: '48%', transform: 'translate(-50%, -50%)', borderRadius: '170px', border: '.5px var(--lightBlue) solid'}}/>
        <div style={{width: '25rem', height: '25rem', position: 'absolute', left: '50%', top: '48%', transform: 'translate(-50%, -50%)', borderRadius: '200px', border: '.5px var(--lightBlue) solid'}}/>
        <div style={{width: '30rem', height: '30rem', position: 'absolute', left: '50%', top: '48%', transform: 'translate(-50%, -50%)', borderRadius: '250px', border: '.5px var(--lightBlue) solid'}}/>
        <Lottie 
	        options={defaultOptions}
          height={400}
          width={400}
          // style={{backgroundColor: 'blue'}}
        />
      </div>
      <div className='right-container'>
        <p>Leave me a message for further discussion</p>
        <OutlinedButton/>
      </div>
      <div className='right-dot-bg'>{dotBg}</div>
    </div>
  )

  // return (
  //   <div className='hero'>
  //     <div className='hero-text'>
  //       <h1 style={{margin: '24px 0', fontSize: '48px'}}>Want to Bring Your Idea to Reality?</h1>
  //       <p style={{margin: '16px 0 32px 0', fontSize: '24px', width: '60%'}}>I’m ready to get your idea designed to fit your target customer and growth together in IT industry.</p>
  //       <div className='btn-holder'>
  //         <MainButton/>
  //         <OutlinedButton/>
  //       </div>
  //     </div>
  //     <div className='hero-img-container'>
  //     <Lottie 
	//     options={defaultOptions}
  //       height={400}
  //       width={400}
  //     />
  //       {/* <div className='svg-container'>
  //         <svg width="524" height="512" viewBox="0 0 524 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  //           <circle cx="268" cy="256" r="256" fill="#0F5E8B" fill-opacity="0.1"/>
  //           <circle cx="64" cy="100" r="64" fill="#BEDAEA"/>
  //         </svg>
  //       </div>
  //       <img className='hero-img' src={require('../../../assets/hero-image.png')} alt='vireak sok'/> */}
  //     </div>
  //   </div>
  // )
}

export default Hero