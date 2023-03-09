import React from 'react'
import './Experience.css'
import ExperienceCard from '../../card/experienceCard/ExperienceCard'

const Experience = () => {
  return (
    <div className='experience-container'>
      <h1>Experience</h1>
      <div className='experience-card-container'>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
      </div>
    </div>
  )
}

export default Experience