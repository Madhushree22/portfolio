import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './certificate.css';
import images from '../Constants/images'


function CarouselFadeExample() {
    return (
        <div className='app__certificate' id='certificate' >
            <div className='app__certificate-alone' style={{
                backgroundImage:
                    "url('https://static.wixstatic.com/media/7e12ea_45c21e216c99465d801aee77d1d279a1~mv2.jpg/v1/fill/w_1024,h_768,al_c,q_85,enc_auto/7e12ea_45c21e216c99465d801aee77d1d279a1~mv2.jpg')",

            }}>    <h2> <center>Certificates</center></h2>
                <div className='app__certificate__'>

                    <Carousel fade>
                        <Carousel.Item className='item'>
                            <img src={images.java} height={500} width={800} className='img' />

                            <Carousel.Caption className='caption'>
                                <p className="caption">
                                    SKILLS: Java | Sql | Web Technology | React js
                                </p>
                                <button className='custom__buttonn' onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://drive.google.com/file/d/1SgFkG7eiQp2Kil23M0jdrqfeqdFD7acQ/view?usp=drive_link', '_blank')
                                }}>View Certificate! </button>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item className='item'>
                            <img src={images.web_design} height={500} width={800} className='img' />
                            <Carousel.Caption className='caption'>
                                {/* <h3>Third slide label</h3> */}
                                <p className="caption" >
                                    SKILLS: HTML| CSS
                                </p>
                                <button className='custom__buttonn' onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://drive.google.com/file/d/12nNZz92fRUPda4DYUjJxub3ua24G0tlM/view?usp=drive_link', '_blank')
                                }}>View Certificate! </button>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className='item'>
                            <img src={images.html} height={500} width={800} className='img' />
                            <Carousel.Caption className='caption'>
                                {/* <h3>Third slide label</h3> */}
                                <p className="caption">
                                    SKILLS: HTML5
                                </p>
                                <button className='custom__buttonn' onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://drive.google.com/file/d/12wt7CB8bREQbfbZL680AmNKBmpvfz2KD/view?usp=sharing', '_blank')
                                }}>View Certificate! </button>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item className='item'>
                            <img src={images.css} height={500} width={800} className='img' />
                            <Carousel.Caption className='caption'>
                                {/* <h3>Third slide label</h3> */}
                                <p className="caption">
                                    SKILLS: CSS3
                                </p>
                                <button className='custom__buttonn' onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://drive.google.com/file/d/1MTfmNeUUpB5v4OZ5aw2Na-jxP-HTc5Zp/view?usp=sharing', '_blank')
                                }}>View Certificate! </button>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item className='item'>
                            <img src={images.angular} height={500} width={800} className='img' />
                            <Carousel.Caption className='caption'>
                                {/* <h3>Third slide label</h3> */}
                                <p className="caption">
                                    SKILLS: Angular Js | Angular7
                                </p>
                                <button className='custom__buttonn' onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://drive.google.com/file/d/1HEww5JHFEnXsWSRZ5XR-grD81EKC7oH5/view?usp=sharing', '_blank')
                                }}>View Certificate! </button>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item className='item'>
                            <img src={images.ui} height={500} width={800} className='img' />
                            <Carousel.Caption className='caption'>
                                {/* <h3>Third slide label</h3> */}
                                <p className="caption">
                                    SKILLS: User Experience | User Interface
                                </p>
                                <button className='custom__buttonn' onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://drive.google.com/file/d/1u_Os14P3Lq-FBvBKVViwe6EPw4t0Nbi6/view?usp=sharing', '_blank')
                                }}>View Certificate! </button>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item className='item'>
                            <img src={images.sql} height={500} width={800} className='img' />
                            <Carousel.Caption className='caption'>
                                {/* <h3>Third slide label</h3> */}
                                <p className="caption">
                                    SKILLS: SQL Database
                                </p>
                                <button className='custom__buttonn' onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://drive.google.com/file/d/1TIhvvCuZrhgzEljf_OCI_oUF0IsvqMxz/view?usp=sharing', '_blank')
                                }}>View Certificate! </button>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item className='item'>
                            <img src={images.virtual} height={500} width={800} className='img' />
                            <Carousel.Caption className='caption'>
                                {/* <h3>Third slide label</h3> */}
                                <p className="caption">
                                    SKILLS: Software Development LifeCycle (SDLC) | Debugging algorithms
                                </p>
                                <button className='custom__buttonn' onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://drive.google.com/file/d/14Yn5w6sjqtpIT6dnOrkMx7BO5zuNSWam/view?usp=sharing', '_blank')
                                }}>View Certificate! </button>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item className='item'>
                            <img src={images.cloud} height={500} width={800} className='img' />
                            <Carousel.Caption className='caption'>
                                {/* <h3>Third slide label</h3> */}
                                <p className="caption">
                                    SKILLS: Cloud Computing Basics (cloud 101)
                                </p>
                                <button className='custom__buttonn' onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://drive.google.com/file/d/14Yn5w6sjqtpIT6dnOrkMx7BO5zuNSWam/view?usp=sharing', '_blank')
                                }}>View Certificate! </button>
                            </Carousel.Caption>
                        </Carousel.Item>



                    </Carousel>

                </div>
            </div>

            <div className='app__projects' style={{
                backgroundImage:
                    "url('https://static.wixstatic.com/media/7e12ea_45c21e216c99465d801aee77d1d279a1~mv2.jpg/v1/fill/w_1024,h_768,al_c,q_85,enc_auto/7e12ea_45c21e216c99465d801aee77d1d279a1~mv2.jpg')",

            }}>
                <h2>Projects</h2>
                <div className='app__project__'>

                    <Carousel fade>
                        <Carousel.Item className='item'>
                            <img src={images.show} height={500} width={800} className='img2' />

                            <Carousel.Caption className='caption'>
                                <p className="heading">
                                    Show_booking Clone ( back-end )
                                    <p> Using SpringBoot</p>
                                </p>

                                <button className='custom__buttonn' onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://github.com/Madhushree22/ShowBooking_clone-back-end.git', '_blank')
                                }}>Source Code!  </button>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className='item'>
                            <img src={images.travel} height={500} width={800} className='img2' />

                            <Carousel.Caption className='caption'>

                                <p className="heading">
                                    Travelling_landing Page ( front-end )
                                    <p> Using React Js</p>
                                </p>
                                <button className='custom__buttonn' onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://github.com/Madhushree22/travelling_landingPage.git', '_blank')
                                }}>Source Code! </button>
                            </Carousel.Caption>
                        </Carousel.Item>


                    </Carousel>

                </div>
            </div>
        </div>


    );
}

export default CarouselFadeExample;
