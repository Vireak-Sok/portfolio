import React from 'react'
import './Button.css'
import { FaRegFilePdf } from "react-icons/fa";

const MainButton = () => {

  return (
    <div class="button" id="button">
      <div id="icon">
        <a href='../../assets/resume-for-download.pdf' download={true}>
        <FaRegFilePdf style={{color:'white', width:'1.2rem', height:'auto'}}/>
        </a>
      </div>
      <p>resume</p>
    </div>
  )
}

export default MainButton