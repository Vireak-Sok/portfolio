import React from 'react'
import './MainProject.css'
import MainProjectCard from '../../card/mainProjectCard/MainProjectCard'

const MainProject = () => {
  const project1 = require('../../../assets/projectThumbnail/mobileAppProject.png')
  const project2 = require('../../../assets/projectThumbnail/webProject.png')
  const project3 = require('../../../assets/projectThumbnail/tabletProject.png')
  const project4 = require('../../../assets/projectThumbnail/watchProject.png')
  return (
    <>
    <div className='seperator' style={{height: '18rem', width: '100%', backgroundImage: 'linear-gradient(var(--mainBlue), var(--linkBlue))'}}/>
    <div className='main-project-container'>
      <div className='row-container'>
        <MainProjectCard thumbnail={project1} bgColor={'#14949A'} shadow={'#006B71 0px 5px 15px'}/>
        <MainProjectCard thumbnail={project2} bgColor={'#56965E'} shadow={'#376A3D 0px 5px 15px'}/>
      </div>
      <div className='row-container'>
        <MainProjectCard thumbnail={project3} bgColor={'#fff'} shadow={'#ff0 0px 5px 15px'}/>
        <MainProjectCard thumbnail={project4} bgColor={'#825E9E'} shadow={'#2A0844 0px 5px 15px'}/>
      </div>
    </div>
    </>
  )
}

export default MainProject