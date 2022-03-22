import React, { useState } from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {HiUserGroup} from 'react-icons/hi'
import {HiOutlineDocumentSearch} from 'react-icons/hi'

const MobileNav = () => {
    let [ActiveNav, SetActiveNav] = useState('#');
  return (
      <nav class = "mobile_nav">
      <a href = "#header" onClick={() => SetActiveNav('#header') } className={ActiveNav === "#header" ? 'active' : ''}>
          <AiFillHome/></a>
      <a href = "#About" onClick={() => SetActiveNav('#About')} className={ActiveNav === "#About" ? 'active' : ''}>
      <HiUserGroup/></a>
      <a href = "#Profile" onClick={() => SetActiveNav('#Profile')} className={ActiveNav === "#Profile" ? 'active' : ''}>
      <HiOutlineDocumentSearch/></a>
    </nav>
  )
}

export default MobileNav