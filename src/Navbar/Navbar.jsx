import React from 'react'
import './navbar.css';
import { GiHamburgerMenu } from "react-icons/gi"; //icons
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className='navbar' >
            <ul className='navbar__links'>
                <li><a href='#home'>HOME</a></li>
                <li><a href='#about'>ABOUT</a></li>
                <li><a href='#skills'>SKILLS</a></li>
                <li><a href='#certificate'>CERTIFICATES & PROJECTS</a></li>
                <li><a href='#contact'>CONTACT</a></li>
            </ul>
            <div className='navbar__smallscreen' >
                <GiHamburgerMenu fontSize={20} style={{ color: "white" }} onClick={() => { setToggleMenu(true) }} className='navbar__open' />
                {toggleMenu && (
                    <div className='navbar__smallscreen-overlay'>
                        <ul className='navbar__smallscreen-links'>
                            <IoMdClose fontSize={20} onClick={() => setToggleMenu(false)} className='navbar__close' />
                            <li><a href='#home' onClick={() => setToggleMenu(false)}>HOME</a></li>
                            <li><a href='#about' onClick={() => setToggleMenu(false)}>ABOUT</a></li>
                            <li><a href='#skills' onClick={() => setToggleMenu(false)}>SKILLS</a></li>
                            <li><a href='#certificate' onClick={() => setToggleMenu(false)}>CERTIFICATES & PROJECTS</a></li>
                            <li><a href='#contact' onClick={() => setToggleMenu(false)}>CONTACT</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>


    )
}

export default Navbar