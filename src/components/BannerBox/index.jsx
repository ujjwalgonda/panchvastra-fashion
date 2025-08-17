import React from 'react'
import { Link } from 'react-router-dom'

const BannerBox = (props) => {
  return (
    <div className='box bannerBox overflow-hidden rounded-lg group'>
      <Link to='/'>
    <img src={props.img} className='w-full transition-all group-hover:scale-110 group-hover:rotate-3' alt='banner'/>
    </Link>
  </div>
  
  )
}

export default BannerBox
