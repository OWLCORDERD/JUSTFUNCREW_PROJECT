import React from 'react'
import './about.css'
import AboutImg1 from '../../assets/Class101.jpg'
import AboutImg2 from '../../assets/FromTheStreet.jpg'
import AboutImg3 from '../../assets/저스트펀 크루.jpg'



const About = () => {
  return (
    <section id = "About">
    <h1 className = "About-title">About</h1>

    <div className= "About_container">
        <div className= "About_img">
        <div className= "Bottom_shadow">
        </div>
      </div>

      <div className= "About_contents">

        <div className= "About_contents_title">
        <h1 class = "About-content"><span>WE ARE The FIRST KOREAN</span> <span>STREET WORKOUT TEAM</span></h1>
          <h1 class = "About-sub-content">FULL BODY EXERCISE <br></br> ONLINE & OFFLINE CLASSES</h1>
          </div>

        <div className = "About_contents_items">
          <div class = "About_contents_item">
            <img src = {AboutImg1} alt = "About-img"></img>
            <h1 class = "item_hover">CLASS 101</h1>
          </div>
          <div class = "About_contents_item">
            <img src = {AboutImg2} alt = "About-img"></img>
            <h1 class = "item_hover">FROM THE SREET</h1>
          </div>
          <div class = "About_contents_item">
            <img src = {AboutImg3} alt = "About-img"></img>
            <h1 class = "item_hover">YOUTUBE</h1>
          </div>
        </div>

      </div>
    </div>
    </section>
  )
}

export default About