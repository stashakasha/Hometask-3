import React, { useState } from "react";
import { useTheme } from '../hooks/use-theme'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaSun, FaMoon  } from "react-icons/fa";
import Logo from "../assets/img/logo.png";


const Header = () => {
    const [nav, setNav] = useState(false);
    const { theme, setTheme } = useTheme()
    const handleLightThemeClick = () => {
        setTheme('light')
        localStorage.setItem('app-theme', theme)
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
        localStorage.setItem('app-theme', theme)
    }
    return(
        <div className="container">
            <header className="header">
                <div className="header__logo">
                    <a className="header__logo-link" href="##" ><img className="header__logo-img" src={Logo} alt={"company logo"}/></a>
                </div>
                <nav className="header__nav">
                    <ul className={
                        nav ? "header__nav-list active" : "header__nav-list"
                        }>
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="##" onClick={() => setNav(false)}>Home</a>
                        </li>
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="##" onClick={() => setNav(false)}>Project</a>
                        </li>
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="##" onClick={() => setNav(false)}>Services</a>
                        </li>
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="##" onClick={() => setNav(false)}>About</a>
                        </li>
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="##" onClick={() => setNav(false)}>Blog</a>
                        </li>
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="##" onClick={() => setNav(false)}>Shop</a>
                        </li>
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="##" onClick={() => setNav(false)}>Contact</a>
                        </li>
                        <li className=" header__nav-btn btn">
                            <a className="header__nav-link-btn" href="##" onClick={() => setNav(false)}>Sign Up</a>
                        </li>
                    </ul>
                </nav>
                <div className="header__btn">
                    <div className="header__theme-btn">
                        { theme==="light" ? <FaMoon className="header__theam-btn" onClick={handleDarkThemeClick}/>
                        : <FaSun className="header__theam-btn" onClick={handleLightThemeClick} />}
                    </div>
                    <div onClick={() => setNav(!nav)} className="header__mobile-btn">
                        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>
                    
                </div>
            </header>
            
        </div>
    );
}

export default Header;