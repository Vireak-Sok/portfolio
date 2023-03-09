import React from 'react'
import './Button.css'

const MainButton = ({scrollToFunction, workRef}) => {
  return (
    <div className='main-btn' onClick={() => scrollToFunction(workRef)}>See Work</div>
  )
}

export default MainButton