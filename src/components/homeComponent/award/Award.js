import React from 'react'
import './Award.css'
import AwardCard from '../../card/awardCard/AwardCard'

const Award = () => {
  return (
    <div className='award-container'>
      <h1 style={{margin: '24px 0'}}>Award</h1>
      <div className='award-card-container'>
        <AwardCard/>
        <AwardCard/>
        <AwardCard/>
      </div>
    </div>
  )
}

export default Award