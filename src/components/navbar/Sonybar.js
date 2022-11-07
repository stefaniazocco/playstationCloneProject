import React from 'react'
import "../navbar/navbar.scss"
import SonyLogo from "../../assets/icons/sony-logo.png"

const Sonybar = () => {
    
  return (
    <div class="sony-bar">
        <span class="logo-sony">
          <img class="mb-1 mx-3" src={SonyLogo} alt="" />
        </span>
      </div>
  )
}

export default Sonybar