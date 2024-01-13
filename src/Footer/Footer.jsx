import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import './footer.css'

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-outer'>
        <div className='app__footer-name'>
          <center><h2>Madhushree S</h2></center>
        </div>
        <div className='app__footer-info'>
          <center><h5>I am Madhushree S and this is my Personal Website</h5></center>
        </div>

        <div className='app__footer-icons'>
          {/* <a href="https://in.linkedin.com/in/madhushrees22"><CiLinkedin className='home__footer-linkedin' style={{ color: "wheat" }} /></a>
          <a href="https://github.com/Madhushree22"><FaSquareGithub className='home__footer-github' style={{ color: "wheat" }} /></a> */}
          <a href="https://in.linkedin.com/in/madhushrees22" target='blank'><CiLinkedin  className='linked'/></a>
          <a href="https://github.com/Madhushree22" target='blank'><FaSquareGithub  className='git'/></a>
        </div>

        <div className='app__footer-rights'>
          <center><p>&copy; 2024 Madhushree All rights reserved </p></center>

        </div>
      </div>

    </div>
  )
}

export default Footer