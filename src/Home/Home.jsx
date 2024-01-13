import React from 'react'
import './home.css';
import madhu from '../asset/madhu.jpg';
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import images from '../Constants/images'

const Home = () => {
  return (
    <div className='app'>
      <div className="app__home" id="home" style={{
        backgroundImage:
          "url('https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/N13e7awhgiljgescq/videoblocks-bouncing-arrow-pointing-down-symbol-of-attention-with-copy-space_r59tly9fu_thumbnail-1080_01.png')",
        height: "100vh",
        marginTop: "-70px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>

        <div className='app__homee__'>
          <div className='app__home__'>

            <div className="home" id="home">
              <div className='app__home-info'>
                <pre>
                  <h2><b><i>HELLO EVERYONE,</i></b></h2>
                  <h3><b>MYSELF MADHUSHREE S</b></h3>
                  <h4>BCA Graduate and Java Full Stack Developer</h4>
                </pre>
                <button
                  type="button"
                  className='custom__button'
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://drive.google.com/file/d/1pk8VGHt1euAmzAzjvuNcRwkINf6XUejN/view?usp=drive_link', '_blank')
                  }}
                > Dowload CV</button>      </div>
              <div className='app__home-img'>
                <div className='app__home-img-containner'>
                  <img src={madhu} height={350} width={300} />
                </div>

              </div>
            </div>

            <div className='home__footer'>
              <div className='home__footer-icons'>
                <a href="https://in.linkedin.com/in/madhushrees22" target='blank'><CiLinkedin className='home__footer-linkedin' style={{ color: "wheat" }} /></a>
                <a href="https://github.com/Madhushree22" target='blank'><FaSquareGithub className='home__footer-github' style={{ color: "wheat" }} /></a>

              </div>
            </div>



          </div>
        </div>
      </div>
    </div>


  )
}

export default Home;