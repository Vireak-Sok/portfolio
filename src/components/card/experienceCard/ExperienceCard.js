import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = () => {
  const ExperienceIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M28 0C29.1046 0 30 0.895431 30 2V28C30 29.1046 29.1046 30 28 30H2C0.89543 30 0 29.1046 0 28V2C0 0.89543 0.895431 0 2 0H28ZM17 5C18.6567 5 20 6.34314 20 8H24C25.6567 8 27 9.34314 27 11V22C27 23.6569 25.6567 25 24 25H6C4.34326 25 3 23.6569 3 22V11C3 9.34314 4.34326 8 6 8H10C10 6.34314 11.3433 5 13 5H17ZM12 8H18C18 7.44775 17.5522 7 17 7H13C12.4478 7 12 7.44775 12 8ZM5 22V14.3824C7.1499 15.056 10.8262 15.5 15 15.5C19.1738 15.5 22.8501 15.056 25 14.3824V22C25 22.5522 24.5522 23 24 23H6C5.44775 23 5 22.5522 5 22ZM15 13.5C19.1738 13.5 22.8501 13.056 25 12.3824V11C25 10.4478 24.5522 10 24 10H6C5.44775 10 5 10.4478 5 11V12.3824C7.1499 13.056 10.8262 13.5 15 13.5Z" fill="#0075B7" fill-opacity="0.6"/>
                          </svg>
  return (
    <div className='experience-card'>
        <div className='experience-text'>
            <p className='experience-title'> UX/UI Designer</p>
            <p className='experience-company'> Napt</p>
            <p className='experience-duration'> Jan 2019 - Jun 2019</p>
        </div>
        <div className='experience-icon'>
          {ExperienceIcon}
        </div>
    </div>
  )
}

export default ExperienceCard