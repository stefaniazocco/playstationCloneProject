import React from 'react'
import "../navbar/navbar.scss"
import SonyLogo from "../../assets/icons/sony-logo.png"

const Sonybar = () => {
    
  return (
    <div className="sony-bar">
        <span className="logo-sony">
          <img className="mb-1 mx-3" src={SonyLogo} alt="" />
        </span>
      </div>
  )
}

export default Sonybar