import React from "react";
import heroImg from '../assets/img/hero.png'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const animation = {
    hidden: {
      x: 400,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

const Hero = () => {
    return(
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3}}
        className="container">
            <section className="hero" id="hero">
                <div className="hero__wrap">
                    <div className="hero__content">
                        <h2 className="hero__content-title">MODERN INTERIOR</h2>
                        <h1 className="hero__content-desc">Create Your Interior Design.</h1>
                        <p className="hero__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <Link to="footer" smooth={true}><button className="hero__content-btn" type="button">Contact</button></Link>
                    </div>
                    <motion.div 
                    custom = {3}
                    variants={animation} 
                    className="hero__wrapper">
                        <img className="hero__img" src={heroImg} alt={"interior"}/>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}

export default Hero;