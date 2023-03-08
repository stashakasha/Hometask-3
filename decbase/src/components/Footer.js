import React from "react";
import { Link } from 'react-scroll';
import { RiFacebookFill, RiInstagramLine, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import Logo from "../assets/img/logo.png"

let today = new Date(); 
let year = today.getFullYear(); 

const Footer = () => {
    return(
        <div className="container">
            <footer className="footer" id="footer">
                <div className="footer__logo">
                    <Link className="footer__logo-icon" to="header" smooth={true} duration={2500} offset = {-300}><img className="footer__logo-icon" src={Logo} alt={"company logo"}/></Link>
                    <p className="footer__logo-desc">But i must explain to you all this mistaken idea of dencouncing pleasure.</p>
                </div>
                <nav className="footer__nav">
                <div className="footer__links">
                    <p className="footer__links-title">Quick Links</p>
                    <ul className="footer__links-list">
                        <li className="footer__links-item"><Link to="about" smooth={true} duration={2500} offset = {-100}>About Our Company</Link></li>
                        <li className="footer__links-item"><Link to="services" smooth={true} offset = {-300}>Services WE provide</Link></li>
                        <li className="footer__links-item"><Link href="##">Career & Opportunity</Link></li>
                        <li className="footer__links-item"><Link href="##">Privacy & policy</Link></li>
                        <li className="footer__links-item"><Link to="subscribe" smooth={true} offset = {-100}>Contact US</Link></li>
                    </ul>
                </div>
                <div className="footer__company">
                    <p className="footer__company-title">Company</p>
                    <ul className="footer__company-list">
                        <li className="footer__company-item"><Link to="about" smooth={true} duration={2500} offset = {-100}>About Company</Link></li>
                        <li className="footer__company-item"><Link to="testimonials" smooth={true}  offset = {-100}>Our Testimonials</Link></li>
                        <li className="footer__company-item"><Link to="news" smooth={true} duration={2500}>Latest News</Link></li>
                        <li className="footer__company-item"><Link to="stats" smooth={true} duration={2500}>Our misson</Link></li>
                        <li className="footer__company-item"><Link to="subscribe" smooth={true} offset = {-300}>Get a free Quot</Link></li>
                    </ul>
                </div>
                <div className="footer__contact">
                    <p className="footer__contact-title">Contact us</p>
                    <ul className="footer__contact-list">
                        <li className="footer__contact-item"><a href="##">Sagrada Familia, Herba</a></li>
                        <li className="footer__contact-item"><a href="##">Street Front USA</a></li>
                        <li className="footer__contact-item"><a href="mailto:brandoxide@gmail.com">brandoxide@gmail.com</a></li>
                        <li className="footer__contact-item"><a href="tel:002-568423591">002-568423591</a></li>
                    </ul>
                </div>
                </nav>
                <div className="footer__socials">
                    <p className="footer__socials-title">Follow Us</p>
                    <ul className="footer__socials-list">
                        <li className="footer__socials-item"><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><RiFacebookFill /></a></li>
                        <li className="footer__socials-item"><a href="https://www.instagram.com/" rel="noreferrer" target="_blank"><RiInstagramLine /></a></li>
                        <li className="footer__socials-item"><a href="https://www.twitter.com/" rel="noreferrer" target="_blank"><RiTwitterFill /></a></li>
                        <li className="footer__socials-item"><a href="https://www.linkedin.com/" rel="noreferrer" target="_blank"><RiLinkedinFill /></a></li>
                    </ul>
                </div>
            </footer>
            <hr className="footer__line"/>
            <p className="footer__copy">Copyright @ {year} <span>Brandoxide</span>.all right reserved.</p>
        </div>
    );
}

export default Footer;