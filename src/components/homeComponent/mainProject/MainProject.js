import React from 'react'
import './MainProject.css'
import MainProjectCard from '../../card/mainProjectCard/MainProjectCard'

const MainProject = () => {
  return (
    <>
    <div style={{display:'flex', alignItems:'center', gap:'1rem', justifyContent:'center', padding:'1rem 0'}}>
      <hr style={{width: '10%', backgroundColor: 'Gainsboro', height: '1px', color: 'none', margin: 0}}/>
      <h3 style={{fontSize:'.9rem', fontWeight: 500, color:'Grey'}}>My Works</h3>
      <hr style={{width: '10%', backgroundColor: 'Gainsboro', height: '1px', color: 'none', margin: 0}}/>
    </div>
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