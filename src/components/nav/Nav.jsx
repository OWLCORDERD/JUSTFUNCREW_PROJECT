import React, { useState } from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {HiUserGroup} from 'react-icons/hi'
import {HiOutlineDocumentSearch} from 'react-icons/hi'

const Nav = () => {
    let [ActiveNav, SetActiveNav] = useState('#');
  return (
      <nav>
          <a href = "#header" onClick={() => SetActiveNav('#') } className={ActiveNav === '#' ? 'active' : ''}>
              <AiFillHome/></a>
          <a href = "#About" onClick={() => SetActiveNav('#About') } className={ActiveNav === '#About' ? 'active' : ''}>
              <HiOutlineDocumentSearch/></a>
          <a href = "#Profile" onClick={() => SetActiveNav('#Profile') } className={ActiveNav === '#Profile' ? 'active' : ''}>
              <HiUserGroup/></a>
      </nav>
  )
}

export default Nav