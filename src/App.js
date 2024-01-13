import React from 'react'
import Navbar from "./Navbar/Navbar"
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Certificate from './certificate&project/Certificate';
import Contactform from './Contact_form/Contactform'
import Footer from './Footer/Footer';

import './app.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certificate />
      <Contact />
      <Contactform />
      <Footer />
    </>

  )
}

export default App

// @media screen and(max - width: 1250px) { }

// @media screen and(max - width: 910px) { }

// @media screen and(max - width: 850px) { }

// @media screen and(max - width: 750px) { }

// @media screen and(max - width: 660px) { }

// @media screen and(max - width: 510px) {}

//  box-shadow: 1px 1px 5px 1px rgb(42, 87, 223);