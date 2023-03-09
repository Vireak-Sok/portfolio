import React from 'react'
import './Button.css'

const OutlinedButton = () => {
  const sendMail = () => {
    window.open('mailto:sokvireak2000@gmail.com');
  }
  return (
    <div className='outlined-btn' onClick={() => sendMail()}>Send Mail</div>
  )
}

export default OutlinedButton