import React from 'react'
import OtherProjectCard from '../../card/otherProjectCard/OtherProjectCard'
import './OtherProject.css'

const OtherProject = () => {
  return (
    <div className='other-project-container'>
      <h1 style={{margin: '24px 0'}}>Other Projects</h1>
      <div className='other-project-card-container'>
        <OtherProjectCard/>
        <OtherProjectCard/>
        <OtherProjectCard/>
        <OtherProjectCard/>
      </div>
    </div>
  )
}

export default OtherProject