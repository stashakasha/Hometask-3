import React from "react";
import { RiFacebookFill, RiInstagramLine, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import Logo from "../assets/img/logo.png"

const Footer = () => {
    return(
        <div className="container">
            <footer className="footer">
                <div className="footer__logo">
                    <a className="footer__logo-icon" href="##"><img className="footer__logo-icon" src={Logo} alt={"company logo"}/></a>
                    <p className="footer__logo-desc">But i must explain to you all this mistaken idea of dencouncing pleasure.</p>
                </div>
                <nav className="footer__nav">
                <div className="footer__links">
                    <p className="footer__links-title">Quick Links</p>
                    <ul className="footer__links-list">
                        <li className="footer__links-item"><a href="##">About Our Company</a></li>
                        <li className="footer__links-item"><a href="##">Services WE provide</a></li>
                        <li className="footer__links-item"><a href="##">Career & Opportunity</a></li>
                        <li className="footer__links-item"><a href="##">Privacy & policy</a></li>
                        <li className="footer__links-item"><a href="##">Contact US</a></li>
                    </ul>
                </div>
                <div className="footer__company">
                    <p className="footer__company-title">Company</p>
                    <ul className="footer__company-list">
                        <li className="footer__company-item"><a href="##">About Company</a></li>
                        <li className="footer__company-item"><a href="##">Our Testimonials</a></li>
                        <li className="footer__company-item"><a href="##">Latest News</a></li>
                        <li className="footer__company-item"><a href="##">Our misson</a></li>
                        <li className="footer__company-item"><a href="##">Get a free Quot</a></li>
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
                        <li className="footer__socials-item"><a href="##"><RiFacebookFill /></a></li>
                        <li className="footer__socials-item"><a href="##"><RiInstagramLine /></a></li>
                        <li className="footer__socials-item"><a href="##"><RiTwitterFill /></a></li>
                        <li className="footer__socials-item"><a href="##"><RiLinkedinFill /></a></li>
                    </ul>
                </div>
            </footer>
            <hr className="footer__line"/>
            <p className="footer__copy">Copyright @ 2020 <span>Brandoxide</span>.all right reserved.</p>
        </div>
    );
}

export default Footer;