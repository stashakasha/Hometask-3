import React, { useState } from "react";
import { useTheme } from '../hooks/use-theme'
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaSun, FaMoon  } from "react-icons/fa";
import Logo from "../assets/img/logo.png";


const Header = () => {
    const [nav, setNav] = useState(false);
    const { theme, setTheme } = useTheme()
    const handleLightThemeClick = () => {
        setTheme('light')
        sessionStorage.setItem('app-theme', theme)
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
        sessionStorage.setItem('app-theme', theme)
    }
    return(
        <div className="container">
            <header className="header" id="header">
                <div className="header__logo">
                    <Link className="header__logo-link" ><img className="header__logo-img" src={Logo} alt={"company logo"}/></Link>
                </div>
                <nav className="header__nav">
                    <ul className={
                        nav ? "header__nav-list active" : "header__nav-list"
                        }>
                        <li className="header__nav-item">
                            <Link to="header" smooth={true} offset = {-300} className="header__nav-link" onClick={() => setNav(false)}>Home</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="stats" smooth={true} duration={2500} className="header__nav-link" onClick={() => setNav(false)}>Project</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="services" smooth={true}  className="header__nav-link" onClick={() => setNav(false)}>Services</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="about" smooth={true} duration={2500} offset = {-50} className="header__nav-link" onClick={() => setNav(false)}>About</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="news" smooth={true} duration={2500} className="header__nav-link" onClick={() => setNav(false)}>Blog</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="subscribe" smooth={true} duration={2500} offset = {-100} className="header__nav-link" onClick={() => setNav(false)}>Shop</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="footer" smooth={true} duration={2500} offset = {-300} className="header__nav-link" onClick={() => setNav(false)}>Contact</Link>
                        </li>
                        <li className=" header__nav-btn btn">
                            <Link className="header__nav-link-btn" onClick={() => setNav(false)}>Sign Up</Link>
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