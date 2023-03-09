import React from 'react'
import EducationCard from '../../card/educationCard/EducationCard'
import './Education.css'

const Education = () => {
  return (
    <div className='education-container'>
      <h1>Education</h1>
      <div className='education-card-container'>
        <EducationCard/>
        <EducationCard/>
        <EducationCard/>
      </div>
    </div>
  )
}

export default Education