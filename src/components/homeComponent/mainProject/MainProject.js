import React from 'react'
import './MainProject.css'
import MainProjectCard from '../../card/mainProjectCard/MainProjectCard'

const MainProject = () => {
  return (
    <>
    <div className='seperator' style={{height: '300px', width: '100%', backgroundImage: 'linear-gradient(var(--mainBlue), var(--linkBlue))'}}/>
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