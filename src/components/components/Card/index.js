import React from 'react'
import style from './style.css'

export default function Card({title,imageUrl, body, profileImg, profileName}) {
  return (
    <div className='card-container' >

      <div className='image-container' >
        <img src={imageUrl} alt='' />
      </div>

      <div className="card-content" >
        <div className="card-title" >
          <h3>
            {title}
          </h3>
        </div>

        <div className="card-body" >  
          <img src={profileImg} alt='' />
          <p id='name' >{profileName}</p>
        </div>
      </div>

      


    </div>
  )
}
