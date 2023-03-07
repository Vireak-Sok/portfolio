import React from 'react'
import './MainProject.css'
import MainProjectCard from '../../card/mainProjectCard/MainProjectCard'

const MainProject = () => {
  return (
    <>
    <div className='seperator' style={{height: '300px', width: '100%', backgroundImage: 'linear-gradient(#0F5E8B, #0075B7)'}}/>
    <div className='main-project-container'>
      <div className='row-container'>
        <MainProjectCard/>
        <MainProjectCard/>
      </div>
      <div className='row-container'>
        <MainProjectCard/>
        <MainProjectCard/>
      </div>
    </div>
    </>
  )
}

export default MainProject