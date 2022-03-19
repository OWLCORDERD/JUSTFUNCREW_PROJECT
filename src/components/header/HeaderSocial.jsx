import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className = 'header-social'>
        <a href="https://www.facebook.com/SeoulStreetworkout" target="_blank"><FaFacebook /></a>
        <a href="https://www.instagram.com/justfun_crew/" target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocial