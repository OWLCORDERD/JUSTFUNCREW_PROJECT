import React from 'react'
import './header.css'
import profileImg from '../../assets/저스트펀 크루.jpg'
import HeaderSocial from '../header/HeaderSocial'

const Header = () => {

  return (
    <section id = "header">

    <div className = "header__container">

      <div className = "profile-box">
      <img src = {profileImg} alt = "img"></img>
      </div>

      <div className = "profile-title">
        <h1>JUST FUN CREW</h1>
      </div>

      <div className = "profile-sub-title">
        <p>THE KOREAN NO 1 PLANCHE CREW</p>
      </div>

      <HeaderSocial />

      <button type = "submit"></button>

      <div className = "scroll-down">
        <h1>scroll</h1>
      </div>

      <div className = "scroll">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>

    </section>
  )
}

export default Header