import React from 'react'
import './Profile.css'
import Director from '../../assets/정한별 프로필.jpg'
import member1 from '../../assets/이준명 프로필.jpg'
import member2 from '../../assets/정우석 프로필.jpg'
import member3 from '../../assets/송우석 프로필.jpg'
import member4 from '../../assets/서정욱 프로필.JPG'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'

const Profile = () => {
  return (
    <section id = "Profile">
      <div className= "Profile_title"><h1>PROFILE</h1></div>
    <div className = "Profile_container">
      <div className = "Profile_Director">
        <img src = {Director} alt = "director"></img>
        <div className= "Director_content">
        <h1>대표</h1>
        <h1>정한별</h1>
        <div className= "Director_social">
        <a href = "#"><AiOutlineInstagram /></a>
        <a href = "#"><AiOutlineYoutube/></a>
        </div>
        </div>
      </div>

      <div className= "Profile_member">
        <div className = "LeeJunMyeong">
          <img src = {member1} alt = "member1"></img>
        </div>
        <div className = "JungWooSeok">
          <img src = {member2} alt = "member2"></img>
      </div>
      <div className = "SongWooSeok">
        <img src = {member3} alt = "member3"></img>
      </div>
      <div className = "SeoJungWook">
        <img src = {member4} alt = "member4"></img>
      </div>
      </div>

      </div>
    </section>
  )
}

export default Profile