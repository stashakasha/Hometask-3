import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from "../assets/img/logo.png";


const Header = () => {
    const [nav, setNav] = useState(false);
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
                <div onClick={() => setNav(!nav)} className="header__mobile-btn">
                    {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
                </div>
            </header>
            
        </div>
    );
}

export default Header;